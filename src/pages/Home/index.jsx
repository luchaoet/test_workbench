import React from 'react';
import { Table, MenuButton, Button } from '@alifd/next';
const { Item } = MenuButton;
import styles from './index.module.scss';
import Tag from '@/components/Tag';
import IconImg from '@/components/IconImg';
import TextEdit from '@/components/TextEdit';
import Filter from '@/components/Filter';
import TabButton from '@/components/TabButton';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';

// const mapStateToProps = state => state.mainModel;
const mapDispatchToProps = dispatch => {return { dispatch }};
function IndexPage(props) {
  console.log(props)
  const { dispatch, history } = props;
  const dataSource = (j) => {
    const result = [];
    for (let i = 0; i < j; i++) {
        result.push({
            title: {name: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible`},
            id: `100306660940${i}`,
            time: 2000 + i,
            index: i
        });
    }
    return result;
  };

  const offsetHeight = document.body.offsetHeight;

  function textOk(value, fn) {
    console.log(value, fn)
    // fn.success()
  }

  const tabs = [
    { name: '全部', key: 'all'},
    { name: '已上架', key: 'publish'}, 
    { name: '已下架', key: 'shelve'},
    { name: '自开发', key: 'make'},
    { name: '外部购买', key: 'buy'}
  ];

  return (
    <div className={styles.wrap}>
      <Filter 
        dataSource={[
          {
            type: 'Input',
            key:'account',
            label:'账号',
            placeholder:'操作人账号'
          },
          {
            type:'RangePicker',
            key: 'time',
            label:'操作时间'
          },
          {
            type:'Select',
            key: 'taskStatus',
            placeholder: '选择任务',
            option: [
              {label: '1', value: 1},
              {label: '2', value: 2},
              {label: '3', value: 3}
            ],
            label:'任务状态'
          }
        ]}
        onChange={(source)=>console.log(source)}
      />
      <Table dataSource={dataSource(15)} hasBorder={false}>
            <Table.Column title="Id1" dataIndex="id" width={100}/>
            <Table.Column title="Index" dataIndex="index" width={100}/>
            <Table.Column title="Time" dataIndex="time" width={100}/>
            <Table.Column title="Time" dataIndex="time" width={100}/>
            <Table.Column title="Time" dataIndex="time" width={100}/>
            <Table.Column title="Time" dataIndex="time" width={100}/>
            <Table.Column title="Time" dataIndex="time" width={100}/>
            <Table.Column title="Time" width={100} lock='right' cell={()=>{
              return <MenuButton label="操作" size="medium">
                <Item>删除</Item>
              </MenuButton>
            }}/>
        </Table>
        {offsetHeight}
        <Tag text='阿里云' />
        <IconImg src='http://g-assets.daily.taobao.net//codestore-assets/v3-frontend/0.0.9/assets/images/client/icons/5-icon-00c4e2.png' />
        <TextEdit 
          value={'Lucas'}
          onOk={(value, fn)=>{textOk(value, fn)}}
        />
        <TabButton tabSource={tabs} onChange={(value)=>console.log(value)} />
        <Button onClick={()=> {
          // dispatch(routerRedux.push('/logQuery/list'))
          history.push('/logQuery/list')
        }}>js跳转</Button>
    </div>
  );
}

export default connect(mapDispatchToProps)(IndexPage)