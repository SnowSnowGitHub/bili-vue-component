<template>
  <div>
    <div class="select-wrap">
      <selector :data="options" @select-change="setTargetIndex"></selector>
      <!-- <select @change="setTargetIndex($event.target.value)">
        <option v-for="(title, index) in options" :key="index" :value="index">
          {{ title }}
        </option>
      </select> -->
    </div>
    <div>
      <div class="transfer">
        <!-- @dragover.prevent 禁止拖拽项目弹回去 -->
        <div
          class="box left-list"
          @dragover.prevent
          @dragend="addRightListData([dragedItem])"
        >
          <list-title :title="leftTitle"></list-title>
          <!-- <h1 class="list-title">{{ leftTitle }}</h1> -->
          <list-item
            :data="leftListData"
            leftOrRight="left"
            @checkboxClick="setCheckedData"
            @drag-item="setDragedItem"
          ></list-item>

          <!-- <div class="">
            <div
              v-for="item in leftListData"
              :key="item.id"
              :class="['list-item', item.disabled ? 'disabled' : '']"
            >
              // ??input 标签的id值的作用  label标签中for值的作用
              <input
                type="checkbox"
                name=""
                :id="'__checkbox___' + item.id"
                :disabled="item.disabled"
                @click="setCheckedData($event.target.checked, 'left', item)"
              />
              <label :for="'__checkbox___' + item.id">{{
                item.phone_name
              }}</label>
            </div>
          </div> -->
        </div>
        <button-group
          @left-button-click="removeRightListData(checkedData.right)"
          @right-button-click="addRightListData(checkedData.left)"
          :left-button-disabled="transferButtonDisabled.left"
          :right-button-disabled="transferButtonDisabled.right"
        ></button-group>
        <!-- <div class="button-group">
          <button
            class=""
            :disabled="transferButtonDisabled.left"
            @click="removeRightListData(checkedData.right)"
          >
            &lt;
          </button>
          <button
            class=""
            :disabled="transferButtonDisabled.right"
            @click="addRightListData(checkedData.left)"
          >
            &gt;
          </button>
        </div> -->
        <div
          class="box right-list"
          @dragover.prevent
          @dragend="addLeftListData([dragedItem])"
        >
          <list-title :title="rightTitle"></list-title>
          <!-- <h1 class="list-title">{{ rightTitle }}</h1> -->
          <div class="box">
            <!-- leftOrRight 写成left-or-right 控制台会报warning -->
            <list-item
              :data="rightListData"
              leftOrRight="right"
              @checkbox-click="setCheckedData"
              @drag-item="setDragedItem"
            ></list-item>
            <!-- <div
              v-for="item in rightListData"
              :key="item.id"
              :class="['list-item', item.disabled ? 'disabled' : '']"
            >
              <input
                type="checkbox"
                name=""
                :id="'__checkbox___' + item.id"
                :disabled="item.disabled"
                @click="setCheckedData($event.target.checked, 'right', item)"
              />
              <label :for="'__checkbox___' + item.id">{{
                item.phone_name
              }}</label>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import propsDefination from "./extends/props"
import selector from "./components/Selector.vue"
import listTitle from "./components/ListTitle.vue"
import buttonGroup from "./components/ButtonGroup.vue"
import listItem from "./components/ListItem.vue"
import {
  useTargetIndex,
  useComputedData,
  useRightListData,
  useCheckedData,
  useDragItem
} from "./extends/hooks"
const props = defineProps(propsDefination)

// console.log(props.data)
// console.log(props.rightTitle)
const options = props.data.map(({ title }) => title)
const [targetIndex, setTargetIndex] = useTargetIndex(0)
const { checkedData, addCheckedData, removeCheckedData } = useCheckedData()
const [rightListData, addRightListData, removeRightListData] = useRightListData(
  [],
  checkedData
)

const { leftTitle, leftListData, transferButtonDisabled } = useComputedData(
  props.data,
  targetIndex,
  rightListData,
  checkedData
)
const setCheckedData = (checked, leftOrRight, item) => {
  checked
    ? addCheckedData(leftOrRight, item)
    : removeCheckedData(leftOrRight, item.id)
}

const [dragedItem, setDragedItem] = useDragItem()
</script>

<style lang="scss" scoped>
.select-wrap {
  text-align: left;
  // select {
  //   margin-bottom: 10px;
  //   width: 100px;
  //   height: 30px;
  // }
}
.transfer {
  display: flex;
  flex-direction: row;
  text-align: left;
  width: 400px;
  height: 300px;
  border: 1px solid gray;
  .box {
    width: 145px;
    height: 100%;
  }
}
</style>
