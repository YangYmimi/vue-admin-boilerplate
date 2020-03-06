// 全局过滤器
// numeral : http://numeraljs.com/ : 浮点数处理, nFunc 方式命名
// moment : https://momentjs.com/ : 时间处理, mFunc 方式命名
// 注意，尽量使用 "函数式编程" 方式，并做入参校验
import numeral from 'numeral'
import moment from 'moment'

// 作为方法使用时候需要2个参数
// 作为filter使用时候只需要传入一个 formatStr 即可, 比如 aaa | nFormatFilter('$ 0,00')
export function nFormatFilter (value, formatStr) {
  // 入参需要是 number 类型
  if (value && formatStr && typeof value == 'number') {
    return numeral(value).format(formatStr)
  }

  // 否则不做格式化处理
  return value
}

// 时间 formater
export function mFormatFilter (time, formatStr = 'YYYY-MM-DD') {
  return moment(time).format(formatStr)
}
