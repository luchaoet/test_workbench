import React, { useState, useEffect } from 'react';
import styles from './index.module.scss';
import { Badge, Notification, Drawer, Collapse } from '@alifd/next';
import { connect } from 'dva';
import SpotStatus from '@/components/SpotStatus';
import { format } from '@/utils/tools';

const Panel = Collapse.Panel;

const mapStateToProps = state => state.mainModel;
const mapDispatchToProps = dispatch => {return { dispatch }};

function Messages(props) {
  // 消息列表
  const [list, setList] = useState([
    { content: "1您已被授权使用【2019_9_16(2)】应用，请在我的应用列表中打开使用!",createTime: 1568615326491,key: 293,status: "read",title: "1应用License授权成功" },
    { content: "2您已被授权使用【2019_9_16(2)】应用，请在我的应用列表中打开使用!",createTime: 1568615326492,key: 294,status: "unread",title: "2应用License授权成功" },
    { content: "3您已被授权使用【2019_9_16(2)】应用，请在我的应用列表中打开使用!",createTime: 1568615326493,key: 295,status: "read",title: "3应用License授权成功" },
    { content: "4您已被授权使用【2019_9_16(2)】应用，请在我的应用列表中打开使用!",createTime: 1568615326494,key: 296,status: "unread",title: "4应用License授权成功" },
    { content: "5您已被授权使用【2019_9_16(2)】应用，请在我的应用列表中打开使用!",createTime: 1568615326495,key: 297,status: "read",title: "5应用License授权成功" },
    { content: "6您已被授权使用【2019_9_16(2)】应用，请在我的应用列表中打开使用!",createTime: 1568615326496,key: 298,status: "read",title: "6应用License授权成功" },
    { content: "7您已被授权使用【2019_9_16(2)】应用，请在我的应用列表中打开使用!",createTime: 1568615326497,key: 299,status: "read",title: "7应用License授权成功" },
    { content: "1您已被授权使用【2019_9_16(2)】应用，请在我的应用列表中打开使用!",createTime: 1568615326491,key: 293,status: "read",title: "1应用License授权成功" },
    { content: "2您已被授权使用【2019_9_16(2)】应用，请在我的应用列表中打开使用!",createTime: 1568615326492,key: 294,status: "unread",title: "2应用License授权成功" },
    { content: "3您已被授权使用【2019_9_16(2)】应用，请在我的应用列表中打开使用!",createTime: 1568615326493,key: 295,status: "read",title: "3应用License授权成功" },
    { content: "4您已被授权使用【2019_9_16(2)】应用，请在我的应用列表中打开使用!",createTime: 1568615326494,key: 296,status: "unread",title: "4应用License授权成功" },
    { content: "5您已被授权使用【2019_9_16(2)】应用，请在我的应用列表中打开使用!",createTime: 1568615326495,key: 297,status: "read",title: "5应用License授权成功" },
    { content: "6您已被授权使用【2019_9_16(2)】应用，请在我的应用列表中打开使用!",createTime: 1568615326496,key: 298,status: "read",title: "6应用License授权成功" },
    { content: "7您已被授权使用【2019_9_16(2)】应用，请在我的应用列表中打开使用!",createTime: 1568615326497,key: 299,status: "read",title: "7应用License授权成功" },
  ]);
  // 消息统计数
  const [amount, setAmount] = useState({ read: 0, unread: 0 });
  // 消息抽屉
  const [visible, setVisible] = useState(false);

  // 统计已读与未读数量
  function handleList(list) {
    let [read, unread] = [0, 0];
    for(let item of list){
      if(item.status === 'read'){
        read ++
      }else{
        unread ++
      }
    }
    return {read, unread}
  }

  function viewList() {
    const {read, unread} = amount;
    if(read + unread === 0){
      Notification.open({
        title: '提示',
        content: '消息中心暂无信息',
        type: 'notice'
      });
    }else {
      setVisible(true)
    }
  }

  useEffect(() => {
    props.dispatch({
      type: 'mainModel/fetchNotification',
      callback: (res) => {
        console.log(res)
        // setList(res.data);
        // setAmount(handleList(res.data));
      }
    })
    setAmount(handleList(list));
  },[]);

  // 点击单个消息
  function panelClick(key) {
    if(key === undefined)return;
    const item = list[key];
    // 已读
    console.log(item)
  }

  return (
    <div
      className={styles.wrap}
      onClick={() => viewList()}
    >
      <Badge count={amount.unread}>
        <i className='iconfont rpa-lingdang'></i>
      </Badge>

      <Drawer
        title="消息中心"
        placement="right"
        width={340}
        visible={visible}
        onClose={()=> setVisible(false)}
      >
        <Collapse onExpand={(keys)=> panelClick(keys)} accordion={true}>
          {
            list.map((item, index)=> {
              const title = [
                <SpotStatus 
                  key={`${index}-s`} 
                  text={item.title} 
                  background={ item.status === 'unread' ? '#2077FF' : '' } 
                  color='#000' 
                />,
                <div key={`${index}-d`} className={styles.createTime}>{format(item.createTime)}</div>
              ]
              return (
                <Panel 
                  key={index} 
                  title={title}
                >{item.content}</Panel>
              )
            })
          }
        </Collapse>
      </Drawer>
    </div>
  );
}

export default connect(mapStateToProps,mapDispatchToProps)(Messages)