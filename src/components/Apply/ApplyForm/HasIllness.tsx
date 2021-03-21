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

const HAS_ILLNESS = {
  title:
    'Do you have any physical or psychological limitations or disabilities that might hinder you from participation in some activities (such as a heart condition, back injury, epilepsy, allergies etc.)?',
  name: 'hasIllness',
  type: 'radio',
  options: ['Yes', 'No'],
  required: true
};

export default function HasIllness({
  formik,
  questionNumber
}: Props): ReactElement {
  const { errors, touched } = formik;
  const field: FieldType = HAS_ILLNESS;

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
          {formik.values.hasIllness === 'Yes' ? (
            <Field type="text" name="illnesses" placeholder="Please specify" />
          ) : null}
        </div>
      </div>
    </div>
  );
}
