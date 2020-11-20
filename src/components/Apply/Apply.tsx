import React, { ReactElement, useContext } from 'react';

import style from './Apply.module.css';
import bannerEN from '../../assets/apply_banner_en.jpg';
import bannerHK from '../../assets/apply_banner_hk.jpg';
import ApplyForm from './ApplyForm/ApplyForm';
import { languageContext } from '../../store/LanguageProvider';

export default function Apply(): ReactElement {
  const { language } = useContext(languageContext);
  return (
    <div className={style.Apply}>
      <header className={style.Banner}>
        <div className={style.BannerContainer}>
          <img src={language === 'en' ? bannerEN : bannerHK} alt="banner" />
        </div>
      </header>
      <ApplyForm />
    </div>
  );
}
