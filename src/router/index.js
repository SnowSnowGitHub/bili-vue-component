// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';

// 导入组件
import HelloWorld from '../components/HelloWorld.vue';
import Transfer from '../pages/transfer.vue';
import Test from '../pages/test.vue';

// 定义路由
const routes = [
  { path: '/', component: HelloWorld },
  { path: '/transfer', component: Transfer },
  { path: '/test', component: Test },
];

// 创建路由器实例
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 导出路由器
export default router;