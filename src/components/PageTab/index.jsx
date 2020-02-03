import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import cx from 'classnames';
import { Link } from 'dva/router';
// import { asideMenuConfig } from '@/config/menu';

function PageTab(props) {

  const tab = [
    {code: 'a', name: 'a'},
    {code: 'b', name: 'b'}
  ]

  const val = 'a'

  useEffect(() => {
    // console.log(1)
  });

  if(!tab)return null;
  
  return (
    <div className={styles.wrap}>
      {
        tab.map((item,index)=>{
          return(
            <Link 
              className={`${val === item.code ? styles.tabActive : ''}`}
              key={index}
              to={`/${item.code}`}
              onClick={()=>{}}
            >{item.name}</Link>
          )
        })
      }
    </div>
  );
}

export default PageTab;