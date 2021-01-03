import { Field, FormikProps } from 'formik';
import React, { ReactElement } from 'react';
import { chooseFormTypes } from '../../formFields/formUtils';
import { FieldType } from '../../formFields/Types';
import { UpdateFormData } from '../../Update/UpdateForm/UpdateForm';
import { ApplyFormData } from './ApplyForm';

interface Props {
  formik: FormikProps<ApplyFormData>;
  questionNumber: number;
}

const OCCUPATION = {
  title: 'What is your current/ pre-retirement type of occupation?',
  name: 'occupation',
  type: 'radio',
  options: [
    'Management',
    'Service',
    'Admin',
    'Technical',
    'Professional',
    'Not applicable',
    'Others'
  ],
  required: true
};

const INDUSTRY = {
  title: 'Which industry did you work in?',
  name: 'industry',
  type: 'radio',
  options: [
    'Financial Service',
    'IT',
    'Insurance',
    'Airline',
    'Education',
    'Law',
    'Audit',
    'Medical',
    'Health Services',
    'Engineering',
    'Architectural',
    'Docial Walfare',
    'Tourism'
  ],
  required: true
};

export default function Occupation({
  formik,
  questionNumber
}: Props): ReactElement {
  const { errors, touched } = formik;
  const field: FieldType = OCCUPATION;
  const field2: FieldType = INDUSTRY;
  return (
    <>
      <div className="field" key={field.name}>
        <div className="form-row">
          {field.title ? (
            <label htmlFor={field.name}>
              {questionNumber > 0 ? (
                <span
                  style={{ marginRight: 10, color: '#555555', fontWeight: 400 }}
                >
                  {questionNumber}.
                </span>
              ) : null}
              {field.title}
              {field.required ? <span> *</span> : null}
            </label>
          ) : (
            <div> </div>
          )}
          <div className="form-field">
            {chooseFormTypes(field, 'en')}
            {field.note ? <div className="form-note">{field.note}</div> : null}
            {errors[field.name as keyof (UpdateFormData | ApplyFormData)] &&
            touched[field.name as keyof (UpdateFormData | ApplyFormData)] ? (
              <div className="form-error">
                {errors[field.name as keyof (UpdateFormData | ApplyFormData)]}
              </div>
            ) : null}
            {formik.values.occupation === 'Others' ? (
              <Field
                type="text"
                name={field.name + 'Others'}
                placeholder="Please specify"
              />
            ) : null}
          </div>
        </div>
      </div>

      {formik.values.occupation === 'Professional' ? (
        <div className="field" key={field2.name}>
          <div className="form-row">
            {field2.title ? (
              <label htmlFor={field2.name}>
                {questionNumber > 0 ? (
                  <span
                    style={{
                      marginRight: 10,
                      color: '#555555',
                      fontWeight: 400
                    }}
                  >
                    {questionNumber}.
                  </span>
                ) : null}
                {field2.title}
                {field2.required ? <span> *</span> : null}
              </label>
            ) : (
              <div> </div>
            )}
            <div className="form-field">
              {chooseFormTypes(field2, 'en')}
              {field2.note ? (
                <div className="form-note">{field2.note}</div>
              ) : null}
              {errors[field2.name as keyof (UpdateFormData | ApplyFormData)] &&
              touched[field2.name as keyof (UpdateFormData | ApplyFormData)] ? (
                <div className="form-error">
                  {
                    errors[
                      field2.name as keyof (UpdateFormData | ApplyFormData)
                    ]
                  }
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
