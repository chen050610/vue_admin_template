//获取时间
export const gettime = () => {
  let message = ''
  let hour = new Date().getHours()
  if (hour <= 9) {
    message = '早上'
  } else if (hour <= 12) {
    message = '中午'
  } else if (hour <= 18) {
    message = '下午'
  } else {
    message = '晚上'
  }
  return message
}
