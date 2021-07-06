<template>
<div>
    <div class="test"></div>
    <el-container>
        <el-aside width="200px">{{msg.writer}}</el-aside>
        <el-container>
            <el-header>{{msg.title}}</el-header>
            <el-main>{{msg.content}}</el-main>
            <el-footer>
                <el-button type="primary" icon="">点赞</el-button>
                <el-button type="primary" @click="collectIt"  v-if="collect" icon="el-icon-star-off"></el-button>
                <el-button type="primary" @click="collectIt" v-if="!collect" icon="el-icon-star-on"></el-button>
                <el-button type="primary" icon="el-icon-share"></el-button>
                <el-button type="primary" icon="el-icon-chat-line-round"></el-button>
            </el-footer>
        </el-container>
    </el-container>
</div>
</template>

<script>
export default {
  name:'message',
  props:['msg'],
  data(){
    return{
      collect:true,
      collected:false,
    }
  },
  methods:{
    collectIt(){
      if(this.collect==true){
        this.collect=false;
      }else{
        this.collect=true
      }
    },
  }
}
</script>

<style>
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-header{
    margin-top: 12px;
    /* border-top: solid black; */
  }
  .el-footer{
    /* border-bottom: solid; */
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>