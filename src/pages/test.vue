<template>
  <div class="container">
    <button class="btn" @click="showModal">点击弹框</button>
  </div>
</template>

<script setup>
  import { showMsg } from "@/utils/message"
  const showModal = () => {
    showMsg("123213", (close) => {
      close() //close名字问题判断
    })
  }
</script>
<style lang="scss" scoped>
  .container {
    .btn {
      background: rgb(20, 81, 223);
      color: white;
      height: 50px;
      width: 100px;
      font-weight: bold;
      font-size: 16px;
      border: none;
    }
  }
</style>
