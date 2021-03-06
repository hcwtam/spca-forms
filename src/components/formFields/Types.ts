export type FieldType = {
  question?: string;
  statement?: string;
  statement2?: string;
  statement3?: string;
  statement4?: string;
  title?: string;
  name: string;
  type?: 'radio' | 'checkbox' | 'text' | 'number' | 'date' | string;
  placeholder?: string;
  options?: string[];
  required: boolean;
  note?: string;
  as?: string;
  footnote1?: string;
  footnote2?: string;
  extendedInput?: boolean;
};
