import React, {useState, useEffect} from 'react';
import styles from './index.module.scss';
import { DatePicker, Button } from '@alifd/next';
import moment from 'moment';
import { momentToString } from '@/utils/tools';
const { RangePicker } = DatePicker;
const currentDate = moment();
import { connect } from 'dva';

const mapStateToProps = state => state.managementModel;
const mapDispatchToProps = dispatch => {return { dispatch }};

function ManagementPage(props) {
  const { dispatch }= props;
  const [disabled, setDisabled] = useState(true);
  const [timeRange, setTimeRange] = useState('');

  function rangePickerChange(value) {
    setDisabled(false);
    const time = `${momentToString(value[0])},${momentToString(value[1])}`.replace(/-/g, '');
    setTimeRange(time)
  }

  function clear() {
    dispatch({
      type: 'managementModel/fetchDeleteLog',
      payload: {
        start_end_time: timeRange
      },
      callback: () => {
        Message.success('操作成功');
        setDisabled(true);
        setTimeRange('')
      }
    })
  }

  useEffect(() => {
    if(timeRange){
      setDisabled(false)
    }else{
      setDisabled(true)
    }
  }, [timeRange]);

  return (
    <div className={styles.wrap}>
      <RangePicker 
        format="YYYY-M-D" 
        hasClear={false}
        disabledDate={date => date.valueOf() >= currentDate.valueOf()}
        onOk={value => rangePickerChange(value)} 
      />
      <Button 
        style={{marginLeft: '20px'}} 
        type="primary" 
        disabled={disabled} 
        warning
        onClick={() => clear()}
      >清除日志</Button>
    </div>
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(ManagementPage)