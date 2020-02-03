import React, { useState } from 'react';
import styles from './index.module.scss';

function TabButton(props) {
  const { style, tabSource, onChange, defaultValue } = props;
  // 默认值首选defaultValue 否则取第一个
  const defaultVal = defaultValue ? defaultValue : tabSource[0].key;

  const [value, setValue] = useState(defaultVal);

  function handleClick(key){
    if(key === value)return;
    setValue(key);
    if(onChange)onChange(key)
  }

  return (
    <div
      className={styles.wrap}
      style={style}
    >
      {
        tabSource.map((item, index) => {
          return (
            <p 
              key={index}
              className={`${value === item.key ? styles.tabActive : ''}`}
              onClick={()=> handleClick(item.key)}
            >{item.name}</p>
          )
        })
      }
    </div>
  );
}

export default TabButton;