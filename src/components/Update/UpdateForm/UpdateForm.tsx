import React, { ReactElement } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';

import styles from './UpdateForm.module.css';
import {
  UpdateField,
  particulars,
  updateInfo
} from '../../formFields/updateFields';
import {
  generateAddressField,
  generateField
} from '../../formFields/formUtils';

export type UpdateFormData = {
  firstName: string;
  lastName: string;
  title: string;
  hkidNumber: string;
  contactNumber: string;
  flat: string;
  floor: string;
  block: string;
  address1: string;
  address2: string;
  district: string;
  region: string;
  email: string;
  language: string;
};

export default function UpdateForm(): ReactElement {
  const history = useHistory();

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
    language: ''
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
    language: Yup.string()
  });

  const onSubmit = async (values: UpdateFormData) => {
    console.log('form data', values);
    history.push('/success');
  };

  return (
    <>
      <div className={styles.UpdateForm}>
        <h1>Personal Particulars</h1>
        <h2>
          <span>*</span> Please fill in the fields for record retrieval purpose
        </h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => {
            return (
              <Form>
                {particulars.map((field: UpdateField) =>
                  generateField(formik, field)
                )}
                <h1>Information to be updated</h1>
                {generateAddressField(formik)}
                {updateInfo.map((field: UpdateField) =>
                  generateField(formik, field)
                )}
                <div className={styles.Statement}>
                  Changes have been made to the Personal Data (Privacy)
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
                  2511 5590.
                </div>
                <button
                  className={styles.Button}
                  type="submit"
                  disabled={
                    !formik.dirty || !formik.isValid || formik.isSubmitting
                  }
                >
                  Submit
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </>
  );
}
