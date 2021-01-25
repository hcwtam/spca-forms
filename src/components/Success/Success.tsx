import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';

import styles from './Success.module.css';

export default function Success(): ReactElement {
  const history = useHistory();

  return (
    <div className={styles.Success}>
      <h1>多謝您的申請</h1>
      <h1>Thank you for your application</h1>
      <br />
      <br />
      <p>閣下將會收到自動回覆確認電郵,列出報名詳情及網上義工迎新會的邀請。 </p>
      <p>閣下必須完成迎新問卷,才能成為合資格義工。 </p>
      <p>謝謝! </p>
      <br />
      <p>
        You should receive an automatic confirmation email showing your
        application and the invitation to complete the Online Volunteer
        Orientation which is required for all volunteers shortly.
      </p>
      <p>Thank you!</p>
      <div className={styles.flex}>
        <button onClick={() => history.push('/apply')}>
          Return to Homepage
        </button>
        <button onClick={() => history.push('/apply')}>返回主頁</button>
      </div>
    </div>
  );
}
