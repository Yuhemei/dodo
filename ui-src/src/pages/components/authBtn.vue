<template>
  <div class="btn" @click="handleClick">{{text}}</div>
</template>

<script>
export default {
  props: ["text"],
  methods: {
    handleClick(event) {
      this.$emit("clickxx");
    }
  }
};
</script>

<style lang="less" scoped>
.btn {
  margin: 3px auto;
  color: #fff;
  background-color: #89d082;
  border-radius: 24px;
  text-align: center;
}
</style>
