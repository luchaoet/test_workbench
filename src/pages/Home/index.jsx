import React, { useState } from 'react';
import { Button } from '@alifd/next';
import styles from './index.module.scss';
// import Tag from '@/components/Tag';
// import IconImg from '@/components/IconImg';
// import TextEdit from '@/components/TextEdit';
// import Filter from '@/components/Filter';
// import TabButton from '@/components/TabButton';
import { connect } from 'dva';

const mapStateToProps = state => state.homeModel;
const mapDispatchToProps = dispatch => {return { dispatch }};
function IndexPage(props) {

  const [num, setNum] = useState(1);
  
  return (
    <div className={styles.wrap}>
      home {num}
      
      <Button>按钮</Button>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage)