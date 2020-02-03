import { Notification } from '@alifd/next';
export default {
	success: () => {
		Notification.open({
			title: '提示',
			content: '暂无消息',
			duration: 1500,
			type: 'notice',
			style: { width: 200, marginLeft: 200 }
		});
	}
}