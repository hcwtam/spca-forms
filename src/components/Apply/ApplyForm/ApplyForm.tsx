import React, { ReactElement } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';

import styles from './ApplyForm.module.css';

type FormData = {
  email: string;
  fullName: string;
  todo: string;
  todo2: string;
};

export default function ApplyForm(): ReactElement {
  const history = useHistory();

  const initialValues = {
    email: '',
    fullName: '',
    todo: '',
    todo2: ''
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    fullName: Yup.string().required('Required'),
    todo: Yup.string().required('Required'),
    todo2: Yup.string().required('Required')
  });

  const onSubmit = async (values: FormData) => {
    console.log('form data', values);
    history.push('/success');
  };

  return (
    <>
      <div className={styles.ApplyForm}>
        <h1>Personal Particulars</h1>
        <h2>* Please fill in the fields for record retrieval purpose</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => {
            return (
              <Form>
                <div className="form-row">
                  <label htmlFor="email">Email</label>
                  <Field type="email" name="email" placeholder="Email" />
                </div>
                <div className="form-row">
                  <label htmlFor="fullName">Email</label>
                  <Field type="text" name="fullName" placeholder="Full Name" />
                </div>
                <div className="form-row">
                  <label htmlFor="todo">Email</label>
                  <Field type="text" name="todo" placeholder="Todo" />
                </div>
                <div className="form-row">
                  <label htmlFor="todo2">Email</label>
                  <Field type="text" name="todo2" placeholder="Todo2" />
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
