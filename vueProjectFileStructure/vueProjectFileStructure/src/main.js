import Vue from 'vue'
import App from './App'

// 依赖 vue
/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
//  es6的语法，简写。 conponents : { App : App }
// 在使用组件的时候一定要注册components 先注册后使用。 依赖App，我们可以去看这个app.vue组件了
})
//实例化 vue 实例 。

