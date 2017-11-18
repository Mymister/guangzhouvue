<template>
  <main>
      <p>{{ msg }}</p>
      <router-view></router-view>
  </main>
</template>

<script>
// 这里vue要求我们对外暴漏一个组件的配置项
    export default {
        data() {
            return {
                msg: '测试vue文件是否可用'
            }
        }
    }
</script>

<style scoped >
    p {
        font-size: 30px;
        color: red;
    }
</style>
