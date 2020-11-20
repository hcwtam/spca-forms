import React, { ReactElement, useContext } from 'react';
import { Formik, Form, FormikProps } from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';

import styles from './UpdateForm.module.css';
import {
  UpdateField,
  PARTICULARS_EN,
  PARTICULARS_HK,
  UPDATE_INFO_EN,
  UPDATE_INFO_HK
} from '../../formFields/updateFields';
import {
  generateAddressField,
  generateField
} from '../../formFields/formUtils';
import { languageContext } from '../../../store/LanguageProvider';

export type UpdateFormData = {
  firstName: string;
  lastName: string;
  title: string;
  hkidNumber: string;
  contactNumber: string;
  flat?: string;
  floor?: string;
  block?: string;
  address1?: string;
  address2?: string;
  district?: string;
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
  statement: `Changes have been made to the Personal Data (Privacy)
  Ordinance which relates to the use of our existing members’
  personal data for direct marketing. This includes our
  quarterly “Pawprint” newsmagazine as well as receiving
  information regarding gifting, charity mail order, events, and
  other marketing activities. SPCA hopes that you continue to
  support our work and that we may continue to use your personal
  data provided for these direct marketing purposes. If you
  agree that your contact details may continue to be used as
  before, there is no need for you to take any further action.
  However, if you no longer wish us to use your personal data to
  receive the SPCA newsmagazine and other information, please
  indicate your wish by email membership@spca.org.hk or by fax
  2511 5590.`,
  submit: 'Submit'
};

const UPDATE_FORM_CONTENT_HK = {
  particulars: '個人資料',
  updateTitle: '更新資料',
  updateSubtitle: '請填寫需要更新之資料',
  required: '為方便檢索記錄，請以英文填寫以下相關欄目',
  statement:
    '個人資料（私隱）條例現已生效，協會將使用現有會員及捐贈者有關資料寄出季刊「足印」、慈善籌款單張、郵購服務資料及推廣活動簡章。愛護動物協會希望閣下能支持我們的工作，讓我們繼續使用有關資料作推廣之用。若你一如以往支持本會推廣活動，則無須回覆；但倘若你不欲收到協會的刊物及資訊，請電郵至membership@spca.org.hk 或傳真至2511 5590。',
  submit: '提交'
};

export default function UpdateForm(): ReactElement {
  const history = useHistory();
  const { language } = useContext(languageContext);
  let PARTICULARS = PARTICULARS_EN;
  let UPDATE_INFO = UPDATE_INFO_EN;
  let UPDATE_FORM_CONTENT = UPDATE_FORM_CONTENT_EN;
  if (language === 'hk') {
    PARTICULARS = PARTICULARS_HK;
    UPDATE_INFO = UPDATE_INFO_HK;
    UPDATE_FORM_CONTENT = UPDATE_FORM_CONTENT_HK;
  }

  const initialValues = {
    firstName: '',
    lastName: '',
    title: '',
    hkidNumber: '',
    contactNumber: '',
    flat: '',
    floor: '',
    block: '',
    address1: '',
    address2: '',
    district: '',
    region: '',
    email: '',
    language: '',
    days: [],
    serviceTypes: []
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    title: Yup.string().required('Required'),
    hkidNumber: Yup.string()
      .required('Required')
      .test(
        'len',
        'Must be exactly 4 digits',
        (val) => val?.toString().length === 4
      ),
    contactNumber: Yup.number()
      .typeError('it must be number')
      .required('Required')
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
            console.log(formik);

            return (
              <Form>
                {PARTICULARS.map((field: UpdateField) =>
                  generateField(formik, field, language)
                )}
                <div className={styles.Box} />
                <h1>{UPDATE_FORM_CONTENT.updateTitle}</h1>
                <h2>{UPDATE_FORM_CONTENT.updateSubtitle}</h2>
                {generateAddressField(formik, language)}
                {UPDATE_INFO.map((field: UpdateField) =>
                  generateField(formik, field, language)
                )}
                <div className={styles.Statement}>
                  {UPDATE_FORM_CONTENT.statement}
                </div>
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
