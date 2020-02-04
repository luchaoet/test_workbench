// import React, { useState } from 'react';
// import { Button } from '@alifd/next';
// import styles from './index.module.scss';
// // import Tag from '@/components/Tag';
// // import IconImg from '@/components/IconImg';
// // import TextEdit from '@/components/TextEdit';
// // import Filter from '@/components/Filter';
// // import TabButton from '@/components/TabButton';
// import { connect } from 'dva';

// const mapStateToProps = state => state.homeModel;
// const mapDispatchToProps = dispatch => {return { dispatch }};
// function IndexPage(props) {

//   const [num, setNum] = useState(1);
  
//   return (
//     <div className={styles.wrap}>
//       home {num}

//       <Button>按钮</Button>
//     </div>
//   );
// }

// export default connect(mapStateToProps, mapDispatchToProps)(IndexPage)

import React,{useEffect} from 'react';
import styles from './index.module.scss';
import { useRequest } from '@/utils/request';

import echarts from 'echarts/lib/echarts';
import  'echarts/lib/chart/line';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

export default function IndexPage(){

  const { loading, error, response, request } = useRequest({
    url: '/log/count',
    method: 'GET',
  });
  const dataSource = response ? response.data.data : null;
  // console.log(dataSource)
  const main=document.getElementById('main')
  if(main && dataSource){
    var myChart = echarts.init(main);
    myChart.setOption({
      ...dataSource,
      yAxis: {type: 'value'},
      title: {text: '日志统计图'},
      tooltip: {trigger: 'axis'},
      legend: { data:['日志总数','异常','正常'] }
    })
  }

  useEffect(() => {
    request();
  }, []);

   
  return (
    <div className={styles.wrap}>
      <div id="main" style={{ width: 1000, height: 400 }}></div>
    </div>
  )
   
}