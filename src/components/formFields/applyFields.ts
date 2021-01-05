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
    title: 'Title',
    name: 'title',
    type: 'radio',
    options: ['Mr.', 'Ms.', 'Mrs.', 'Dr.'],
    required: true
  },
  {
    title: 'Date of Birth',
    name: 'dateOfBirth',
    type: 'date',
    required: true
  },
  {
    title: 'Contact Number',
    name: 'contactNumber',
    type: 'text',
    placeholder: 'Local 8 digits contact no.',
    required: true
  },
  {
    title: 'Email',
    name: 'email',
    type: 'text',
    placeholder: 'Email',
    required: true
  },
  {
    title: 'Region',
    name: 'region',
    type: 'radio',
    options: ['HK Island', 'Kowloon', 'New Territories'],
    required: true
  },
  {
    title: 'Are you our member?',
    name: 'isMember',
    type: 'radio',
    options: ['Yes', 'No'],
    required: true
  },
  {
    title: 'Emergency Contact Name',
    name: 'emergencyContact',
    type: 'text',
    placeholder: 'Name of Emergency Contact Person',
    required: true
  },
  {
    title: 'Relationship',
    name: 'relationship',
    type: 'text',
    placeholder: 'Relationship with Emergency Contact Person',
    required: true
  },
  {
    title: 'Emergency Contact Number',
    name: 'emergencyNumber',
    type: 'text',
    placeholder: 'Phone Number of Emergency Contact Person',
    required: true
  }
];
export const PARTICULARS_HK: FieldType[] = [
  {
    title: '閣下是否會員?',
    name: 'isMember',
    type: 'radio',
    options: ['是', '否'],
    required: true
  },
  {
    title: '會員編號',
    name: 'membershipNo',
    type: 'text',
    placeholder: 'SPCA會員編號',
    required: false,
    note: '如果您並非會員，請將此欄保留空白。'
  },
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
    options: ['先生', '小姐', '太太', '博士'],
    required: true
  },
  {
    title: '香港身份證號碼',
    name: 'hkidNumber',
    type: 'text',
    placeholder: '香港身份證號碼',
    required: true
  },
  {
    title: '出生日期',
    name: 'dateOfBirth',
    type: 'date',
    required: true
  },
  {
    title: '聯絡電話',
    name: 'contactNumber',
    type: 'text',
    placeholder: '本地8位數字聯絡電話',
    required: true
  },
  {
    title: '電郵',
    name: 'email',
    type: 'text',
    placeholder: '電郵',
    required: true
  },
  {
    title: '區域',
    name: 'region',
    type: 'radio',
    options: ['香港島', '九龍', '新界'],
    required: true
  },
  {
    title: '緊急聯絡人姓名',
    name: 'emergencyContact',
    type: 'text',
    placeholder: '緊急聯絡人姓名',
    required: true
  },
  {
    title: '關係',
    name: 'relationship',
    type: 'text',
    placeholder: '與緊急聯絡人的關係',
    required: true
  },
  {
    title: '緊急聯絡人電話',
    name: 'emergencyNumber',
    type: 'text',
    placeholder: '緊急聯絡人電話',
    required: true
  }
];

export const APPLY_INFO_EN: FieldType[] = [
  {
    title: 'Language Preference',
    name: 'language',
    type: 'radio',
    options: ['Chinese', 'English'],
    required: true
  },
  {
    title: 'Volunteering Experience',
    name: 'experience',
    type: 'number',
    required: true,
    note: 'Please type in years of volunteering experience'
  },

  {
    title: 'On which days do you prefer to join our activities?',
    name: 'days',
    type: 'checkbox',
    options: ['Weekday', 'Weekend'],
    required: true
  }
];

export const APPLY_INFO_HK: FieldType[] = [
  {
    title: '首選語言',
    name: 'language',
    type: 'radio',
    options: ['中文', '英文'],
    required: true
  },
  {
    title: '義工年資',
    name: 'experience',
    type: 'number',
    required: true
  },
  {
    title: '是否有飼養動物?',
    name: 'hasPets',
    type: 'radio',
    options: ['是', '否'],
    required: true
  },

  {
    title: '寵物種類',
    name: 'petTypes',
    type: 'checkbox',
    options: ['狗', '貓', '其他'],
    required: false,
    note: '如有飼養動物，請選擇寵物種類。如沒有，請將此欄保留空白。'
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
    required: true
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
    required: true,
    footnote1: '[i] 動物管理員 - 9am – 12noon 清潔狗房籠舍',
    footnote2:
      '[ii] 暫養家長 - 為動物提供一個臨時的家，寵物將會暫住於閣下的家,由數星期到數月不等'
  },
  {
    question:
      '請問您是否有一些心理障礙或身體殘疾以致未能參與某些工作（例如：心臟毛病、脊骨損傷、癲癇症、敏感等等）？',
    title: '答案',
    name: 'hasIllness',
    type: 'radio',
    options: ['是', '否'],
    required: true
  },
  {
    title: '如有, 請詳細列明',
    name: 'illnesses',
    type: 'text',
    required: false
  }
];

