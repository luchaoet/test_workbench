/**
 * 时间格式转换
 * 时间戳转 Y-m-d H:i:s
 */
export default function format(timestamp) {
    const time = new Date(timestamp),
      y = time.getFullYear(),
      m = time.getMonth()+1,
      d = time.getDate(),
      h = time.getHours(),
      mm = time.getMinutes(),
      s = time.getSeconds();
    return y+'-'+add0(m)+'-'+add0(d)+' '+add0(h)+':'+add0(mm)+':'+add0(s);
}
function add0(num) {
    return num > 9 ? num : `0${num}`;
}