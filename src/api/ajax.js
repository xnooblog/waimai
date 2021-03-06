/*
ajax函数请求模块
返回值：Promise对象（异步返回的数据是：response.data）
 */
import axios from 'axios'

export default function ajax(url, data = {}, type = 'GET') {
  return new Promise((resolve, reject) => {
    let promise
    if(type === 'GET') {
      //url query参数数据
      let dataStr = ''   //拼接参数字符串
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if(dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url += '?' + dataStr
      }
      //发送get请求
      promise = axios.get(url)
    } else {
      //发送post请求
      promise = axios.post(url)
    }
    promise.then((response) => {
      //成功调用resolve
      resolve(response.data)
      console.log(response)
    }).catch((error) => {
      //失败调用reject
      reject(error)
    })
  })
}
