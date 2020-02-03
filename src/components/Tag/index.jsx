import React from 'react';
import styles from './index.module.scss';

function Tag(props) {
  const { background='#2986ff', text='' } = props;
  return (
    <div 
      className={styles.wrap}
      style={{ background }}
    >{text}</div>
  );
}

export default Tag;