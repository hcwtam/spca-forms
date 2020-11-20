import React, { ReactElement, useContext } from 'react';

import style from './Update.module.css';
import bannerEN from '../../assets/update_banner_en.jpg';
import bannerHK from '../../assets/update_banner_hk.jpg';
import UpdateForm from './UpdateForm/UpdateForm';
import { languageContext } from '../../store/LanguageProvider';

export default function Update(): ReactElement {
  const { language } = useContext(languageContext);
  return (
    <div className={style.Update}>
      <header className={style.Banner}>
        <div className={style.BannerContainer}>
          <img src={language === 'en' ? bannerEN : bannerHK} alt="banner" />
        </div>
      </header>
      <UpdateForm />
    </div>
  );
}
