import React, { ReactElement, useState, createContext } from 'react';

interface Props {
  children: ReactElement;
}

export type languageOptions = 'en' | 'hk';

export interface ContextProps {
  language: languageOptions;
  setLanguage: React.Dispatch<React.SetStateAction<languageOptions>>;
}

const languageContext = createContext<ContextProps>({
  language: 'en',
  setLanguage: () => null
});
const { Provider } = languageContext;

function LanguageProvider({ children }: Props): ReactElement {
  const [language, setLanguage] = useState<languageOptions>('en');

  return <Provider value={{ language, setLanguage }}>{children}</Provider>;
}

export { languageContext, LanguageProvider };
