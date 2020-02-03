/**
 * 时间格式转换
 * 时间戳转 YYYY-MM-DD HH:mm:ss
 */
import moment from 'moment';
export default function momentToString(timestamp, type= 'YYYY-MM-DD') {
  
  if(!timestamp)return null;

  if(type= 'YYYY-MM-DD'){
    return moment(timestamp).format(type);
  }else{
    return moment(timestamp).format('YYYY-MM-DD HH:mm:ss');
  }
}