export const INFO_COLLECTION_EN: FieldType[] = [
  {
    statement:
      'Changes have been made to the Personal Data (Privacy) Ordinance. The information provided will only be used for enrolment and further correspondence as volunteers of the Society for the Prevention of Cruelty to Animals (Hong Kong). Apart from personnel duly authorized by the SPCA (HK), no one will be given access to your personal information. The SPCA (HK) hopes that you continue to support our work and that we may continue to use your personal data provided for these purposes.',
    title: ' ',
    name: 'infoCollect1',
    type: 'radio',
    options: ['Agree', 'Disagree'],
    required: true
  },
  {
    statement:
      'You agree to receive information regarding the animal welfare works, fundraising, promotional and other activities of the Society for the Prevention of Cruelty to Animals (Hong Kong). Apart from personnel duly authorized by the SPCA (HK), no one will be given access to your personal information. The SPCA (HK) hopes that you continue to support our work and that we may continue to use your personal data provided for these purposes.',
    title: ' ',
    name: 'infoCollect2',
    type: 'radio',
    options: ['Agree', 'Disagree'],
    required: true
  }
];

export const INFO_COLLECTION_HK: FieldType[] = [
  {
    statement:
      '個人資料(私隱)條例現已生效，閣下提供的資料只供申請成為香港愛護動物協會義工日後聯絡及通訊之用，除獲本協會授權的人員外，將不會提供予其他人士。愛護動物協會希望閣下能支持我們的工作，讓我們繼續使用有關資料。',
    title: '答案',
    name: 'infoCollect1',
    type: 'radio',
    options: ['同意', '不同意'],
    required: true
  },
  {
    statement:
      '閣下希望收到有關本協會的動物福利工作、募捐、推廣及其他活動的信息及同意本協會使用你所提供的個人資料，向你發放有關的資訊。除獲本協會授權的人員外，你的個人資料將不會提供予其他人士使用。愛護動物協會希望閣下能支持我們的工作，讓我們繼續使用有關資料。',
    title: '答案',
    name: 'infoCollect2',
    type: 'radio',
    options: ['同意', '不同意'],
    required: true
  }
];

export const COMPENSATION_EN: FieldType[] = [
  {
    statement:
      'Under our Employees’ Compensation Policy, the Society for the Prevention of Cruelty to Animals (Hong Kong) [“SPCA (HK)”] volunteers are not classified as "employees" and are therefore ineligible for Employee\'s Compensation coverage for injuries that might be sustained while volunteering for the SPCA (HK). However we have arranged Personal Accident Insurance with medical benefits for any volunteer injured during their time helping the Society. If a volunteer is injured performing a SPCA (HK) volunteer task, a SPCA (HK) Injury Report must be completed with the Administration Department as soon as possible following the injury for our information and records.',
    statement2:
      'I authorize the SPCA (HK) to seek emergency medical treatment in case of accident, injury, or illness. I understand that because I may handle animals it is important to discuss the animal related vaccinations with my physician.',
    statement3:
      'If communication problems develop between SPCA (HK) employees and myself, as a volunteer I will report these to the programme leader as soon as possible. I agree to inform the Volunteer Coordinator in advance and as soon as possible if I am unable to fulfil the tasks I have been assigned. I will take ideas, constructive comments, suggestions and criticisms directly to the programme leader and agree to be supervised by the programme leader.',
    statement4:
      'I understand that the SPCA (HK) records regarding previous and new owners, members and other volunteers are to be kept confidential. The SPCA (HK) has my permission to use any and all photographs taken of me to promote Society services and programmes or to publicise any event. I understand that all prints and negatives become the sole property of the SPCA (HK) and may be used without payment or prior notification. I attest to having read, understood and agreed to the above.',
    title: ' ',
    name: 'compensation',
    type: 'radio',
    options: ['Agree', 'Disagree'],
    required: true
  }
];

