import * as echarts from 'echarts'
import { onUnmounted } from 'vue'

export default function useEchart(divEl) {
  //初始化
  const echartInstance = echarts.init(divEl, null, { renderer: 'svg' })

  onUnmounted(() => {
    echartInstance.dispose() // 销毁实例
  })

  // 为了方便 该 hooks 的使用
  function setOption(option) {
    echartInstance.setOption(option)
  }

  function resizeEchart() {
    echartInstance.resize()
  }

  return {
    echartInstance,
    setOption,
    resizeEchart
  }
}
