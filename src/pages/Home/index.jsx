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
  // const dataSource = response ? response.data.data : null;
  // console.log(dataSource)
  const main=document.getElementById('main')

  const dataSource = {
    xAxis: {
    data: [
    "20190522",
    "20190606",
    "20190610",
    "20190611",
    "20190612",
    "20190613",
    "20190614"
    ],
    type: "category",
    boundaryGap: "false"
    },
    series: [
    {
    data: [
    910,
    67,
    47,
    17,
    1699,
    156,
    148
    ],
    type: "line",
    name: "总量"
    },
    {
    data: [
    854,
    67,
    31,
    17,
    1638,
    147,
    133
    ],
    type: "line",
    name: "成功"
    },
    {
    data: [
    56,
    0,
    16,
    0,
    61,
    9,
    15
    ],
    type: "line",
    name: "失败"
    }
    ]
    }
  if(main&&dataSource){
     var myChart = echarts.init(main);
     myChart.setOption({...dataSource,yAxis: {type: 'value'},title: {text: '日志统计图'},})
  }
  console.log(main)

  useEffect(() => {
    // request();

  }, []);

   
  return (
    <div className={styles.wrap}>
        <div id="main" style={{ width: 1000, height: 400 }}></div>
    </div>
  )
   
}