<template>
  <el-container>
  <el-header>{{message.title}}</el-header>
  <el-main>{{message.content}}</el-main>
  <el-footer>
                <el-button type="primary" icon="">点赞</el-button>
                <el-button type="primary" icon="el-icon-star-off"></el-button>
                <el-button type="primary" icon="el-icon-star-on"></el-button>
                <el-button type="primary" icon="el-icon-share"></el-button>
                <el-button type="primary" icon="el-icon-chat-line-round"></el-button>
            </el-footer>
</el-container>
</template>

<script>
export default {
    name:'messageMine',
    props:['message']
}
</script>

<style>

</style>