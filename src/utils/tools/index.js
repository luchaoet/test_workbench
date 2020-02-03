import randomString from './randomString';
import pathname from './pathname';
import Notification from './notification';
import format from './format';
import defaultIcon from './defaultIcon';
import momentToString from './momentToString';
import delay from './delay';

export {
    // 随机字符串
    randomString, 
    // 获取path
    pathname, 
    // 信息提示
    Notification, 
    // 时间戳转年月日 时分秒
    format, 
    // 默认图片 图片加载错误
    defaultIcon, 
    // moment对象转年月日 时分秒
    momentToString, 
    // 延迟函数 避免重复触发
    delay, 
}