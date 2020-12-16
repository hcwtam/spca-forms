import React, { ReactElement, useContext } from 'react';
import { Formik, Form, FormikProps } from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';

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
import {
  generateAddressField,
  generateField
} from '../../formFields/formUtils';
import { languageContext } from '../../../store/LanguageProvider';
import { FieldType } from '../../formFields/Types';

export type ApplyFormData = {
  isMember: string;
  membershipNo?: string;
  firstName: string;
  lastName: string;
  title: string;
  hkidNumber: string;
  dateOfBirth: string;
  contactNumber: string;
  email: string;
  emergencyContact: string;
  relationship: string;
  emergencyNumber: string;
  flat?: string;
  floor?: string;
  block?: string;
  address1?: string;
  address2?: string;
  district?: string;
  region?: string;
  language?: string;
  experience?: number;
  hasPets: string;
  petTypes: string[];
  days?: string[];
  serviceTypes?: string[];
  hasIllness: string;
  illnesses: string;
  infoCollect1: string;
  infoCollect2: string;
  compensation: string;
  tetanus: string;
  rabies: string;
  declaration: string;
};

const APPLY_FORM_CONTENT_EN = {
  particulars: 'Personal Particulars',
  volunteerInfoTitle: 'Volunteering Information',
  InfoCollectionTitle: 'Personal Information Collection Statement',
  compensationTitle: 'Waiver of Compensation Benefit',
  tetanusTitle: 'Tetanus Waiver',
  rabiesTitle: 'Rabies Waiver',
  declarationTitle: 'Personal Declaration',
  submit: 'Submit'
};

const APPLY_FORM_CONTENT_HK = {
  particulars: '個人資料',
  volunteerInfoTitle: '義工資料',
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
    isMember: '',
    membershipNo: '',
    firstName: '',
    lastName: '',
    title: '',
    hkidNumber: '',
    dateOfBirth: '',
    contactNumber: '',
    email: '',
    emergencyContact: '',
    relationship: '',
    emergencyNumber: '',
    flat: '',
    floor: '',
    block: '',
    address1: '',
    address2: '',
    district: '',
    region: '',
    language: '',
    experience: 0,
    hasPets: '',
    petTypes: [],
    days: [],
    serviceTypes: [],
    hasIllness: '',
    illnesses: '',
    infoCollect1: '',
    infoCollect2: '',
    compensation: '',
    tetanus: '',
    rabies: '',
    declaration: ''
  };

  const validationSchema = Yup.object({
    isMember: Yup.string().required(REQUIRED),
    membershipNo: Yup.string().required(REQUIRED),
    firstName: Yup.string().required(REQUIRED),
    lastName: Yup.string().required(REQUIRED),
    title: Yup.string().required(REQUIRED),
    hkidNumber: Yup.string()
      .required(REQUIRED)
      .test(
        'len',
        'Must be exactly 8 digits',
        (val) => val?.toString().length === 4
      ),
    dateOfBirth: Yup.string().required(REQUIRED),
    email: Yup.string().email(),
    contactNumber: Yup.number()
      .typeError('it must be number')
      .required(REQUIRED)
      .test(
        'len',
        'Must be exactly 8 digits',
        (val) => val?.toString().length === 8
      ),
    emergencyContact: Yup.string().required(),
    relationship: Yup.string().required(),
    emergencyNumber: Yup.number()
      .typeError('it must be number')
      .required(REQUIRED)
      .test(
        'len',
        'Must be exactly 8 digits',
        (val) => val?.toString().length === 8
      ),
    flat: Yup.string(),
    floor: Yup.string(),
    block: Yup.string(),
    address1: Yup.string(),
    address2: Yup.string(),
    district: Yup.string(),
    region: Yup.string(),
    language: Yup.string(),
    hasPets: Yup.string(),
    petTypes: Yup.array(),
    days: Yup.array(),
    serviceTypes: Yup.array(),
    hasIllness: Yup.string(),
    illnesses: Yup.string(),
    infoCollect1: Yup.string(),
    infoCollect2: Yup.string(),
    compensation: Yup.string(),
    tetanus: Yup.string(),
    rabies: Yup.string(),
    declaration: Yup.string()
  });

  const onSubmit = async (values: ApplyFormData) => {
    console.log('form data', values);
    history.push('/success');
  };

  return (
    <>
      <div className={styles.Form}>
        <h1>{APPLY_FORM_CONTENT.particulars}</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik: FormikProps<ApplyFormData>) => {
            return (
              <Form>
                {PARTICULARS.map((field: FieldType) =>
                  generateField(formik, field, language)
                )}
                <div className={styles.Box} />
                {generateAddressField(formik, language)}
                <h1>{APPLY_FORM_CONTENT.volunteerInfoTitle}</h1>
                {APPLY_INFO.map((field: FieldType) =>
                  generateField(formik, field, language)
                )}
                <h1>{APPLY_FORM_CONTENT.InfoCollectionTitle}</h1>
                {INFO_COLLECTION.map((field: FieldType) =>
                  generateField(formik, field, language)
                )}

                <h1>{APPLY_FORM_CONTENT.compensationTitle}</h1>
                {COMPENSATION.map((field: FieldType) =>
                  generateField(formik, field, language)
                )}
                <h1>{APPLY_FORM_CONTENT.tetanusTitle}</h1>
                {TETANUS.map((field: FieldType) =>
                  generateField(formik, field, language)
                )}
                <h1>{APPLY_FORM_CONTENT.rabiesTitle}</h1>
                {RABIES.map((field: FieldType) =>
                  generateField(formik, field, language)
                )}
                <h1>{APPLY_FORM_CONTENT.declarationTitle}</h1>
                {DECLARATION.map((field: FieldType) =>
                  generateField(formik, field, language)
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
