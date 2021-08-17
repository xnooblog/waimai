/*
调用mutation,通过mutation间接更新state的多个方法的对象
 */
import {
  RECEIVE_ADDRESS
} from './mutation-types'

export default {
  //异步获取地址
  async getAddress({commit, state}) {
    const laLong = state.latitude + ',' + state.longitude
    
  }
}
