import React, { ReactElement } from 'react';

import style from './Apply.module.css';
import banner from '../../assets/apply_banner_en.jpg';
import ApplyForm from './ApplyForm/ApplyForm';

export default function Apply(): ReactElement {
  return (
    <div className={style.Apply}>
      <header className={style.Banner}>
        <div className={style.BannerContainer}>
          <img src={banner} alt="banner" />
        </div>
      </header>
      <ApplyForm />
    </div>
  );
}
