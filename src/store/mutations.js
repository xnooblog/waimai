/*
直接更新state的多个方法的对象
 */
import Vue from 'vue'
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORIES,
  RECEIVE_SHOPS
} from './mutation-types'

export default {
  [RECEIVE_ADDRESS](state, {address}) {
    state.address = address
  },
  [RECEIVE_CATEGORIES](state, {categories}) {
    state.categories = categories
  },
  [RECEIVE_SHOPS](state, {shops}) {
    state.shops = shops
  }
}
