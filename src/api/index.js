/*
包含多个请求函数的模块
函数的返回值：Promise对象
 */
import ajax from './ajax'

const BASE_URL = '/api'

//1、根据经纬度获取位置详情
export const reqAddress = (geohash) => ajax(`${BASE_URL}/position/${geohash}`)
//2、获取食品分类列表
export const reqFoodCategories = () => ajax(BASE_URL + '/index_category')
