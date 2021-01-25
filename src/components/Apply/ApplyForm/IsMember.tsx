import { Field, FormikProps } from 'formik';
import React, { ReactElement } from 'react';
import { ChooseFormTypes } from '../../formFields/formUtils';
import { FieldType } from '../../formFields/Types';
import { UpdateFormData } from '../../Update/UpdateForm/UpdateForm';
import { ApplyFormData } from './ApplyForm';

interface Props {
  formik: FormikProps<ApplyFormData>;
  questionNumber: number;
}

const IS_MEMBER = {
  title: 'Are you our member?',
  name: 'isMember',
  type: 'radio',
  options: ['Yes', 'No'],
  required: true
};

const MEMBER_NO = {
  title: 'Membership Number',
  name: 'memberNo',
  type: 'text',
  placeholder: 'Please provide your membership number',
  required: true
};

export default function isMember({
  formik,
  questionNumber
}: Props): ReactElement {
  const { errors, touched } = formik;
  const field: FieldType = IS_MEMBER;
  const field2: FieldType = MEMBER_NO;

  return (
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
          {ChooseFormTypes(field, 'en')}
          {errors[field.name as keyof (UpdateFormData | ApplyFormData)] &&
          touched[field.name as keyof (UpdateFormData | ApplyFormData)] ? (
            <div className="form-error">
              {errors[field.name as keyof (UpdateFormData | ApplyFormData)]}
            </div>
          ) : null}
          {formik.values.isMember === 'Yes' ? (
            <div className="form-field">
              {ChooseFormTypes(field2, 'en')}
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
          ) : null}
        </div>
      </div>
    </div>
  );
}
