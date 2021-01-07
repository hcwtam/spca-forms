import {
  Field,
  FieldProps,
  FormikErrors,
  FormikProps,
  FormikTouched
} from 'formik';
import React from 'react';
import { languageOptions } from '../../store/LanguageProvider';
import { ApplyFormData } from '../Apply/ApplyForm/ApplyForm';
import { UpdateFormData } from '../Update/UpdateForm/UpdateForm';
import { FieldType } from './Types';

export const ChooseFormTypes = (
  field: FieldType,
  language: languageOptions,
  errors:
    | FormikErrors<UpdateFormData>
    | FormikErrors<ApplyFormData>
    | null = null,
  touched:
    | FormikTouched<UpdateFormData>
    | FormikTouched<ApplyFormData>
    | null = null
) => {
  let fieldComponent = null;
  switch (field.type) {
    case 'radio':
      fieldComponent = (
        <div className={field.type} key={field.name}>
          {field.options?.map((option) => (
            <label key={option}>
              <Field type={field.type} name={field.name} value={option} />
              {option}
            </label>
          ))}
        </div>
      );
      break;
    case 'checkbox':
      fieldComponent = (
        <Field name={field.name} key={field.name}>
          {({ field: fieldProps, form }: FieldProps<any>) => {
            if (field.options) {
              const lastOption = field.options[field.options.length - 1];
              return (
                <>
                  <div className="checkbox-buttons">
                    <div
                      className="checkbox-button"
                      onClick={() =>
                        form.setFieldValue(field.name, field.options)
                      }
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
                    {field.options?.map((option) => {
                      return (
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
                                const nextValue = fieldProps.value.concat(
                                  option
                                );
                                form.setFieldValue(field.name, nextValue);
                              }
                            }}
                          />
                          {option}{' '}
                          {field.extendedInput &&
                          option === lastOption &&
                          fieldProps.value.includes(lastOption) ? (
                            <Field
                              type="text"
                              name={field.name + 'Others'}
                              placeholder="Please specify"
                            />
                          ) : null}
                        </label>
                      );
                    })}
                  </div>
                </>
              );
            }
          }}
        </Field>
      );
      break;
    case 'text':
      fieldComponent = (
        <Field
          type={field.type}
          name={field.name}
          placeholder={field.placeholder}
          key={field.name}
        />
      );
      break;
    case 'number':
      fieldComponent = (
        <Field
          type={field.type}
          name={field.name}
          placeholder={field.placeholder}
          key={field.name}
          min="0"
        />
      );
      break;
    case 'date':
      fieldComponent = (
        <>
          <div
            style={{
              width: 300,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <Field
              key="birthMonth"
              name="birthMonth"
              placeholder="MM"
              style={{ width: 120 }}
              type="text"
            />
            /
            <Field
              key="birthYear"
              name="birthYear"
              placeholder="yyyy"
              style={{ width: 160 }}
              type="text"
            />
          </div>
          {errors && touched ? (
            <div
              style={{
                width: 300,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <div className="form-error" style={{ width: 120 }}>
                {errors[
                  'birthMonth' as keyof (UpdateFormData | ApplyFormData)
                ] &&
                touched['birthMonth' as keyof (UpdateFormData | ApplyFormData)]
                  ? errors[
                      'birthMonth' as keyof (UpdateFormData | ApplyFormData)
                    ]
                  : ' '}
              </div>
              <div className="form-error" style={{ width: 160 }}>
                {errors[
                  'birthYear' as keyof (UpdateFormData | ApplyFormData)
                ] &&
                touched['birthYear' as keyof (UpdateFormData | ApplyFormData)]
                  ? errors[
                      'birthYear' as keyof (UpdateFormData | ApplyFormData)
                    ]
                  : ' '}
              </div>
            </div>
          ) : null}
        </>
      );
      break;
    default:
      break;
  }
  return fieldComponent;
};

export const generateField = (
  { errors, touched }: FormikProps<UpdateFormData> | FormikProps<ApplyFormData>,
  field: FieldType,
  language: languageOptions = 'en',
  questionNumber: number = 0
) => (
  <div className="field" key={field.name}>
    <div>
      {field.question ? <div className="question">{field.question}</div> : null}
      {field.statement ? (
        <div className="statement">
          {field.statement}
          {!field.statement2 && field.required ? <span> *</span> : null}
        </div>
      ) : null}
      {field.statement2 ? (
        <div className="statement">
          {field.statement2}
          {!field.statement3 && field.required ? <span> *</span> : null}
        </div>
      ) : null}
      {field.statement3 ? (
        <div className="statement">
          {field.statement3}
          {!field.statement4 && field.required ? <span> *</span> : null}
        </div>
      ) : null}
      {field.statement4 ? (
        <div className="statement">
          {field.statement4}
          {field.required ? <span> *</span> : null}
        </div>
      ) : null}
    </div>
    <div className="form-row">
      {field.title ? (
        <label
          htmlFor={field.name}
          style={
            field.type === 'checkbox'
              ? { alignSelf: 'flex-start', marginTop: 10 }
              : {}
          }
        >
          {questionNumber > 0 ? (
            <span
              style={{ marginRight: 10, color: '#555555', fontWeight: 400 }}
            >
              {questionNumber}.
            </span>
          ) : null}
          {field.title}
          {field.title && field.required ? <span> *</span> : null}
        </label>
      ) : (
        <div> </div>
      )}
      <div className="form-field">
        {ChooseFormTypes(field, language, errors, touched)}
        {field.note ? <div className="form-note">{field.note}</div> : null}
        {errors[field.name as keyof (UpdateFormData | ApplyFormData)] &&
        touched[field.name as keyof (UpdateFormData | ApplyFormData)] ? (
          <div className="form-error">
            {errors[field.name as keyof (UpdateFormData | ApplyFormData)]}
          </div>
        ) : null}
      </div>
    </div>
    {field.footnote1 ? <div className="footnote">{field.footnote1}</div> : null}
    {field.footnote2 ? <div className="footnote">{field.footnote2}</div> : null}
  </div>
);

export const generateAddressField = (
  formik: FormikProps<UpdateFormData> | FormikProps<ApplyFormData>,
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
