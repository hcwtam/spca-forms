import { Field, FormikProps } from 'formik';
import React from 'react';
import { UpdateFormData } from '../Update/UpdateForm/UpdateForm';

import { UpdateField } from './updateFields';

export const chooseFormTypes = (field: UpdateField) => {
  switch (field.type) {
    case 'radio':
      return (
        <div className="radios">
          {field.options?.map((option) => (
            <label>
              <Field type="radio" name="picked" value={option} />
              {option}
            </label>
          ))}
        </div>
      );
    case 'text':
      return (
        <Field
          type={field.type}
          name={field.name}
          placeholder={field.placeholder}
        />
      );

    default:
      break;
  }
};

export const generateField = (
  { errors, touched }: FormikProps<UpdateFormData>,
  field: UpdateField
) => (
  <div className="form-row">
    {field.title ? (
      <label htmlFor={field.name}>
        {field.title}
        {field.required ? <span> *</span> : null}
      </label>
    ) : (
      <div> </div>
    )}
    <div className="form-field">
      {chooseFormTypes(field)}
      {field.note ? <div className="form-note">{field.note}</div> : null}
      {errors[field.name as keyof UpdateFormData] &&
      touched[field.name as keyof UpdateFormData] ? (
        <div className="form-error">
          {errors[field.name as keyof UpdateFormData]}
        </div>
      ) : null}
    </div>
  </div>
);

export const generateAddressField = (formik: FormikProps<UpdateFormData>) => {
  const addressFields = [
    {
      name: 'address1',
      type: 'text',
      placeholder: 'Name of Building/ Lot Number',
      required: false
    },
    {
      name: 'address2',
      type: 'text',
      placeholder: 'Number & Name of Street/Name of Estate/Name of Village',
      required: false
    },
    {
      name: 'district',
      type: 'text',
      placeholder: 'District',
      required: false
    },
    {
      name: 'region',
      type: 'text',
      placeholder: 'Region',
      required: false
    }
  ];
  return (
    <>
      <div className="form-row">
        <label>Address</label>
        <div className="form-field3">
          <Field type="text" name="flat" placeholder="Flat" />
          <Field type="text" name="floor" placeholder="Floor" />
          <Field type="text" name="block" placeholder="Block" />
        </div>
      </div>
      {addressFields.map((field) => generateField(formik, field))}
    </>
  );
};
