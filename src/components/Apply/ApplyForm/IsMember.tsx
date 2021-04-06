import { FormikProps } from 'formik';
import React, { ReactElement } from 'react';
import { ChooseFormTypes } from '../../formFields/formUtils';
import { FieldType } from '../../formFields/Types';
import { UpdateFormData } from '../../Update/UpdateForm/UpdateForm';
import { ApplyFormData } from './ApplyForm';

interface Props {
  formik: FormikProps<ApplyFormData>;
  questionNumber: number;
  language: 'en' | 'hk';
}

const IS_MEMBER_EN = {
  title: 'Are you our member?',
  name: 'isMember',
  type: 'radio',
  options: ['Yes', 'No'],
  required: true
};
const IS_MEMBER_HK = {
  title: '您是否愛協會員？',
  name: 'isMember',
  type: 'radio',
  options: ['是', '否'],
  required: true
};

const MEMBER_NO_EN = {
  title: 'Membership Number',
  name: 'membNo',
  type: 'text',
  placeholder: 'Please provide your membership number',
  required: true
};
const MEMBER_NO_HK = {
  title: '會員號碼',
  name: 'membNo',
  type: 'text',
  placeholder: '會員號碼',
  required: true
};

export default function isMember({
  formik,
  questionNumber,
  language
}: Props): ReactElement {
  const { errors, touched } = formik;
  const field: FieldType = language === 'en' ? IS_MEMBER_EN : IS_MEMBER_HK;
  const field2: FieldType = language === 'en' ? MEMBER_NO_EN : MEMBER_NO_HK;

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
            {/* {field.required ? <span> *</span> : null} */}
          </label>
        ) : (
          <div> </div>
        )}
        <div className="form-field">
          {ChooseFormTypes(field, language)}
          {errors[field.name as keyof (UpdateFormData | ApplyFormData)] &&
          touched[field.name as keyof (UpdateFormData | ApplyFormData)] ? (
            <div className="form-error">
              {errors[field.name as keyof (UpdateFormData | ApplyFormData)]}
            </div>
          ) : null}
          {formik.values.isMember === 'Yes' ||
          formik.values.isMember === '是' ? (
            <div className="form-field">
              {ChooseFormTypes(field2, language)}
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
