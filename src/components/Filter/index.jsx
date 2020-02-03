import React, { useState } from 'react';
import styles from './index.module.scss';
import { Input, Select } from '@alifd/next';
import CustomRangePicker from './components/CustomRangePicker';
import { delay } from '@/utils/tools';
const Option = Select.Option;

function Filter(props) {
	const { dataSource, onChange, style } = props;
	// 处理 dataSource， 添加 value = ''
	let tem = [];
	for(let item of dataSource){
		const obj = {
			...item,
			value: item.type === 'RangePicker' ? [] : ''
		}
		tem.push(obj)
	}
	const [source, setSource] = useState(tem);

	function change(index, value) {
		// setState
		const tem = [...source];
		tem[index].value = value;
		setSource(tem);
		// 处理回调参数格式
		if(onChange){
			let obj = {};
			for(let item of tem){
				obj[item.key] = item.value
			}
			// input 防抖
			if(tem[index].type === 'Input'){
				return delay(() => onChange(obj))
			}
			onChange(obj)
		};
	}

  return (
	<div className={styles.wrap} style={style}>
		{
			source.map((item, index)=> {
				switch(item.type){
					case 'Input': return (
						<div key={index} className={styles.inputItem}>
							<em>{item.label}</em>
							<Input 
								hasClear 
								maxLength={item.maxLength || 32}
								placeholder={item.placeholder} 
								value={item.value} 
								onChange={ value => change(index, value)} 
							/>
						</div>
					)
					case 'RangePicker': return (
						<div key={index} className={styles.inputItem}>
							<em>{item.label}</em>
							<CustomRangePicker
								value={item.value}
								onChange={ value => change(index, value)}
							/>
						</div>
					)
					case 'Select': return (
						<div key={index} className={styles.inputItem}>
							<em>{item.label}</em>
							<Select 
								placeholder={item.placeholder} 
								value={item.value} 
								onChange={ value => change(index, value)}
							>
							{
								item.option && item.option.map((opt, index)=>{
								return (
									<Option 
										value={opt.value} 
										key={index} 
									>{opt.label}</Option>
								)
								})
							}
							</Select>
						</div>
					)
				}
			})
		}
	</div>
  );
}

export default Filter;