import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';

import styles from './Success.module.css';

export default function Success(): ReactElement {
  const history = useHistory();

  return (
    <div className={styles.Success}>
      <h1>Sent successfully. Thank you for your time!</h1>
      <button onClick={() => history.push('/update')}>
        Return to Homepage
      </button>
    </div>
  );
}
