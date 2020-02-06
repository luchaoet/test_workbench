// import { createService } from '@/utils/http';
import { menuConfig } from '@/config/menu';

export default {
  namespace: 'mainModel',
  state: {
		pageName: ''
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
  subscriptions: {
    setup ({dispatch, history}) {
      history.listen(( pathname ) => {
        const index = menuConfig.findIndex(item => item.path === pathname.pathname); 
        if(index >= 0) {
          dispatch({type: 'changeModelState', key: 'pageName', value: menuConfig[index].key || ''})
        }
      })
    }
  },
};