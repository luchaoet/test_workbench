import React from 'react';
import styles from './index.module.scss';
import { Link } from 'dva/router';
import cx from 'classnames';
import { pathname } from '@/utils/tools';
import Logo from '@/components/Logo';

function Menu(props) {
  const {className, dataSource, visible, itemClick} = props;

  return (
    <div className={`${className} ${styles.wrap}`}>
      <Logo className={styles.logo} visible={visible} />
      <div className={`${styles.menu}`}>
        {
          dataSource.map((item, index)=>{
            return (
              <Link 
                to={`${item.path}`}
                className={`${styles.link} ${pathname() === item.value ? `${styles.menuActive}` : ''}`} 
                key={index}
                onClick={()=>{if(itemClick)itemClick(item)}}
              >
                <i className={cx(
                  'iconfont',
                  item.icon
                )}></i>
                {
                  visible &&
                  <span>{item.key}</span>
                }
              </Link>
            )
          })
        }
      </div>
    </div>
  );
}

export default Menu;