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
import { generateField } from '../../formFields/formUtils';
import { languageContext } from '../../../store/LanguageProvider';
import { FieldType } from '../../formFields/Types';
import Occupation from './Occupation';
import HasIllness from './HasIllness';
import ServiceTypes from './ServiceTypes';
import HasPets from './HasPets';

export type ApplyFormData = {
  isMember: string;
  firstName: string;
  lastName: string;
  title: string;
  dateOfBirth: string;
  contactNumber: string;
  email: string;
  emergencyContact: string;
  relationship: string;
  emergencyNumber: string;
  region?: string;
  language?: string;
  experience?: number;
  hasPets: string;
  petTypes: string[];
  petTypesOthers?: string;
  days?: string[];
  serviceTypesAR?: string[];
  serviceTypesNAR?: string[];
  hasIllness: string;
  illnesses: string;
  occupation: string;
  industry?: string;
  occupationOthers?: string;
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
    firstName: '',
    lastName: '',
    title: '',
    dateOfBirth: '',
    contactNumber: '',
    email: '',
    region: '',
    emergencyContact: '',
    relationship: '',
    emergencyNumber: '',
    language: '',
    experience: 0,
    hasPets: '',
    petTypes: [],
    petTypesOthers: '',
    days: [],
    serviceTypesAR: [],
    serviceTypesNAR: [],
    hasIllness: '',
    illnesses: '',
    occupation: '',
    industry: '',
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
    title: Yup.string().required(REQUIRED),
    dateOfBirth: Yup.string().required(REQUIRED),
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
    isMember: Yup.string().required(REQUIRED),
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

    language: Yup.string().required(REQUIRED),
    experience: Yup.number().required(REQUIRED),
    days: Yup.array().required(REQUIRED),
    serviceTypesAR: Yup.array(),
    serviceTypesNAR: Yup.array(),
    hasPets: Yup.string().required(REQUIRED),
    petTypes: Yup.array(),
    petTypesOthers: Yup.string(),
    occupation: Yup.string().required(REQUIRED),
    occupationOthers: Yup.string(),
    industry: Yup.string(),
    hasIllness: Yup.string().required(REQUIRED),
    illnesses: Yup.string(),
    infoCollect1: Yup.string()
      .required(REQUIRED)
      .oneOf(['Agree'], 'You must agree with the statement above to continue.'),
    infoCollect2: Yup.string()
      .required(REQUIRED)
      .oneOf(['Agree'], 'You must agree with the statement above to continue.'),
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
        <h1>{APPLY_FORM_CONTENT.particulars}</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik: FormikProps<ApplyFormData>) => {
            return (
              <Form>
                {PARTICULARS.map((field: FieldType, index) =>
                  generateField(formik, field, language, 1 + index)
                )}
                <div className={styles.Box} />
                <h1>{APPLY_FORM_CONTENT.volunteerInfoTitle}</h1>
                {APPLY_INFO.map((field: FieldType, index) =>
                  generateField(formik, field, language, 12 + index)
                )}
                <ServiceTypes formik={formik} questionNumber={15} />
                <HasPets formik={formik} questionNumber={16} />
                <Occupation formik={formik} questionNumber={17} />
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
