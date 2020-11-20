import React, { ReactElement } from 'react';

import styles from './Navbar.module.css';
import logo from '../../assets/logo.png';
// import { useHistory } from 'react-router-dom';
import { ContextProps, languageOptions } from '../../store/LanguageProvider';

const ACTIVE_STYLE = {
  color: 'white'
};

export default function Navbar({
  language,
  setLanguage
}: ContextProps): ReactElement {
  // const history = useHistory();

  const changeLanguage = (lang: languageOptions) => {
    if (lang !== language) setLanguage(lang);
  };

  return (
    <nav className={styles.Navbar}>
      <div className={styles.LogoContainer}>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.Options}>
        {/* <div className={styles.Form} onClick={() => history.push('/apply')}>
          Apply
        </div>
        <div className={styles.Form} onClick={() => history.push('/update')}>
          Update
        </div> */}
        <div
          className={styles.Language}
          style={language === 'en' ? ACTIVE_STYLE : {}}
          onClick={() => changeLanguage('en')}
        >
          EN
        </div>
        <div>|</div>
        <div
          className={styles.Language}
          style={language === 'hk' ? ACTIVE_STYLE : {}}
          onClick={() => changeLanguage('hk')}
        >
          中
        </div>
      </div>
    </nav>
  );
}
