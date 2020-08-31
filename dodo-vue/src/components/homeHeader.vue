<template>
  <div class="header">
    <img class="logo" src="../pages/components/images/dodo.png" alt="dodo" />
    <el-button type="text">
      <router-link to="/home">主页</router-link>
    </el-button>
    <!-- <el-button type="text">
      <router-link to="/community">社区</router-link>
    </el-button> -->
    <el-button type="text">
      <router-link to="/editHrefList">编辑网站收藏</router-link>
    </el-button>
    <!-- <el-button type="text">
      <router-link to="/heatMap">热度图</router-link>
    </el-button> -->
    <el-button type="text">
      <router-link to="/mine">个人主页</router-link>
    </el-button>
    <div @click="$router.push('/search')" class="search">
      <span class="iconfont iconsearch"></span>
      搜索
    </div>
    <div>
      <div v-if="no_login">
        <router-link to="/login">登录</router-link>|
        <router-link to="/register">注册</router-link>
      </div>
      <div v-if="login">
        <img
          alt="无头像"
          class="avatar"
          src="https://p3.pstatp.com/list/190x124/pgc-image/Rft0hGGCLk6YgJ"
        />
        {{username}}
        <router-link to="/login">|登录其他账号</router-link>|
        <router-link to="/register">注册新账号</router-link>
      </div>
    </div>
    <span @click="$router.push('/profile')" class="iconfont iconwode"></span>
  </div>
</template>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
<script>
export default {
  beforeCreate: function() {
    if (localStorage.getItem("user")) {
      let user = JSON.parse(localStorage.user);
      this.username = user.username;
      this.loginChoice = true;
      this.no_loginChoice = false;
    } else {
      this.loginChoice = false;
      this.no_loginChoice = true;
      this.$toast.success("欢迎光临dodo");
    }
  },
  data: function() {
    return {
      username: this.username,
      login: this.loginChoice,
      no_login: this.no_loginChoice
    };
  }
};
</script>

<style lang="less" scoped>
a {
  color: black;
}
.avatar {
  width: 108px;
  height: 30px;
  vertical-align: middle;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  height: 49px;
  background-color: #c4dcce;
  color: #fff;
}
.search {
  width: 210px;
  height: 34px;
  line-height: 34px;
  text-align: center;
  border-radius: 17px;
  margin: 0 auto;
  background-color: black;
}
.iconnew {
  font-size: 54px;
}
.iconwode {
  font-size: 20px;
}
.logo {
  width: 43px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
