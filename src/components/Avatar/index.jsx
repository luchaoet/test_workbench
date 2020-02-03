import React from 'react';
import { Balloon } from '@alifd/next';
import styles from './index.module.scss';

function Avatar(props) {
	const { signOutClick } = props;
  const trigger = ( <div className={styles.wrap}>超级</div> );
	// 退出
	function signOut() { if(signOutClick)signOutClick() }

  return (
		<Balloon 
			trigger={trigger} 
			closable={false} 
			triggerType='click'
			align='bl'
		>
      <div className={styles.name}>
				<p>pz</p>
				<div>
					<i>pzwpzwpzwpzwpzwpzwpzw</i>
					<span>pzpzwpzwpzwpzwpzww</span>
				</div>
			</div>
			<div className={styles.button}>
				<p onClick={() => signOut()}>
					<i className='iconfont rpa-tuichu1'></i>
					<span>退出控制台</span>
				</p>
			</div>
    </Balloon>
  );
}

export default Avatar;