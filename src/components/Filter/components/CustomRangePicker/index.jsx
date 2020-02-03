import React, { useState, useEffect } from 'react';
import styles from './index.module.scss';
import { DatePicker } from '@alifd/next';
import { momentToString } from '@/utils/tools';
// 时间选择框设置语言
import moment from 'moment';
moment.locale('zh-cn');

function CustomRangePicker(props) {
	const { onChange, value=[] } = props;
	const [startValue, setStartValue] = useState(value[0] || '');
	const [endValue, setEndValue] = useState(value[1] || '');
	const [endOpen, setEndOpen] = useState(false);

	function disabledStartDate(startVal) {
		if (!startVal || !endValue) {
			return false;
		}
		return startVal.valueOf() > endValue.valueOf();
	}

	function disabledEndDate(endVal) {
		if (!endVal || !startValue) {
			return false;
		}
		return endVal.valueOf() <= startValue.valueOf();
	}

	function handleStartOpenChange(open) {
		if (!open)setEndOpen(true)
	}

	function handleEndOpenChange(open) {
		setEndOpen(open)
	}

	useEffect(() => {
		if(
			(startValue !== '' || endValue !== '') && 
			onChange
		){
			onChange([momentToString(startValue), momentToString(endValue)])
		}
  }, [startValue, endValue]);

  return (
    <div>
      <DatePicker
				style={{width: '120px'}}
				followTrigger={true}
				disabledDate={startValue => disabledStartDate(startValue)}
				onChange={value => setStartValue(value)}
				onVisibleChange={value => handleStartOpenChange(value)}
			/>
			<span className={styles.customSep}>-</span>
			<DatePicker
				style={{width: '120px'}}
				followTrigger={true}
				disabledDate={endValue => disabledEndDate(endValue)}
				onChange={value => setEndValue(value)}
				visible={endOpen}
				onVisibleChange={value => handleEndOpenChange(value)}
			/>
    </div>
  );
}

export default CustomRangePicker;