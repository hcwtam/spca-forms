import { Field, FormikProps } from 'formik';
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

const HAS_ILLNESS_EN = {
  title:
    'Do you have any physical or psychological limitations or disabilities that might hinder you from participation in some activities (such as a heart condition, back injury, epilepsy, allergies etc.)?',
  name: 'hasIllness',
  type: 'radio',
  options: ['Yes', 'No'],
  required: true
};
const HAS_ILLNESS_HK = {
  title:
    '請問你有否一些心理障礙或身體殘疾以致未能參與某些工作（例如：心臟毛病、脊骨損傷、癲癇症、敏感等等）？若有，請寫明',
  name: 'hasIllness',
  type: 'radio',
  options: ['是', '否'],
  required: true
};

export default function HasIllness({
  formik,
  questionNumber,
  language
}: Props): ReactElement {
  const { errors, touched } = formik;
  const field: FieldType = language === 'en' ? HAS_ILLNESS_EN : HAS_ILLNESS_HK;

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
          {ChooseFormTypes(field, 'en')}
          {errors[field.name as keyof (UpdateFormData | ApplyFormData)] &&
          touched[field.name as keyof (UpdateFormData | ApplyFormData)] ? (
            <div className="form-error">
              {errors[field.name as keyof (UpdateFormData | ApplyFormData)]}
            </div>
          ) : null}
          {formik.values.hasIllness === 'Yes' ||
          formik.values.hasIllness === '是' ? (
            <Field
              type="text"
              name="illnesses"
              placeholder={language === 'en' ? 'Please specify' : '請詳細列明'}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}
