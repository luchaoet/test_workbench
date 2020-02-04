import React, { useEffect } from 'react';
import { Table, MenuButton, Button } from '@alifd/next';
// const { Item } = MenuButton;
import styles from './index.module.scss';
import Tag from '@/components/Tag';
// import IconImg from '@/components/IconImg';
// import TextEdit from '@/components/TextEdit';
import Filter from '@/components/Filter';
import MainAndSubTitle from '@/components/MainAndSubTitle';
import Pagination from '@/components/Pagination';
import { connect } from 'dva';

const mapStateToProps = state => state.listModel;
const mapDispatchToProps = dispatch => {return { dispatch }};

function ListPage(props) {
	const { dispatch, logList, page } = props;
	
	function filterChange(source) {
		
		const time = source.start_end_time.length === 0 ? '' : source.start_end_time.join(',');
		const start_end_time = time.replace(/-/g, '');
		dispatch({
			type: 'listModel/changeModelState',
			key: 'filter',
			value: {
				start_end_time,
				log_status: source.log_status,
				rpp_name: source.rpp_name,
				machine_ip: source.machine_ip
			}
		})
		dispatch({type: 'listModel/fetchLogList'})
	}

	function pagerChange(value) {
		dispatch({
			type: 'listModel/changeModelState',
			key: 'page',
			value: {
				...page,
				currentPage: value
			}
		})
		dispatch({type: 'listModel/fetchLogList'})
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
      <Table dataSource={logList} hasBorder={false} fixedHeader maxBodyHeight={400}>
			<Table.Column title="N" width={50} cell={(value, index) => page.pageSize * (page.currentPage - 1) + index + 1 } />
				<Table.Column title="IP" dataIndex="machine_ip" width={200} />
				<Table.Column title="logName" dataIndex="log_name" width={200} />
				<Table.Column title="status" dataIndex="status" width={80} cell={ status => {
					return <Tag text={status == 0 ? '异常' : '正常'} background={status == 0 ? '#ff3000' : '#3080fe'} />
				}}/>
				<Table.Column title="message" dataIndex="message" width={200} />
				<Table.Column title="logTime" dataIndex="log_time" width={110} cell={ time => {
					return <MainAndSubTitle mainTitle='2019-05-22' subTitle= '16:48:07' />
				}} />
				<Table.Column title="rppName" dataIndex="rpp_name" width={200} />
				<Table.Column title="funcName" dataIndex="funcname" width={200}/>
				<Table.Column title="lineNo" dataIndex="line_no" width={200}/>
				<Table.Column title="level" dataIndex="log_level" width={200}/>
				<Table.Column title="fileName" dataIndex="filename" width={200} lock="right"/>
      </Table>

			<Pagination pager={page} onChange={ value => pagerChange(value)} />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ListPage)