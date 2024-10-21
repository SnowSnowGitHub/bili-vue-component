import { createApp, render } from "vue";
// import styled from "styled-components"??问题没有解决
import { styled } from "@styils/vue"
// import MessageBox from '../components/MessageBox.vue'
const DivModal = styled('div', {
  position: 'absolute',
  top: '30%',
  left: '50%',
  transform: 'translateX(-50%)',
  width: '400px',
  height: '220px',
  textAlign: 'center',
  padding: '20px',
  backgroundColor: '#d6d5d5',
  borderRadius: '5px',
})
const DivMsg = styled('div', {
  fontSize: '16px',
  textAlign: 'center',
  marginottom: '20px',
})

const DivFoot = styled('div', {
  position: 'absolute',
  bottom: '10px',
  width: '100%',
  textAlign: 'center',
})

const DivBtnConfirm = styled('div', {
  display: 'inline-block',
  color: 'white',
  height: '40px',
  lineHeight: '40px',
  width: '50px',
  fontWeight: 'bold',
  fontSize: '12px',
  border: 'none',
  textAlign: 'center',
  background: 'rgb(79, 126, 237)',
  marginRight: '20px',
})
const DivBtnCancel = styled('div', {
  display: 'inline-block',
  color: 'white',
  height: '40px',
  lineHeight: '40px',
  width: '50px',
  fontWeight: 'bold',
  fontSize: '12px',
  border: 'none',
  textAlign: 'center',
  background: 'rgb(79, 126, 237)',
  marginRight: '20px',
  background: '#999',
})



const MessageBox = {
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  render(ctx) {
    const { $props, $emit } = ctx
    return <DivModal class="wrap">
      <DivMsg class="msg">{$props.msg}</DivMsg>
      <DivFoot class="foot">
        <DivBtnConfirm class="btn confirm" click={$emit('onClick(e)')}>确定</DivBtnConfirm>
        <DivBtnCancel class="btn cancel" click={$emit('onClick(e)')}>取消</DivBtnCancel>
      </DivFoot>
    </DivModal>
  }
}
export function showMsg(msg, onClickHandler) {
  const div = document.createElement('div')
  document.body.appendChild(div)
  // 渲染组件到界面上
  const app = createApp(MessageBox, {
    msg,
    onClick(e) {
      console.log('onClick--e--', e)
      if (e.target.innerText === '确定') {
        console.log('点击了确定----')
        onClickHandler()
      }
      if (e.target.innerText === '取消') {
        console.log('点击了取消----')
        app.unmount();
        div.remove();
        onClickHandler()
      }
      // onClick(() => {
      // })
    }
  })
  app.mount(div)
}

// 链接示范: https://blog.csdn.net/l244112311/article/details/134542432