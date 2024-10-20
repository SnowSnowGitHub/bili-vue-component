import { createApp } from "vue";

import MessageBox from '../components/MessageBox.vue'

export function showMsg(msg, onClick) {
  const div = document.createElement('div')
  document.body.appendChild(div)
  // 渲染组件到界面上
  const app = createApp(MessageBox, {
    msg,
    onConfirm() {
      console.log('onConfirm====')
    },
    onCancel() {
      console.log('onCancel====')
      onClick(() => {
        app.unmount()
        div.remove()
      })
    }
  })
  app.mount(div)
}