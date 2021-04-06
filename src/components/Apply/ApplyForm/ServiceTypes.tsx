import { FormikProps } from 'formik';
import React, { ReactElement } from 'react';
import { generateField } from '../../formFields/formUtils';
import { ApplyFormData } from './ApplyForm';

interface Props {
  formik: FormikProps<ApplyFormData>;
  questionNumber: number;
  language: 'en' | 'hk';
}

const AR_EN = {
  name: 'serviceTypesAR',
  type: 'checkbox',
  options: [
    'Kennel Keeper (9am – 1pm kennel cleaning at Wanchai Headquarters)',
    'Foster Parent (Provide a temporary home for animals. Pets will be staying at your family from few weeks to few months)'
    // 'Cat Colony Care Programme (CCCP) Carer',
    // 'Community Dog Programme (CDP) Carer'
  ],
  required: false
};
const AR_HK = {
  name: 'serviceTypesAR',
  type: 'checkbox',
  options: [
    '動物管理員 (9am – 12nn 清潔狗房籠舍)',
    '暫養家長 (為動物提供一個臨時的家，寵物將會暫住於閣下的家，由數星期到數月不等）'
    // 'Cat Colony Care Programme (CCCP) Carer',
    // 'Community Dog Programme (CDP) Carer'
  ],
  required: false
};

const NAR_EN = {
  name: 'serviceTypesNAR',
  type: 'checkbox',
  options: [
    'Event Helping/ Charity Sales (Indoors)',
    'Event Helping/ Charity Sales (Outdoors)',
    'Administrative Support',
    'Graphic Design',
    'IT-related Support',
    'Writing/Translation Support'
  ],
  required: false
};
const NAR_HK = {
  name: 'serviceTypesNAR',
  type: 'checkbox',
  options: [
    '大型活動 / 慈善義賣 (室內)',
    '大型活動 / 慈善義賣 (戶外)',
    '文職工作',
    '美術設計',
    'IT技術支援',
    '編輯/翻譯工作'
  ],
  required: false
};

export default function ServiceTypes({
  formik,
  questionNumber,
  language
}: Props): ReactElement {
  const AR = language === 'en' ? AR_EN : AR_HK;
  const NAR = language === 'en' ? NAR_EN : NAR_HK;
  return (
    <div
      style={{
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
            {language === 'en'
              ? 'What kind of volunteer activities are you interested in? '
              : '您對那些義務工作範疇感興趣?'}
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
        {language === 'en' ? 'Animal Care Related Duties' : '與動物有關工作'}
      </h2>
      {generateField(formik, AR, language, 0)}
      <h2
        style={{
          textAlign: 'left',
          marginLeft: 0,
          textDecoration: 'underline',
          marginTop: 30,
          marginBottom: -10,
          color: '#777777'
        }}
      >
        {language === 'en' ? 'General Duties' : '一般工作'}
      </h2>
      {generateField(formik, NAR, language, 0)}
    </div>
  );
}
