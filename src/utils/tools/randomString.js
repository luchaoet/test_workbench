/**
 * 产生n位随机字符串
 * LEN      长度
 * FORMAT   字符串包含格式，n数字 l小写字母 u大写字母 s特殊字符， 默认["n", "l", "u", "s"]
 * SPECIAL  自定义特殊字符数组，默认["!", "@", "#", "$", "%", "^", "&", "*", "_"]
 */
export default function randomString(obj={}) {
  const { 
    LEN = 4, 
    FORMAT = ["n", "l", "u", "s"],
    SPECIAL = ["!", "@", "#", "$", "%", "^", "&", "*", "_"] 
  } = obj;

  /**
   * 检测 FORMAT 参数
   * 必须是数组["n", "l", "u", "s"]的子集
   */
  if(
    !isSubset(FORMAT, ["n", "l", "u", "s"])
  ) {
    console.error(`Parameter 'FORMAT' is wrong`)
    return ''
  }
  /**
   * 检测 LEN 参数
   */
  if(LEN < FORMAT.length) {
    console.error(`'LEN' must be greater than the length of 'FORMAT'`)
    return ''
  }
  /**
   * 检测 SPECIAL 参数
   * 规定包含特殊字符时, SPECIAL 数组不可为空
   */
  if(
    FORMAT.indexOf("s") >= 0 &&
    SPECIAL.length === 0
  ){
    console.error(`Parameter 'SPECIAL' cannot be empty`)
    return ''
  }
  /**
   * 字符集合
   */
  const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w","x", "y", "z"];
  const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  // 密码字符串暂存数组
  let passwordArray = [];
  // 允许字符种类的所有字符集合
  let allStrArr = [];
  // 先获取必要格式字符
  for(let str of FORMAT){
    switch(str){
      case 'n': 
        allStrArr = [...allStrArr, ...num];
        passwordArray.push(
          num[randomNum(0, 9)]
        );
        break;
      case 'l': 
        allStrArr = [...allStrArr, ...lowercase];
        passwordArray.push(
          lowercase[randomNum(0, 25)]
        );
        break;
      case 'u': 
        allStrArr = [...allStrArr, ...uppercase];
        passwordArray.push(
          uppercase[randomNum(0, 25)]
        );
        break;
      case 's': 
        allStrArr = [...allStrArr, ...SPECIAL];
        passwordArray.push(
          SPECIAL[randomNum(0, SPECIAL.length - 1)]
        );
        break;
    }
  }

  // 并打乱 allStrArr 顺序
  allStrArr = sortArray(allStrArr);
  // 获取剩余的字符
  for(var i = 0; i < LEN - FORMAT.length; i++){
    passwordArray.push(
      allStrArr[randomNum(0, allStrArr.length - 1)]
    );
  }
  // 最后的结果数组，打乱顺序, 返回结果字符串
  return sortArray(passwordArray).join('');

  // 判断A数组是否为B数组的子集
  function isSubset(A, B){
    A = A.concat(B);
    A = new Set(A);
    // 合并后的数组长度大于B数组， 则A不为B的子集
    return [...A].length <= B.length;
  }
  // 生成 [n,m] 的随机整数，包括n和m
  function randomNum(min, max){
    const random = max - min + 1;
    return Math.floor(Math.random() * random + min);
  }
  // 打乱数组顺序
  function sortArray(array) {
    return array.sort(function(){ return 0.5 - Math.random() })
  }
}