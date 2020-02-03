import { createService } from '@/utils/http';

export default {
  namespace: 'homeModel',
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
		
  },
  subscriptions: { },
};