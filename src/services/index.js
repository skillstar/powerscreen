import hyRequest from './request'
export const BASE_URL = 'https://fancy-sky-cbb8.angelboy008.workers.dev'
/**
 * 获取新能源充电桩页面的数据( get请求,不需要参数 )
 * 为什么这个接口不会出现跨越问题: cors(在后台已经处理跨越问题了)
 * @returns
 */
export function getPowerScreenData() {
  return hyRequest.get({
    url: BASE_URL // 直接使用 BASE_URL
  })
}
