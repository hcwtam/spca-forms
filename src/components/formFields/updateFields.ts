import { FieldType } from './Types';

export const PARTICULARS_EN: FieldType[] = [
  {
    title: 'First Name',
    name: 'firstName',
    type: 'text',
    placeholder: 'First name',
    required: true
  },
  {
    title: 'Last Name',
    name: 'lastName',
    type: 'text',
    placeholder: 'Last name',
    required: true
  },
  {
    title: 'HKID Number',
    name: 'hkidNumber',
    type: 'text',
    placeholder: 'HKID Number',
    required: true,
    note:
      '(For identity verification, please fill in the first 4 characters of your HKID number, e.g. A123)'
  }
];
export const PARTICULARS_HK: FieldType[] = [
  {
    title: '姓氏',
    name: 'firstName',
    type: 'text',
    placeholder: '姓氏',
    required: true
  },
  {
    title: '名字',
    name: 'lastName',
    type: 'text',
    placeholder: '名字',
    required: true
  },

  {
    title: '香港身份證號碼',
    name: 'hkidNumber',
    type: 'text',
    placeholder: '香港身份證號碼',
    required: true,
    note: '(為核實身份，請輸入香港身份證號碼頭4位字元, e.g. A123)'
  }
];

export const UPDATE_INFO_EN: FieldType[] = [
  {
    title: 'Contact Number',
    name: 'contactNumber',
    type: 'text',
    placeholder: 'Local 8 digits contact no.',
    required: false
  },

  {
    title: 'Email',
    name: 'email',
    type: 'text',
    placeholder: 'Email',
    required: false
  },
  {
    title: 'Region',
    name: 'region',
    type: 'radio',
    options: ['HK Island', 'Kowloon', 'New Territories'],
    required: false
  },
  {
    title: 'Language Preference',
    name: 'language',
    type: 'radio',
    options: ['Chinese', 'English'],
    required: false
  },
  {
    title: 'Preferred Days',
    name: 'days',
    type: 'checkbox',
    options: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday'
    ],
    required: false
  },
  {
    title: 'Service Types',
    name: 'serviceTypes',
    type: 'checkbox',
    options: [
      'SPCA Events',
      'Administrative Support',
      'Kennel Keeper [i]',
      'Foster Parent [ii]',
      'Artwork Design',
      'IT Related Support',
      'Summer Internship (Jul - Aug)',
      'Through-the-year Internship'
    ],
    required: false,
    footnote1: '[i] Kennel Keeper: 9am – 12noon kennel cleaning',
    footnote2:
      '[ii] Foster Parent: Provide a temporary home for animals. Pets will be staying at your family from few weeks to few months'
  }
];

export const UPDATE_INFO_HK: FieldType[] = [
  {
    title: '聯絡電話',
    name: 'contactNumber',
    type: 'text',
    placeholder: '本地8位數字聯絡電話',
    required: false
  },

  {
    title: '電郵',
    name: 'email',
    type: 'text',
    placeholder: '電郵',
    required: false
  },
  {
    title: '區域',
    name: 'region',
    type: 'radio',
    options: ['香港島', '九龍', '新界'],
    required: false
  },
  {
    title: '首選語言',
    name: 'language',
    type: 'radio',
    options: ['中文', '英文'],
    required: false
  },
  {
    title: '服務時間',
    name: 'days',
    type: 'checkbox',
    options: [
      '星期一',
      '星期二',
      '星期三',
      '星期四',
      '星期五',
      '星期六',
      '星期日'
    ],
    required: false
  },
  {
    title: '服務性質',
    name: 'serviceTypes',
    type: 'checkbox',
    options: [
      '大型活動',
      '文職工作',
      '動物管理員',
      '暫養家長',
      '繪圖設計',
      'IT技術支援',
      '暑期實習（七月至八月）[i]',
      '全年實習 [ii]'
    ],
    required: false,
    footnote1: '[i] 動物管理員 - 9am – 12noon 清潔狗房籠舍',
    footnote2:
      '[ii] 暫養家長 - 為動物提供一個臨時的家，寵物將會暫住於閣下的家,由數星期到數月不等'
  }
];

// const sample = {
//   title: '',
//   name: '',
//   type: '',
//   placeholder: '',
//   required: true,
//   note: ''
// };
