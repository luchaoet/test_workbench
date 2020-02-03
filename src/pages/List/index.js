import React, { useEffect } from 'react';
import { Table, MenuButton, Button } from '@alifd/next';
// const { Item } = MenuButton;
import styles from './index.module.scss';
import Tag from '@/components/Tag';
// import IconImg from '@/components/IconImg';
// import TextEdit from '@/components/TextEdit';
import Filter from '@/components/Filter';
import MainAndSubTitle from '@/components/MainAndSubTitle';
import { connect } from 'dva';

const mapStateToProps = state => state.listModel;
const mapDispatchToProps = dispatch => {return { dispatch }};

function ListPage(props) {
  // console.log(props)
	const { dispatch, logList } = props;
	
	function filterChange(source) {
		console.log(source)
	}
	
	useEffect(() => {
		dispatch({type: 'listModel/fetchLogList'})
	}, []);

  return (
    <div className={styles.wrap}>
      <Filter 
        dataSource={[
					{
						type:'RangePicker',
						key: 'start_end_time',
						label: '日期'
					},
					{
						type:'Select',
						key: 'log_status',
						placeholder: '状态',
						option: [
							{label: '所有', value: ''},
							{label: '正常', value: 1},
							{label: '异常', value: 0}
						],
						label:'状态'
					},
          {
            type: 'Input',
            key:'rpp_name',
            label:'应用名称',
            placeholder:'应用名称'
					},
					{
            type: 'Input',
            key:'machine_ip',
            label:'IP',
            placeholder:'机器IP'
          },
        ]}
        onChange={ source => filterChange(source)}
      />
      <Table dataSource={logList} hasBorder={false}>
				<Table.Column title="IP" dataIndex="machine_ip" />
				<Table.Column title="logName" dataIndex="log_name" />
				<Table.Column title="status" dataIndex="status" cell={ status => {
					return <Tag text={status == 0 ? '异常' : '正常'} />
				}}/>
				<Table.Column title="message" dataIndex="message" />
				<Table.Column title="logTime" dataIndex="log_time" cell={ time => {
					return <MainAndSubTitle mainTitle='2019-05-22' subTitle= '16:48:07' />
				}} />
				<Table.Column title="rppName" dataIndex="rpp_name" />
				<Table.Column title="funcName" dataIndex="funcname" />
				<Table.Column title="lineNo" dataIndex="line_no" />
				<Table.Column title="level" dataIndex="log_level" />
				<Table.Column title="fileName" dataIndex="filename" />
      </Table>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ListPage)