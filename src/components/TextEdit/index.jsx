import React, { useState } from 'react';
import styles from './index.module.scss';
import { Input, Button } from '@alifd/next';

function TextEdit(props) {
  const { value, onOk, disabled=false } = props;
  const [inputValue, setInputValue] = useState(value);
  const [editStatus, setEditStatus] = useState(false);

  function inputChange(val) {
    setInputValue(val)
  }

  function cancel() {
    setInputValue(value)
    setEditStatus(false)
  }

  function ok() {
    if(onOk)onOk(
      inputValue,
      {
        success: () => { 
          setEditStatus(false);
        },
        error: () => {
          setEditStatus(true);
          setInputValue(value);
        }
      }
    )
  }

  return editStatus ? (
    <div className={styles.edit}>
      <Input value={inputValue} onChange={(val)=> inputChange(val)} />
      <p>
        <Button type="primary" size="small" onClick={()=> ok()}>确定</Button>
        <Button type="normal" size="small" onClick={()=> cancel()}>取消</Button>
      </p>
    </div>
  ) : (
    <div className={styles.unedit}>
      <span style={{marginRight: '10px'}}>{inputValue}</span>
      <Button
        type="normal"
        text={true}
        size="small"
        onClick={()=>setEditStatus(true)}
        disabled={disabled}
      >修改</Button>
    </div>
  )
}

export default TextEdit;