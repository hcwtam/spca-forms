import { FormikProps } from 'formik';
import React, { ReactElement } from 'react';
import { generateField } from '../../formFields/formUtils';
import { ApplyFormData } from './ApplyForm';

interface Props {
  formik: FormikProps<ApplyFormData>;
  questionNumber: number;
}

const AR = {
  name: 'serviceTypesAR',
  type: 'checkbox',
  options: [
    'Kennel Keeper [i]',
    'Foster Parent [ii]',
    'Dog Walker',
    'Cat Colony Care Programme (CCCP) Carer',
    'Community Dog Programme (CDP) Carer'
  ],
  required: false
};

const NAR = {
  name: 'serviceTypesNAR',
  type: 'checkbox',
  options: [
    'Event Helping',
    'Charity Sales',
    'Administrative Work',
    'Graphic Design',
    'IT-related Support',
    'Editing/Translation Work'
  ],
  required: false,
  footnote1: '[i] Kennel Keeper: 9am – 12noon kennel cleaning',
  footnote2:
    '[ii] Foster Parent: Provide a temporary home for animals. Pets will be staying at your family from few weeks to few months'
};

export default function ServiceTypes({
  formik,
  questionNumber
}: Props): ReactElement {
  return (
    <div
      style={{
        marginBottom: 30,
        width: '100%'
      }}
    >
      <div className="field">
        <div className="form-row">
          <label
            style={{
              alignSelf: 'flex-start',
              marginTop: 10
            }}
          >
            {questionNumber > 0 ? (
              <span
                style={{ marginRight: 10, color: '#555555', fontWeight: 400 }}
              >
                {questionNumber}.
              </span>
            ) : null}
            What kind of volunteer activities are you interested in?{' '}
            <span> *</span>
          </label>
        </div>
      </div>

      <h2
        style={{
          textAlign: 'left',
          marginLeft: 0,
          textDecoration: 'underline',
          marginBottom: -10,
          color: '#777777'
        }}
      >
        Animal Care Related Duties
      </h2>
      {generateField(formik, AR, 'en', 0)}
      <h2
        style={{
          textAlign: 'left',
          marginLeft: 0,
          textDecoration: 'underline',
          marginTop: 60,
          marginBottom: -10,
          color: '#777777'
        }}
      >
        General Duties
      </h2>
      {generateField(formik, NAR, 'en', 0)}
    </div>
  );
}
