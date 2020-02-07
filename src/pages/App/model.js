import { createService } from '@/utils/http';

export default {
  namespace: 'appModel',
  state: {
		logList: [],
		page: {
			totalPage: 0,
			currentPage: 1,
			total: 0,
			pageSize: 20
		},
		filter: {
			
		}
	},
	
  reducers: {
		changeModelState(state, {key, value}) { return {...state, [key]: value} }
  },
  effects: {
		
  },
  subscriptions: {},
};