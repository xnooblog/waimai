/*
调用mutation,通过mutation间接更新state的多个方法的对象
 */
import {
  RECEIVE_ADDRESS
} from './mutation-types'
import {
  reqAddress
} from '../api'

export default {
  //异步获取地址
  async getAddress({commit, state}) {
    const geohash = state.latitude + ',' + state.longitude
    //发送异步ajax请求
    const result = await reqAddress(geohash)
    if(result.code === 0) {
      const address = result.data
      //提交mutation
      commit(RECEIVE_ADDRESS, {address})
    }
  }
}
