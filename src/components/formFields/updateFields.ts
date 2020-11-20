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

export const PARTICULARS: UpdateField[] = [
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

export const UPDATE_INFO: UpdateField[] = [
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

// const sample = {
//   title: '',
//   name: '',
//   type: '',
//   placeholder: '',
//   required: true,
//   note: ''
// };
