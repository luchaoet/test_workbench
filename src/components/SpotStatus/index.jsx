import React from 'react';
import styles from './index.module.scss';

function SpotStatus(props) {
  const { background, color, text } = props;
  const iStyle = { background: background ? background : '#b1b1b1' };
  const spanStyle = { color: color ? color : '#333' };

  return (
    <div className={styles.wrap}>
        <i style={iStyle}></i>
        <span style={spanStyle}>{text}</span>
    </div>
  );
}

export default SpotStatus;