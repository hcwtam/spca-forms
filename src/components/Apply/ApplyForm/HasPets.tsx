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

const HAS_PETS = {
  title: 'Do you have any pets?',
  name: 'hasPets',
  type: 'radio',
  options: ['Yes', 'No'],
  required: true
};

const PET_TYPES = {
  title: 'Pet Types',
  name: 'petTypes',
  type: 'checkbox',
  options: ['Dog', 'Cat', 'Others'],
  required: false,
  extendedInput: true
};

export default function HasPets({
  formik,
  questionNumber
}: Props): ReactElement {
  const { errors, touched } = formik;
  const field: FieldType = HAS_PETS;
  const field2: FieldType = PET_TYPES;

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
          {chooseFormTypes(field, 'en')}
          {errors[field.name as keyof (UpdateFormData | ApplyFormData)] &&
          touched[field.name as keyof (UpdateFormData | ApplyFormData)] ? (
            <div className="form-error">
              {errors[field.name as keyof (UpdateFormData | ApplyFormData)]}
            </div>
          ) : null}
          {formik.values.hasPets === 'Yes' ? (
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
              {formik.values.petTypesOthers?.includes('Others') ? (
                <Field
                  type="text"
                  name={field2.name + 'Others'}
                  placeholder="Please specify"
                />
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
