import React, { ReactElement, useContext } from 'react';
import { Formik, Form, FormikProps } from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';

import styles from './UpdateForm.module.css';
import {
  PARTICULARS_EN,
  PARTICULARS_HK,
  UPDATE_INFO_EN,
  UPDATE_INFO_HK
} from '../../formFields/updateFields';
import { generateField } from '../../formFields/formUtils';
import { languageContext } from '../../../store/LanguageProvider';
import { FieldType } from '../../formFields/Types';
import { REQUIRED_EN, REQUIRED_HK } from '../../formFields/applyFields';

export type UpdateFormData = {
  firstName: string;
  lastName: string;
  hkidNumber: string;
  contactNumber: string;
  region?: string;
  email?: string;
  language?: string;
  days?: string[];
  serviceTypes?: string[];
};

const UPDATE_FORM_CONTENT_EN = {
  particulars: 'Personal Particulars',
  required: 'Please fill in the fields for record retrieval purpose',
  updateTitle: 'Information to be updated',
  updateSubtitle: 'Please fill in the fields you wish to update',
  submit: 'Submit'
};

const UPDATE_FORM_CONTENT_HK = {
  particulars: '個人資料',
  updateTitle: '更新資料',
  updateSubtitle: '請填寫需要更新之資料',
  required: '為方便檢索記錄，請以英文填寫以下相關欄目',
  submit: '提交'
};

export default function UpdateForm(): ReactElement {
  const history = useHistory();
  const { language } = useContext(languageContext);
  let PARTICULARS = PARTICULARS_EN;
  let UPDATE_INFO = UPDATE_INFO_EN;
  let UPDATE_FORM_CONTENT = UPDATE_FORM_CONTENT_EN;
  let REQUIRED = REQUIRED_EN;
  if (language === 'hk') {
    PARTICULARS = PARTICULARS_HK;
    UPDATE_INFO = UPDATE_INFO_HK;
    UPDATE_FORM_CONTENT = UPDATE_FORM_CONTENT_HK;
    REQUIRED = REQUIRED_HK;
  }

  const initialValues = {
    firstName: '',
    lastName: '',
    hkidNumber: '',
    contactNumber: '',
    region: '',
    email: '',
    language: '',
    days: [],
    serviceTypes: []
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required(REQUIRED),
    lastName: Yup.string().required(REQUIRED),
    hkidNumber: Yup.string()
      .required(REQUIRED)
      .test(
        'len',
        'Must be exactly 4 digits',
        (val) => val?.toString().length === 4
      ),
    contactNumber: Yup.number()
      .typeError('it must be number')
      .test(
        'len',
        'Must be exactly 8 digits',
        (val) => val?.toString().length === 8
      ),
    district: Yup.string(),
    region: Yup.string(),
    email: Yup.string().email(),
    language: Yup.string(),
    days: Yup.array(),
    serviceTypes: Yup.array()
  });

  const onSubmit = async (values: UpdateFormData) => {
    console.log('form data', values);
    history.push('/success');
  };

  return (
    <>
      <div className={styles.UpdateForm}>
        <h1>{UPDATE_FORM_CONTENT.particulars}</h1>
        <h2>
          <span>*</span> {UPDATE_FORM_CONTENT.required}
        </h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik: FormikProps<UpdateFormData>) => {
            return (
              <Form>
                {PARTICULARS.map((field: FieldType) =>
                  generateField(formik, field, language)
                )}
                <div className={styles.Box} />
                <h1>{UPDATE_FORM_CONTENT.updateTitle}</h1>
                <h2>{UPDATE_FORM_CONTENT.updateSubtitle}</h2>
                {UPDATE_INFO.map((field: FieldType) =>
                  generateField(formik, field, language)
                )}
                <button
                  className={styles.Button}
                  type="submit"
                  disabled={
                    !formik.dirty || !formik.isValid || formik.isSubmitting
                  }
                >
                  {UPDATE_FORM_CONTENT.submit}
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </>
  );
}
