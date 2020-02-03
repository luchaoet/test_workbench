import React, { useState, useEffect } from 'react';
import styles from './index.module.scss';
import Filter from '@/components/Filter';
import MainAndSubTitle from '@/components/MainAndSubTitle';
import { Table } from '@alifd/next';
// import { connect } from 'dva';


// const mapStateToProps = state => state.mainModel;
// const mapDispatchToProps = dispatch => {return { dispatch }};

const logSource = [
	{
		id: 58563,
		opIntro: "登录客户端",
		opModule: "客户端-登录退出",
		opTime: "2019-12-05 11:37:29",
		opType: "登录",
		opUserAccount: "Administrator",
		opUserName: "我",
	},
	{
		id: 58555,
		opIntro: "编辑开发应用:testpublic3",
		opModule: "客户端-我的应用",
		opTime: "2019-12-05 11:24:32",
		opType: "编辑应用",
		opUserAccount: "pzw",
		opUserName: "pzw"
	}
]

function LogQuery() {

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
          }
        ]}
        onChange={(source)=>console.log(source)}
      />

			<Table dataSource={logSource} hasBorder={false}>
				<Table.Column title="N"   width={100}/>
				<Table.Column title="操作模块" dataIndex="opModule"  width={100}/>
				<Table.Column title="操作人昵称" dataIndex="opUserName"  width={100}/>
				<Table.Column title="操作人账号" dataIndex="opUserAccount"  width={100} />
				<Table.Column title="操作时间" dataIndex="opTime"  width={300} cell={(value)=> {
					const time = value.split(' ');
					return <MainAndSubTitle mainTitle={time[0]} subTitle={time[1]} />
				}} />
				<Table.Column title="操作内容"  width={300} dataIndex="opIntro" />
				<Table.Column title="操作"  width={100} lock='right' />
			</Table>
    </div>
  );
};

export default LogQuery;