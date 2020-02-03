import React from 'react';
import styles from './index.module.scss';
import LoginHead from './components/LoginHead';

function Login() {
  return (
    <div className={styles.wrap}>
      <LoginHead />
      <div>Login</div>
    </div>
  );
}

export default Login;