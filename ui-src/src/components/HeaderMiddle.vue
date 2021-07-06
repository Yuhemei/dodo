<template>
  <div class="header">
    <span @click="$router.back()" class="iconfont iconjiantou2"></span>
    <div class="title">{{title}}</div>
  </div>
</template>

<script>
export default {
  props: ["title"]
};
</script>

<style lang="less" scoped>
.header {
  display: flex;
  justify-content: space-between;
  height: 50px;
  line-height: 50px;
}
.iconjiantou2 {
  padding: 0 10px;
}
.title {
  padding-right: 40px;
  flex: 1;
  text-align: center;
  font-weight: bold;
}
</style>
