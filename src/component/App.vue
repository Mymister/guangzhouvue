<template>
  <main>
      <p>{{ msg }}</p>
  </main>
</template>

<script>
    export default {
        data() {
            return {
                msg: '测试vue文件是否可用'
            }
        }
    }
</script>

<style>
    p {
        font-size: 30px;
        color: red;
    }
</style>
