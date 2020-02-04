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
		
  },
  subscriptions: { },
};