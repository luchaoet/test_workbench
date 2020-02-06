import { createService } from '@/utils/http';

export default {
  namespace: 'managementModel',
  state: {
		
	},
	
  reducers: {
		changeModelState(state, {key, value}) { return {...state, [key]: value} }
  },
  effects: {
		*fetchDeleteLog({payload, callback}, { call }) {
      const res = yield call(createService, {
				url: '/log/delete',
				method: 'post',
				params: {
					start_end_time: payload.start_end_time
				}
			});
			if(res && res.success && callback)callback();
		}
  },
  subscriptions: { },
};