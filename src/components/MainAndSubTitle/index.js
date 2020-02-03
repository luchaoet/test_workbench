import React from 'react';
import styles from './index.module.scss';

function MainAndSubTitle(props) {
  const { style, className, mainTitle, subTitle } = props;
  return (
    <div
      className={`${styles.wrap} ${className}`}
      style={style}
    >
      <span>{mainTitle}</span>
      <i>{subTitle}</i>
    </div>
  );
}

export default MainAndSubTitle;