<template>
  <div class="main">
    <!-- 文章分类 -->
    <el-tabs tab-position="left" style="width:100%;background-color:white">
      <el-tab-pane label="前端">
        <div class="message-area">
          <el-container style=" border: 1px solid #eee;border-radius:15%;">
            <el-aside width="200px" style="background-color: rgb(238, 241, 246)"></el-aside>
            <el-container>
              <el-header style="text-align: center; font-size: 12px"></el-header>
              <el-main>
                <Message v-for="item in message" :msg="item" :key="item.key"></Message>
                <!-- :data="tableData" -->
              </el-main>
              <div class="block">
                <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="currentPage4"
                  :page-sizes="[15, 20, 30, 50]"
                  :page-size="15"
                  layout="total, sizes, prev, pager, next, jumper"
                  :total="400"
                ></el-pagination>
              </div>
            </el-container>
          </el-container>
        </div>
      </el-tab-pane>
      <el-tab-pane label="后端">后端的文章</el-tab-pane>
      <el-tab-pane label="运维">运维的文章</el-tab-pane>
      <el-tab-pane label="产品">产品的文章</el-tab-pane>
    </el-tabs>
    <!-- 文章 -->

    <!-- 个人资料区 -->
    <router-link to="/mine">
      <div class="me">
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>

        <p>关注(14)</p>
        <p>点赞(3)</p>
        <p>收藏(112)</p>
        <p>消息(333)</p>
        <p>我的发布（12）</p>
      </div>
    </router-link>
  </div>
</template>
<script>
import textArea from "@/pages/components/textArea";
import Message from "@/pages/components/message";
export default {
  name: "Community",
  components: {
    textArea,
    Message,
  },
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄11111111111111111111111111"
    };
    return {
      Tab: "前端",
      // tableData: Array(20).fill(item),
      message: [
        {
          title: "JS数据类型之间的转换",
          content: "1",
          writer: "于贺美"
        },
        {
          title: "PHP是世界上最好的语言",
          content: "如题",
          writer: "于贺美"
        },
        {
          title: "PHP是世界上最好的语言",
          content: "如题",
          writer: "于贺美"
        },
        {
          title: "PHP是世界上最好的语言",
          content: "如题",
          writer: "于贺美"
        }
      ],
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    changeTab() {
      // this.Tab="后端";
      alert("出发了");
    }
  }
};
</script>
<style lang="scss" scoped>
.main {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
.flex-row-farther {
  display: flex;
  flex-flow: row nowrap;
  width: 81%;
  justify-content: space-around;
  align-items: center;
}
.me {
  border: 1px solid black;
  border-radius: 5%;
  background-color: cadetblue;
  float: right;
  position: fixed;
  top: 100px;
  right: 50px;
}
.publish-area {
  flex-grow: 13;
}
.message-area {
  width: 81%;
}
</style>