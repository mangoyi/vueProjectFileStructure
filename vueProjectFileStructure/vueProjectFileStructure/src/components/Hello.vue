<!--
在vue组件里面定义一个data方式
return一个object，object中所有的值都会添加到依赖中去。
通过msg就可以访问到data中的msg
-->
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello Vue!'
    }
  }
}
// export default 的整个对象在App.vue中
// 通过import Hello from './components/Hello' 引入。export 出来的对象就会赋值给Hello对象。
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
