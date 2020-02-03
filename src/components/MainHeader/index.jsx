
import React from 'react';
import styles from './index.module.scss';
// import Messages from '@/components/Messages';
// import Avatar from '@/components/Avatar';

function MainHeader(props) {
  const { className, menuVisible, iconClick } = props;
  return (
    <div className={`${styles.wrap} ${className}`}>
      <i 
        className={`iconfont ${  menuVisible ? 'rpa-caidanshouqi': 'rpa-caidanzhankai'}`}
        onClick={()=>{ if(iconClick)iconClick() }}
      ></i>
      <div className={styles.headerRight}>
        {/* <p className={styles.title}>阿里云RPA测试企业</p>
        <Messages />
        <Avatar signOutClick={()=>{console.log('signOutClick')}} /> */}
      </div>
    </div>
  )
}

export default MainHeader;