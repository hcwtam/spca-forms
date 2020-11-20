export type UpdateField = {
  title?: string;
  name: string;
  type?: string;
  placeholder?: string;
  options?: string[];
  required: boolean;
  note?: string;
  as?: string;
};

export const PARTICULARS_EN: UpdateField[] = [
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
    title: 'Title',
    name: 'title',
    type: 'radio',
    options: ['Mr.', 'Ms.', 'Mrs.'],
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
  },
  {
    title: 'Contact Number',
    name: 'contactNumber',
    type: 'text',
    placeholder: 'Local 8 digits contact no.',
    required: true
  }
];
export const PARTICULARS_HK: UpdateField[] = [
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
    title: '稱謂',
    name: 'title',
    type: 'radio',
    options: ['先生', '小姐', '太太'],
    required: true
  },
  {
    title: '香港身份證號碼',
    name: 'hkidNumber',
    type: 'text',
    placeholder: '香港身份證號碼',
    required: true,
    note: '(為核實身份，請輸入香港身份證號碼頭4位字元, e.g. A123)'
  },
  {
    title: '聯絡電話',
    name: 'contactNumber',
    type: 'text',
    placeholder: '本地8位數字聯絡電話',
    required: true
  }
];

export const UPDATE_INFO_EN: UpdateField[] = [
  {
    title: 'Email',
    name: 'email',
    type: 'text',
    placeholder: 'Email',
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
      'Kennel Keeper',
      'Foster Parent'
    ],
    required: false
  }
];

export const UPDATE_INFO_HK: UpdateField[] = [
  {
    title: '電郵',
    name: 'email',
    type: 'text',
    placeholder: '電郵',
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
    options: ['大型活動', '文職工作', '動物管理員', '暫養家長'],
    required: false
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
