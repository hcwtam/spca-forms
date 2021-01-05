import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';

import styles from './Success.module.css';

export default function Success(): ReactElement {
  const history = useHistory();

  return (
    <div className={styles.Success}>
      <h1>Sent successfully. Thank you for your time!</h1>
      <h1>提交成功，感謝您的支持！</h1>
      <button onClick={() => history.push('/apply')}>Return to Homepage</button>
      <button onClick={() => history.push('/apply')}>返回主頁</button>
    </div>
  );
}
