<template>
  <div class="flex-row-farther">
    <div class="main-vew">
      <textArea></textArea>
      <div class="messages">
        <el-container>
          <el-header class="main-header"></el-header>
          <el-main>
            <messageMine :message="message"></messageMine>
          </el-main>
          <el-footer>回顶部</el-footer>
        </el-container>
      </div>
    </div>
    <div class="right-vew">
      <div class="right-top">
        <mineIcon></mineIcon>
      <router-link to="/editProfile">编辑个人资料</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import mineIcon from "@/components/mineIcon";
import textArea from "@/pages/components/textArea";
import messageMine from "@/pages/components/messageMine";
export default {
  name: "Mine",
  props: ["user"],
  components: {
    mineIcon,
    textArea,
    messageMine
  },
  data() {
    return {
      message: {
        title: "ok",
        content: "PHP是世界上最好的语言",
        about: ""
      }
    };
  }
};
</script>

<style  scoped>
.flex-row-farther{
    margin: 20px auto;
    width: 82%;
    justify-content: center;
    justify-items: flex-start;
    align-items: stretch;
}
div {
  background-color: mintcream;
  width: auto;
}
.main-view {
  flex-grow: 13;
  width: 72%;
  border: 1px solid black;
}
.right-view {
  margin-top: 15px;
  flex-grow: 0;
}
</style>

