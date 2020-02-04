import React,{useEffect} from 'react';
import styles from './index.module.scss';
import { useRequest } from '@/utils/request';

import echarts from 'echarts/lib/echarts';
import  'echarts/lib/chart/line';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

export default function Chart(){

  const { loading, error, response, request } = useRequest({
    url: '/log/count',
    method: 'GET',
  });
  const dataSource = response ? response.data.data : null;
  console.log(dataSource)
  const main=document.getElementById('main')
  if(main&&dataSource){
     var myChart = echarts.init(main);
     myChart.setOption({...dataSource,yAxis: {type: 'value'},title: {text: '日志统计图'},})
  }
  console.log(main)

  useEffect(() => {
    request();

  }, []);

   
  return (
    <div className={styles.wrap}>
        <div id="main" style={{ width: 1000, height: 400 }}></div>
    </div>
  )
   
}