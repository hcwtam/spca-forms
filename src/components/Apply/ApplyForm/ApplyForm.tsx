import React, { ReactElement, useContext, useEffect, useState } from 'react';
import { Formik, Form, FormikProps } from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import Reward, { RewardElement } from 'react-rewards';

import styles from './ApplyForm.module.css';
import {
  COMPENSATION_EN,
  COMPENSATION_HK,
  INFO_COLLECTION_EN,
  INFO_COLLECTION_HK,
  PARTICULARS_EN,
  PARTICULARS_HK,
  RABIES_EN,
  RABIES_HK,
  TETANUS_EN,
  TETANUS_HK,
  APPLY_INFO_EN,
  APPLY_INFO_HK,
  REQUIRED_EN,
  REQUIRED_HK,
  DECLARATION_EN,
  DECLARATION_HK
} from '../../formFields/applyFields';
import { generateField } from '../../formFields/formUtils';
import { languageContext } from '../../../store/LanguageProvider';
import { FieldType } from '../../formFields/Types';
import HasIllness from './HasIllness';
import ServiceTypes from './ServiceTypes';
import HasPets from './HasPets';
import IsMember from './IsMember';

export type ApplyFormData = {
  firstName: string;
  lastName: string;
  hkid: string;
  title: string;
  birthMonth: string;
  birthYear: string;
  contactNumber: string;
  email: string;
  emergencyContact: string;
  relationship: string;
  emergencyNumber: string;
  isMember: string;
  membNo: string;
  region?: string;
  language: string[];
  experience?: number;
  hasPets: string;
  petTypes: string[];
  petTypesOthers?: string;
  days?: string[];
  serviceTypesAR?: string[];
  serviceTypesNAR?: string[];
  hasIllness: string;
  illnesses: string;
  occupation?: string;
  industry?: string;
  industryOthers?: string;
  occupationOthers?: string;
  infoCollect1: string;
  infoCollect2: string;
  compensation: string;
  tetanus: string;
  rabies: string;
  declaration: string;
};

// confetti configurations
const REWARD_CONFIG = {
  lifetime: 200,
  angle: 90,
  decay: 0.91,
  spread: 150,
  startVelocity: 20,
  elementCount: 40,
  elementSize: 10,
  zIndex: 10,
  springAnimation: true
};

// Content
const INTRO_EN =
  'Thank you for your interest in donating your time and volunteering for the SPCA!';
const INTRO_HK = '感謝您願意施贈寶貴時間加入愛護動物協會義工團隊!';

const PROMPT_EN = 'Complete the form below to get started';
const PROMPT_HK = '請填寫以下申請表格';

const APPLY_FORM_CONTENT_EN = {
  particulars: 'A)  Personal Particulars and Volunteering Information',
  InfoCollectionTitle: 'B)  Personal Information Collection Statement',
  compensationTitle: 'C)  Waiver of Compensation Benefit',
  tetanusTitle: 'D) Tetanus Waiver',
  rabiesTitle: 'E)  Rabies Waiver',
  declarationTitle: 'Final Section: Personal Declaration',
  submit: 'Submit'
};

const APPLY_FORM_CONTENT_HK = {
  particulars: 'A)  個人資料',
  InfoCollectionTitle: 'B)  收集個人資料聲明',
  compensationTitle: 'C)  免責聲明',
  tetanusTitle: 'D) 破傷風免責聲明',
  rabiesTitle: 'E)  狂犬病免責聲明',
  declarationTitle: '最后一節: 個人聲明',
  submit: '提交'
};

