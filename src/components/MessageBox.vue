<template>
  <div class="wrap">
    <div class="msg">{{ msg }}</div>
    <div class="foot">
      <div class="btn confirm" @click="emit('confirm')">确定</div>
      <div class="btn cancel" @click="emit('cancel')">取消</div>
    </div>
  </div>
</template>

<script setup>
  const emit = defineEmits(["confirm", "cancel"])
  // const confirm = () => {
  //   emit("confirm")
  // }
  // const cancel = () => {
  //   emit("confirm")

  const props = defineProps({
    msg: {
      type: String,
      required: true
    }
  })
  // }
</script>

<style lang="scss" scoped>
  .wrap {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translateX(-50%);
    width: 400px;
    height: 220px;
    text-align: center;
    padding: 20px;
    background-color: #d6d5d5;
    border-radius: 5px;

    .msg {
      font-size: 16px;
      text-align: center;
      margin-bottom: 20px;
    }
    .foot {
      position: absolute;
      bottom: 10px;
      width: 100%;
      text-align: center;
    }
    .btn {
      display: inline-block;
      color: white;
      height: 40px;
      line-height: 40px;
      width: 50px;
      font-weight: bold;
      font-size: 12px;
      border: none;
      text-align: center;
      &.confirm {
        background: rgb(79, 126, 237);
        margin-right: 20px;
      }
      &.cancel {
        background: #999;
      }
    }
  }
</style>
