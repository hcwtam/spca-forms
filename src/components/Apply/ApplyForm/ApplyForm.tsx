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
  particulars: '個人資料',
  InfoCollectionTitle: '收集個人資料聲明',
  compensationTitle: '免責聲明',
  tetanusTitle: '破傷風免責聲明',
  rabiesTitle: '狂犬病免責聲明',
  declarationTitle: '個人聲明',
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
      .oneOf(['Yes'], 'You must have an HKID card to become a volunteer.'),
    title: Yup.string().required(REQUIRED),
    birthMonth: Yup.number()
      .typeError('Please input valid month (e.g. "12")')
      .required(REQUIRED)
      .integer('Please input valid month (e.g. "12")')
      .min(1, 'Please input valid month (e.g. "12")')
      .max(12, 'Please input valid month (e.g. "12")'),
    birthYear: Yup.number()
      .typeError('Please input valid year (e.g. "2000")')
      .required(REQUIRED)
      .integer('Please input valid year (e.g. "2000")')
      .min(1900, 'Please input valid year (e.g. "2000")')
      .max(2020, 'Please input valid year (e.g. "2000")'),
    contactNumber: Yup.number()
      .typeError('it must be number')
      .required(REQUIRED)
      .test(
        'len',
        'Must be exactly 8 digits',
        (val) => val?.toString().length === 8
      ),
    email: Yup.string().email().required(REQUIRED),
    region: Yup.string().required(REQUIRED),
    emergencyContact: Yup.string().required(REQUIRED),
    relationship: Yup.string().required(),
    emergencyNumber: Yup.number()
      .typeError('it must be number')
      .required(REQUIRED)
      .test(
        'len',
        'Must be exactly 8 digits',
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
      .oneOf(['Agree'], 'You must agree with the statement above to continue.'),
    infoCollect2: Yup.string().required(REQUIRED),
    compensation: Yup.string()
      .required(REQUIRED)
      .oneOf(['Agree'], 'You must agree with the statement above to continue.'),
    tetanus: Yup.string().when('serviceTypesAR', {
      is: (value) => value.length,
      then: Yup.string()
        .required(REQUIRED)
        .oneOf(
          ['Agree'],
          'You must agree with the statement above to continue.'
        ),
      otherwise: Yup.string()
    }),
    rabies: Yup.string().when('serviceTypesAR', {
      is: (value) => value.length,
      then: Yup.string()
        .required(REQUIRED)
        .oneOf(
          ['Agree'],
          'You must agree with the statement above to continue.'
        ),
      otherwise: Yup.string()
    }),

    declaration: Yup.string()
      .required(REQUIRED)
      .oneOf(['Agree'], 'You must agree with the statement above to continue.')
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
            Thank you for your interest in donating your time and volunteering
            for the SPCA!
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
          Complete the form below to get started
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
                <HasPets formik={formik} questionNumber={12} />
                <IsMember formik={formik} questionNumber={13} />
                {APPLY_INFO.map((field: FieldType, index) =>
                  generateField(formik, field, language, 14 + index)
                )}
                <ServiceTypes formik={formik} questionNumber={17} />
                <HasIllness formik={formik} questionNumber={18} />
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
                <div className={styles.outro}>
                  <h2>THANK YOU!</h2>
                  <div>
                    Your answers will help us find the best role for you.
                  </div>{' '}
                  <div>
                    Please <strong>click the button below</strong> to submit
                    your application.
                  </div>
                </div>
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
