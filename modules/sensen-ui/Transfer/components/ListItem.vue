<template>
  <div
    v-for="item in data"
    :key="item.id"
    :class="['list-item', item.disabled ? 'disabled' : '']"
    :draggable="!item.disabled"
    @dragstart="drageItem(item)"
  >
    <!-- ??input 标签的id值的作用  label标签中for值的作用 -->
    <input
      type="checkbox"
      name=""
      :id="'__checkbox___' + item.id"
      :disabled="item.disabled"
      @click="checkboxClick($event.target.checked, 'left', item)"
    />
    <label :for="'__checkbox___' + item.id">{{ item.phone_name }}</label>
  </div>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Array,
    default: () => []
  },
  leftOrRight: {
    type: String,
    validator(value) {
      return ["left", "right"].includes(value)
    }
  }
})
const emit = defineEmits(["checkboxClick", "dragItem"])
const checkboxClick = (checked, leftOrRight, item) => {
  emit("checkboxClick", checked, leftOrRight, item)
}

const drageItem = (item) => {
  emit("dragItem", item)
}
</script>
<style lang="scss" scoped>
.button-group {
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
  button {
    border: none;
    outline: none;
    width: 38px;
    height: 38px;
    background-color: orange;
    color: white;
    border-radius: 5px;
    &:disabled {
      opacity: 0.6;
    }
    &:nth-child(2) {
      margin-left: 10px;
    }
  }
}
</style>
