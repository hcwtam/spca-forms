import React, { ReactElement } from 'react';

import style from './Update.module.css';
import banner from '../../assets/update_banner_en.jpg';
import UpdateForm from './UpdateForm/UpdateForm';

export default function Update(): ReactElement {
  return (
    <div className={style.Update}>
      <header className={style.Banner}>
        <div className={style.BannerContainer}>
          <img src={banner} alt="banner" />
        </div>
      </header>
      <UpdateForm />
    </div>
  );
}
