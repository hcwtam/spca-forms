import { Field, FieldProps, FormikProps } from 'formik';
import React from 'react';
import { languageOptions } from '../../store/LanguageProvider';
import { UpdateFormData } from '../Update/UpdateForm/UpdateForm';

import { UpdateField } from './updateFields';

export const chooseFormTypes = (
  field: UpdateField,
  language: languageOptions
) => {
  switch (field.type) {
    case 'radio':
      return (
        <div className={field.type} key={field.name}>
          {field.options?.map((option) => (
            <label key={option}>
              <Field type={field.type} name={field.name} value={option} />
              {option}
            </label>
          ))}
        </div>
      );
    case 'checkbox':
      return (
        <Field name={field.name} key={field.name}>
          {({ field: fieldProps, form }: FieldProps<any>) => (
            <>
              <div className="checkbox-buttons">
                <div
                  className="checkbox-button"
                  onClick={() => form.setFieldValue(field.name, field.options)}
                >
                  {language === 'en' ? 'All' : '全選'}
                </div>
                <div>{' | '}</div>
                <div
                  className="checkbox-button"
                  onClick={() => form.setFieldValue(field.name, [])}
                >
                  {language === 'en' ? 'Clear' : '清除'}
                </div>
              </div>
              <div className={field.type}>
                {field.options?.map((option) => (
                  <label key={option}>
                    <Field
                      type={field.type}
                      name={field.name}
                      value={option}
                      checked={fieldProps.value.includes(option)}
                      onChange={() => {
                        if (fieldProps.value.includes(option)) {
                          const nextValue = fieldProps.value.filter(
                            (value: string): boolean => value !== option
                          );
                          form.setFieldValue(field.name, nextValue);
                        } else {
                          const nextValue = fieldProps.value.concat(option);
                          form.setFieldValue(field.name, nextValue);
                        }
                      }}
                    />
                    {option}
                  </label>
                ))}
              </div>
            </>
          )}
        </Field>
      );
    case 'text':
      return (
        <Field
          type={field.type}
          name={field.name}
          placeholder={field.placeholder}
          key={field.name}
        />
      );

    default:
      break;
  }
};

export const generateField = (
  { errors, touched }: FormikProps<UpdateFormData>,
  field: UpdateField,
  language: languageOptions = 'en'
) => (
  <div className="form-row" key={field.name}>
    {field.title ? (
      <label
        htmlFor={field.name}
        style={
          field.type === 'checkbox'
            ? { alignSelf: 'flex-start', marginTop: 10 }
            : {}
        }
      >
        {field.title}
        {field.required ? <span> *</span> : null}
      </label>
    ) : (
      <div> </div>
    )}
    <div className="form-field">
      {chooseFormTypes(field, language)}
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

export const generateAddressField = (
  formik: FormikProps<UpdateFormData>,
  language: languageOptions
) => {
  const addressFieldsEN = [
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
  const addressFieldsHK = [
    {
      name: 'address1',
      type: 'text',
      placeholder: '大廈名稱 / 地段號數',
      required: false
    },
    {
      name: 'address2',
      type: 'text',
      placeholder: '街道及門牌號碼  / 屋邨名稱 / 鄉村名稱',
      required: false
    },
    {
      name: 'district',
      type: 'text',
      placeholder: '地區',
      required: false
    },
    {
      name: 'region',
      type: 'text',
      placeholder: '地域',
      required: false
    }
  ];
  let addressFields = addressFieldsEN;
  if (language === 'hk') addressFields = addressFieldsHK;
  return (
    <div className="address">
      <div className="form-row">
        <label>{language === 'en' ? 'Address' : '地址'}</label>
        <div className="form-field3">
          <Field
            type="text"
            name="flat"
            placeholder={language === 'en' ? 'Flat' : '室'}
          />
          <Field
            type="text"
            name="floor"
            placeholder={language === 'en' ? 'Floor' : '樓層'}
          />
          <Field
            type="text"
            name="block"
            placeholder={language === 'en' ? 'Block' : '座號'}
          />
        </div>
      </div>
      {addressFields.map((field) => generateField(formik, field))}
    </div>
  );
};
