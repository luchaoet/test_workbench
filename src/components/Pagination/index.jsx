import React from 'react';
import styles from './index.module.scss';
import { Pagination } from '@alifd/next';

function Pagin(props) {
  const { pager, onChange } = props;
  return (
    <div className={styles.wrap}>
      <span>共 {pager.total} 条</span>
      <Pagination 
        shape="arrow-only" 
        current={pager.currentPage} 
        total={pager.totalPage} 
        onChange={value => {if(onChange)onChange(value)}}
      />
    </div>
  );
}

export default Pagin;