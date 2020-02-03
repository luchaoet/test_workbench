import { createService } from '@/utils/http';

export default {
  namespace: 'mainModel',
  state: {
		
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
		*fetchNotification({callback}, { call }) {
      const res = yield call(createService, {
				url: 'https://luchaoet.com/express/article/list', // ?currentPage=1&pageSize=10
				params: {
					currentPage: 1,
          pageSize: 10
				}
      });
      if(res && res.success){
        if(callback)callback(res);
      }
    },

  },
  subscriptions: { },
};