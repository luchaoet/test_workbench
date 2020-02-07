import React from 'react';
import styles from './index.module.scss';
import Filter from '@/components/Filter';
import { Table } from '@alifd/next';
import Pagination from '@/components/Pagination';

import { connect } from 'dva';

const mapStateToProps = state => state.appModel;
const mapDispatchToProps = dispatch => {return { dispatch }};

function AppPage(props) {
  const { page } = props;
  return (
    <div className={styles.wrap}>
      <Filter 
        dataSource={[
					{
						type:'Input',
						key: 'name',
						label: '应用名称'
					},
					{
						type:'Select',
						key: 'robot',
						placeholder: '选择机器人',
						option: [
							{label: '所有', value: ''},
							{label: '正常', value: 1},
							{label: '异常', value: 0}
						],
						label:'机器人'
					}
        ]}
        onChange={ source => console.log(source)}
      />

      <Table dataSource={[]} hasBorder={false} fixedHeader maxBodyHeight={400}>
        <Table.Column title="N" width={50} cell={(value, index) => page.pageSize * (page.currentPage - 1) + index + 1 } />
        <Table.Column title="应用名称" dataIndex="machine_ip" width={200} />
        <Table.Column title="修改时间" dataIndex="log_name" width={200} />
        <Table.Column title="发布版本" dataIndex="status" width={80} cell={ status => {
          return <Tag text={status == 0 ? '异常' : '正常'} background={status == 0 ? '#ff3000' : '#3080fe'} />
        }}/>
        <Table.Column title="修改者" dataIndex="message" width={200} />
        <Table.Column title="操作" dataIndex="log_time" width={110} cell={ time => {
          return <MainAndSubTitle mainTitle='2019-05-22' subTitle= '16:48:07' />
        }} />
      </Table>

			<Pagination pager={page} onChange={ value => pagerChange(value)} />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(AppPage)