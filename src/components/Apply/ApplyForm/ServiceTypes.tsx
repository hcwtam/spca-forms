import { FormikProps } from 'formik';
import React, { ReactElement } from 'react';
import { generateField } from '../../formFields/formUtils';
import { ApplyFormData } from './ApplyForm';

interface Props {
  formik: FormikProps<ApplyFormData>;
  questionNumber: number;
  states: {
    ARChecked: boolean;
    setAR: () => void;
    NARChecked: boolean;
    setNAR: () => void;
  };
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
  required: false,
  footnote1: '[i] Kennel Keeper: 9am – 12noon kennel cleaning',
  footnote2:
    '[ii] Foster Parent: Provide a temporary home for animals. Pets will be staying at your family from few weeks to few months'
};

const NAR = {
  name: 'serviceTypesNAR',
  type: 'checkbox',
  options: [
    'Event Helping',
    'Charity Sales',
    'Administrative Work',
    'Graphic Design',
    'Artwork Design',
    'IT-related Support',
    'Editing/Translation Work'
  ],
  required: false
};

export default function ServiceTypes({
  formik,
  questionNumber,
  states
}: Props): ReactElement {
  const { ARChecked, NARChecked, setAR, setNAR } = states;
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
            What kind of volunteer activities are you interested in?
          </label>
        </div>
      </div>
      <div className="form-field">
        <div className="checkbox">
          <label>
            <input type="checkbox" onClick={setAR} /> Animal-related duties (AR)
          </label>
        </div>
      </div>
      {ARChecked && generateField(formik, AR, 'en', 0)}
      <div className="checkbox">
        <label>
          <input type="checkbox" onClick={setNAR} /> Non-animal related duties
          (NAR)
        </label>
      </div>
      {NARChecked && generateField(formik, NAR, 'en', 0)}
    </div>
  );
}