export const COMPENSATION_HK: FieldType[] = [
  {
    statement:
      '於香港愛護動物協會(以下簡稱「協會」)的僱員保險政策內，義工並不界定為「僱員」。所以當您於協會義務工作時，恕不能受到"僱員補償條例"的工傷賠償保障。然而，為保障任何義工於協會義務工作期間受傷，協會已安排醫療保障的個人意外保險。假若有義工不幸於協會義務工作時受傷，必須盡快填妥協會行政部之受傷報告，讓我們得知情況及加以紀錄。',
    statement2:
      '本人授權協會在萬一發生意外、受傷或發病時為本人尋求緊急治療。因本人有可能會接觸到動物，我明白自己需要請教醫生有關防疫注射的問題。',
    statement3:
      '作為義工，假若本人與協會員工在溝通上產生問題，我會盡快告之活動負責人。假若本人因事未能履行獲分配的工作，本人同意於事前盡早通知義工聯絡人。本人願意接受活動負責人的督導，並於有意見、建設性的評語、建議及批評時，直接向活動負責人提出。',
    statement4:
      '本人明白協會內所有關於新舊動物主人，會員及其他義工的紀錄必須保持機密。本人授權協會可使用任何和所有拍攝到本人的相片於推廣協會服務、計劃或活動上。本人明白所有有關照片及底片將會成為協會的資產，可能在未有事前通知或收取任何報酬下被使用。本人已經詳細閱讀，清楚明白和同意以上條款。',
    title: '答案',
    name: 'compensation',
    type: 'radio',
    options: ['同意', '不同意'],
    required: true
  }
];

export const TETANUS_EN: FieldType[] = [
  {
    statement:
      'The SPCA (HK) feels it is important for all volunteers to be current on their tetanus vaccination if they will be handling animals as a SPCA (HK) volunteer. If a volunteer has questions about the tetanus vaccination, he or she is encouraged to consult a physician, at his or her own expense, to decide whether or not to be vaccinated against tetanus.',
    title: ' ',
    name: 'tetanus',
    type: 'radio',
    options: ['Agree', 'Disagree'],
    required: true
  }
];

export const TETANUS_HK: FieldType[] = [
  {
    statement:
      '協會認為會接觸或處理動物的義工，注射有有效之破傷風疫苗是非常重要。倘若義工對破傷風 疫苗注射有所疑問，我們極力鼓勵他/她自費請教醫生以決定是否注射破傷風疫苗。',
    title: '答案',
    name: 'tetanus',
    type: 'radio',
    options: ['同意', '不同意'],
    required: true
  }
];

export const RABIES_EN: FieldType[] = [
  {
    statement:
      'SPCA (HK) volunteers may discuss the rabies vaccination series with a physician, at their own expense, prior to making a decision on whether or not to pursue this pre-exposure rabies vaccination series. I have read, understand and agree to the above. Furthermore, I release the SPCA (HK) from any responsibility that may occur because of my not being vaccinated against tetanus and / or rabies and I understand that whatever decision I make regarding a tetanus and / or rabies any vaccination is at my own risk.',
    title: ' ',
    name: 'rabies',
    type: 'radio',
    options: ['Agree', 'Disagree'],
    required: true
  }
];
export const RABIES_HK: FieldType[] = [
  {
    statement:
      '協會為處理動物的義工準備了一系列預防狂犬病疫苗注射。協會義工可自費請教他/她的醫生以決定是否接受狂犬病疫苗注射。本人已經詳細閱讀，清楚明白和同意以上內容。本人確認協會不用承擔因本人未有注射破傷風疫苗及狂犬病疫苗而引致的各種責任。本人亦明白無論本人對注射破傷風及狂犬病疫苗之決定為何，本人均完全承擔所有之風險。',
    title: '答案',
    name: 'rabies',
    type: 'radio',
    options: ['同意', '不同意'],
    required: true
  }
];

export const DECLARATION_EN = [
  {
    statement:
      'I the undersigned, declares to be over sixteen years of age and holders of a Hong Kong Identity Card, and that the information provided on this application is true and correct. The undersigned agrees to bear legal liability for any false and incorrect information.',
    title: ' ',
    name: 'declaration',
    type: 'radio',
    options: ['Agree', 'Disagree'],
    required: true
  }
];
export const DECLARATION_HK = [
  {
    statement:
      '本人謹此聲明：本人年滿十六歲並擁有香港居民身份證，在申請書上填寫的所有資料均真確無訛。如有提供不實資料，當自負法律責任。',
    title: '答案',
    name: 'declaration',
    type: 'radio',
    options: ['同意', '不同意'],
    required: true
  }
];

export const REQUIRED_EN = 'required';
export const REQUIRED_HK = '需要填寫';
// const sample = {
//   title: '',
//   name: '',
//   type: '',
//   placeholder: '',
//   required: true,
//   note: ''
// };
