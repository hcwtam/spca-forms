import React, { ReactElement } from 'react';

import styles from './Footer.module.css';

export default function Footer(): ReactElement {
  return (
    <footer className={styles.Footer}>
      © Wesley Tam 2021. All Rights Reserved.
    </footer>
  );
}
