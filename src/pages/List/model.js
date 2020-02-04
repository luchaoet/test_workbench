import { createService } from '@/utils/http';

export default {
  namespace: 'listModel',
  state: {
		logList: [],
		page: {
			totalPage: 0,
			currentPage: 1,
			total: 0,
			pageSize: 20
		},
		filter: {
			start_end_time: '',
			log_status: '',
			rpp_name: '',
			machine_ip: ''
		}
	},
	
  reducers: {
		changeModelState(state, {key, value}) { return {...state, [key]: value} }
  },
  effects: {
		*fetchLogList({}, { call, put, select }) {
			const { page, filter } = yield select( _ => _.listModel);
      const res = yield call(createService, {
				url: '/log/sqlite',
				params: {
					currentPage: page.currentPage,
					pageSize: page.pageSize,
					start_end_time: filter.start_end_time,
					log_status: filter.log_status,
					rpp_name: filter.rpp_name,
					machine_ip: filter.machine_ip
				}
			});
      if(res && res.success){
				yield put({
					type: 'changeModelState',
					key: 'logList',
					value: res.data || []
				})
				yield put({
					type: 'changeModelState',
					key: 'page',
					value: res.page
				})
      }
    },

  },
  subscriptions: { },
};