export default function ApplyForm(): ReactElement {
  const history = useHistory();
  const { language } = useContext(languageContext);
  const [rewardRef, setRewardRef] = useState<RewardElement | null>(null);

  useEffect(() => {
    if (rewardRef) {
      rewardRef.rewardMe();
    }
  }, [rewardRef]);

  let PARTICULARS = PARTICULARS_EN;
  let APPLY_INFO = APPLY_INFO_EN;
  let APPLY_FORM_CONTENT = APPLY_FORM_CONTENT_EN;
  let INFO_COLLECTION = INFO_COLLECTION_EN;
  let COMPENSATION = COMPENSATION_EN;
  let TETANUS = TETANUS_EN;
  let RABIES = RABIES_EN;
  let REQUIRED = REQUIRED_EN;
  let DECLARATION = DECLARATION_EN;
  if (language === 'hk') {
    PARTICULARS = PARTICULARS_HK;
    APPLY_INFO = APPLY_INFO_HK;
    APPLY_FORM_CONTENT = APPLY_FORM_CONTENT_HK;
    INFO_COLLECTION = INFO_COLLECTION_HK;
    COMPENSATION = COMPENSATION_HK;
    TETANUS = TETANUS_HK;
    RABIES = RABIES_HK;
    REQUIRED = REQUIRED_HK;
    DECLARATION = DECLARATION_HK;
  }

  const initialValues = {
    firstName: '',
    lastName: '',
    hkid: '',
    title: '',
    birthMonth: '',
    birthYear: '',
    contactNumber: '',
    email: '',
    region: '',
    emergencyContact: '',
    relationship: '',
    emergencyNumber: '',
    isMember: '',
    membNo: '',
    language: [],
    experience: 0,
    hasPets: '',
    petTypes: [],
    petTypesOthers: '',
    days: [],
    serviceTypesAR: [],
    serviceTypesNAR: [],
    hasIllness: '',
    illnesses: '',
    industry: '',
    industryOthers: '',
    occupationOthers: '',
    infoCollect1: '',
    infoCollect2: '',
    compensation: '',
    tetanus: '',
    rabies: '',
    declaration: ''
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required(REQUIRED),
    lastName: Yup.string().required(REQUIRED),
    hkid: Yup.string()
      .required(REQUIRED)
      .oneOf(
        ['Yes', '是'],
        language === 'en'
          ? 'You must have an HKID card to become a volunteer.'
          : '所有義工必須持有香港身份證'
      ),
    title: Yup.string().required(REQUIRED),
    birthMonth: Yup.number()
      .typeError(
        language === 'en'
          ? 'Please input valid month (e.g. "12")'
          : '請填寫正確月份(如："12")'
      )
      .required(REQUIRED)
      .integer(
        language === 'en'
          ? 'Please input valid month (e.g. "12")'
          : '請填寫正確月份(如："12")'
      )
      .min(
        1,
        language === 'en'
          ? 'Please input valid month (e.g. "12")'
          : '請填寫正確月份(如："12")'
      )
      .max(
        12,
        language === 'en'
          ? 'Please input valid month (e.g. "12")'
          : '請填寫正確月份(如："12")'
      ),
    birthYear: Yup.number()
      .typeError(
        language === 'en'
          ? 'Please input valid year (e.g. "2000")'
          : '請填寫正確年份(如："2000")'
      )
      .required(REQUIRED)
      .integer(
        language === 'en'
          ? 'Please input valid year (e.g. "2000")'
          : '請填寫正確年份(如："2000")'
      )
      .min(
        1900,
        language === 'en'
          ? 'Please input valid year (e.g. "2000")'
          : '請填寫正確年份(如："2000")'
      )
      .max(
        2020,
        language === 'en'
          ? 'Please input valid year (e.g. "2000")'
          : '請填寫正確年份(如："2000")'
      ),
    contactNumber: Yup.number()
      .typeError(
        language === 'en' ? 'it must be number' : '電話號碼必須為八位數字'
      )
      .required(REQUIRED)
      .test(
        'len',
        language === 'en'
          ? 'Must be exactly 8 digits'
          : '電話號碼必須為八位數字',
        (val) => val?.toString().length === 8
      ),
    email: Yup.string()
      .email(
        language === 'en' ? 'Email format incorrect' : '請提供正確電郵地址'
      )
      .required(REQUIRED),
    region: Yup.string().required(REQUIRED),
    emergencyContact: Yup.string().required(REQUIRED),
    relationship: Yup.string().required(REQUIRED),
    emergencyNumber: Yup.number()
      .typeError(
        language === 'en' ? 'It must be number' : '電話號碼必須為八位數字'
      )
      .required(REQUIRED)
      .test(
        'len',
        language === 'en'
          ? 'Must be exactly 8 digits'
          : '電話號碼必須為八位數字',
        (val) => val?.toString().length === 8
      ),
    isMember: Yup.string().required(REQUIRED),
    membNo: Yup.string(),
    language: Yup.array().required(REQUIRED),
    experience: Yup.number().required(REQUIRED),
    days: Yup.array().required(REQUIRED),
    serviceTypesAR: Yup.array(),
    serviceTypesNAR: Yup.array(),
    hasPets: Yup.string().required(REQUIRED),
    petTypes: Yup.array(),
    petTypesOthers: Yup.string(),
    industry: Yup.string(),
    industryOthers: Yup.string(),
    hasIllness: Yup.string().required(REQUIRED),
    illnesses: Yup.string(),
    infoCollect1: Yup.string()
      .required(REQUIRED)
      .oneOf(
        ['Agree', '同意'],
        language === 'en'
          ? 'You must agree with the statement above to continue.'
          : '(請按 ［同意］ 以繼續)'
      ),
    infoCollect2: Yup.string().required(REQUIRED),
    compensation: Yup.string()
      .required(REQUIRED)
      .oneOf(
        ['Agree', '同意'],
        language === 'en'
          ? 'You must agree with the statement above to continue.'
          : '(請按 ［同意］ 以繼續)'
      ),
    tetanus: Yup.string().when('serviceTypesAR', {
      is: (value) => value.length,
      then: Yup.string()
        .required(REQUIRED)
        .oneOf(
          ['Agree', '同意'],
          language === 'en'
            ? 'You must agree with the statement above to continue.'
            : '(請按 ［同意］ 以繼續)'
        ),
      otherwise: Yup.string()
    }),
    rabies: Yup.string().when('serviceTypesAR', {
      is: (value) => value.length,
      then: Yup.string()
        .required(REQUIRED)
        .oneOf(
          ['Agree', '同意'],
          language === 'en'
            ? 'You must agree with the statement above to continue.'
            : '(請按 ［同意］ 以繼續)'
        ),
      otherwise: Yup.string()
    }),

    declaration: Yup.string()
      .required(REQUIRED)
      .oneOf(
        ['Agree', '同意'],
        language === 'en'
          ? 'You must agree with the statement above to continue.'
          : '(請按 ［同意］ 以繼續)'
      )
  });

  const onSubmit = async (values: ApplyFormData) => {
    console.log('form data', values);
    history.push('/success');
  };

  return (
    <>
      <div className={styles.Form}>
        <Reward
          ref={(ref) => setRewardRef(ref)}
          type={'confetti'}
          config={REWARD_CONFIG}
        >
          <div className={styles.intro}>
            {language === 'en' ? INTRO_EN : INTRO_HK}
          </div>
        </Reward>
        <h2
          style={{
            color: '#666666',
            borderBottom: '1px solid #eee',
            width: '100%',
            textAlign: 'center',
            paddingBottom: 20
          }}
        >
          {language === 'en' ? PROMPT_EN : PROMPT_HK}
        </h2>
        <h1>{APPLY_FORM_CONTENT.particulars}</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik: FormikProps<ApplyFormData>) => {
            console.log(formik.isValid);

            return (
              <Form>
                {PARTICULARS.map((field: FieldType, index) =>
                  generateField(formik, field, language, 1 + index)
                )}
                <HasPets
                  formik={formik}
                  questionNumber={12}
                  language={language}
                />
                <IsMember
                  formik={formik}
                  questionNumber={13}
                  language={language}
                />
                {APPLY_INFO.map((field: FieldType, index) =>
                  generateField(formik, field, language, 14 + index)
                )}
                <ServiceTypes
                  formik={formik}
                  questionNumber={17}
                  language={language}
                />
                <HasIllness
                  formik={formik}
                  questionNumber={18}
                  language={language}
                />
                <h1>{APPLY_FORM_CONTENT.InfoCollectionTitle}</h1>
                {INFO_COLLECTION.map((field: FieldType) =>
                  generateField(formik, field, language)
                )}

                <h1>{APPLY_FORM_CONTENT.compensationTitle}</h1>
                {COMPENSATION.map((field: FieldType) =>
                  generateField(formik, field, language)
                )}
                {formik.values.serviceTypesAR &&
                formik.values.serviceTypesAR.length ? (
                  <>
                    <h1>{APPLY_FORM_CONTENT.tetanusTitle}</h1>
                    {TETANUS.map((field: FieldType) =>
                      generateField(formik, field, language)
                    )}
                    <h1>{APPLY_FORM_CONTENT.rabiesTitle}</h1>
                    {RABIES.map((field: FieldType) =>
                      generateField(formik, field, language)
                    )}
                  </>
                ) : null}
                <h1>{APPLY_FORM_CONTENT.declarationTitle}</h1>
                {DECLARATION.map((field: FieldType) =>
                  generateField(formik, field, language)
                )}
                {language === 'en' ? (
                  <div className={styles.outro}>
                    <h2>THANK YOU!</h2>
                    <div>
                      Your answers will help us find the best role for you, and
                      we will notify you via email when we find suitable
                      volunteering opportunities.
                    </div>{' '}
                    <div>
                      Please <strong>click the button below</strong> to submit
                      your application.
                    </div>
                  </div>
                ) : (
                  <div className={styles.outro}>
                    <h2 style={{ fontSize: 48 }}>再次感謝您的申請！</h2>
                    <div>
                      你所登記的資料，能讓我們替你找出最合適的義務工作。我們將會再以電郵通知大家有關各類義工需要及其工作安排。
                    </div>{' '}
                    <div>
                      請按下方 <strong>「提交」</strong> 以完成登記你的申請。
                    </div>
                  </div>
                )}
                <button
                  className={styles.Button}
                  type="submit"
                  disabled={
                    !formik.dirty || !formik.isValid || formik.isSubmitting
                  }
                >
                  {APPLY_FORM_CONTENT.submit}
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </>
  );
}
