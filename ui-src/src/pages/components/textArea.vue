<template>
<div class="this-page">
<!-- <el-input
    class="title"
    type="text"
    size="medium"
    placeholder="请输入标题"
    v-model="text"
    maxlength="16"
    show-word-limit
    >
    </el-input>
    <div style="margin: 20px auto;"></div>
    <el-input
    rows="10"
    size=""
    :autosize="autosize"
    min="{rows:10}"
    step="5"
    type="textarea"
    placeholder="请输入内容"
    v-model="textarea"
    maxlength="800"
    show-word-limit
    >
    </el-input> -->
    <router-link to="/message/editpost"><el-button type="text">发布文章</el-button></router-link>
</div>
</template>=
<script>
export default {
  name:'textArea',
  props:['textArea'],
  data() {
    return {
      text: '',
      textarea: '',
      autosize:{minRows:8,maxRows:80}
    }
  }
}
</script>
<style lang="scss" scoped>
.this-page{
  width: 70%;
  margin: 30px auto;
}
.title{

}
</style>