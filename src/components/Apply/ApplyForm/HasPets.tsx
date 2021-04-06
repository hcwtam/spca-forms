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

const HAS_PETS_EN = {
  title: 'Do you have any pets?',
  name: 'hasPets',
  type: 'radio',
  options: ['Yes', 'No'],
  required: true
};

const HAS_PETS_HK = {
  title: '您有飼養寵物嗎？',
  name: 'hasPets',
  type: 'radio',
  options: ['有', '沒有'],
  required: true
};

const PET_TYPES_EN = {
  title: 'Pet Types',
  name: 'petTypes',
  type: 'checkbox',
  options: ['Dog', 'Cat', 'Others'],
  required: false,
  extendedInput: true
};
const PET_TYPES_HK = {
  title: '寵物類別',
  name: 'petTypes',
  type: 'checkbox',
  options: ['狗', '貓', '其他'],
  required: false,
  extendedInput: true
};

export default function HasPets({
  formik,
  questionNumber,
  language
}: Props): ReactElement {
  const { errors, touched } = formik;
  const field: FieldType = language === 'en' ? HAS_PETS_EN : HAS_PETS_HK;
  const field2: FieldType = language === 'en' ? PET_TYPES_EN : PET_TYPES_HK;

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
          {formik.values.hasPets === 'Yes' || formik.values.hasPets === '有' ? (
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
