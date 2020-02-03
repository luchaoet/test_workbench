import { createService } from '@/utils/http';

export default {
  namespace: 'listModel',
  state: {
		logList: [
			{
				line_no: 112,
				machine_ip: "172.16.46.51",
				status: 1,
				gmt_modified: "2019-05-22 16:48:38",
				message: "------结束执行---------",
				gmt_created: "2019-05-22 16:48:38",
				rpp_name: "win32_appear_test.rpp",
				id: 554,
				filename: "_rpa_main.py",
				log_time: "2019-05-22 16:48:07,856",
				log_name: "20190522",
				machine_name: "iZs1k7zciv8nq7Z",
				log_level: "INFO",
				funcname: "test_win_appear_winform_timeout"
			}
		],
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
		changeModelState(state, { key, value }) {
      return {
        ...state,
      [key]: value
      };
    }
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
					logList: res.data
				})
				yield put({
					type: 'changeModelState',
					page: res.page
				})
      }
    },

  },
  subscriptions: { },
};