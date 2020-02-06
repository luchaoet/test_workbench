import React, { useState, useEffect } from 'react';
import styles from './index.module.scss';
import Menu from '@/components/Menu';
import MainHeader from '@/components/MainHeader';
// import PageTab from '@/components/PageTab';
import { enquire } from 'enquire-js';
import { Drawer } from '@alifd/next';
import { connect } from 'dva';
import { defaultIcon } from '@/utils/tools';
import { menuConfig } from '@/config/menu';


const mapStateToProps = state => state.mainModel;
const mapDispatchToProps = dispatch => {return { dispatch }};

function MainLayout(props) {
  const { pageName } = props;

  const [isScreen, setIsScreen] = useState();
  const [menuVisible, setMenuVisible] = useState(true);

  /**
   * 注册监听屏幕的变化，可根据不同分辨率做对应的处理
   */
  function enquireScreenRegister() {
    const isMobile = 'screen and (max-width: 720px)';
    const isTablet = 'screen and (min-width: 721px) and (max-width: 1199px)';
    const isDesktop = 'screen and (min-width: 1200px)';

    enquire.register(isMobile, enquireScreenHandle('isMobile'));
    enquire.register(isTablet, enquireScreenHandle('isTablet'));
    enquire.register(isDesktop, enquireScreenHandle('isDesktop'));
  }

  function enquireScreenHandle(type) {
    const handler = {
      match: () => {
        setIsScreen(type);
      },
    };
    return handler;
  }


  useEffect(() => {
    enquireScreenRegister();
  }, []);

  return (
    <div className={styles.wrap}>
      {
        /**
         * 移动端使用抽屉式菜单
         * pc端使用可收缩时菜单
         */
        isScreen === 'isMobile'
        ? (
          <Drawer
            title=""
            className='menu-drawer'
            width={180}
            closeable="mask"
            placement="left"
            visible={menuVisible}
            onClose={()=>setMenuVisible(false)}
          >
            <Menu 
              visible={true}
              dataSource={menuConfig}
              itemClick={()=>setMenuVisible(false)}
            />
          </Drawer>
        )
        : (
          <Menu 
            className={styles.left} 
            visible={menuVisible}
            dataSource={menuConfig}
        />
        )
      }
        
      <div className={styles.right}>
        <MainHeader 
          className={styles.rightHead} 
          menuVisible={menuVisible}
          iconClick={()=>setMenuVisible(!menuVisible)} 
        />
        <div className={styles.rightContent}>
          <div className={styles.pageName}>{pageName}</div>
          {/* <PageTab /> */}
          {props.children}
          <div className={styles.footer}>
            <img src={defaultIcon} />
            <span>© 2020  阿里云RPA</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps,mapDispatchToProps)(MainLayout)