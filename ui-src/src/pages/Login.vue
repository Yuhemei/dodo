<template>
  <div class="container">
    <div class="closeBtn">
     <router-link to="/register"> 还没有账号？请注册</router-link>
    </div>
    <div class="logo">
      <Logo></Logo>
    </div>
    <div class="inputName">
      <authInput
        @input="setUserName"
        err_message="请输入正确的用户名"
        placeholder="请输入用户名"
        rule="[0-9|a-z]{3，9}"
      ></authInput>
    </div>

    <div class="inputPwd">
      <authInput
        @input="setPassword"
        @keyup="sendLogin"
        err_message="请输入正确的密码"
        placeholder="请输入密码"
        rule="^\d{3,10}$"
        type="password"
      ></authInput>
    </div>
    <div class="btn">
      <authBtn class="auth-btn" text="登录" @clickxx="sendLogin"></authBtn>
    </div>
  </div>
</template>

<script>
import authBtn from "@/pages/components/authBtn";
import authInput from "@/pages/components/authInput";
import  Logo from "@/pages/components/Logo";

export default {
  name: "Login",
  mounted() {
    localStorage.removeItem("token");
  },
  data() {
    return {
      bt:"335",
      username: "",
      password: ""
    };
  },

  components: {
    authBtn,
    authInput,
    Logo
  },
  methods: {
    setUserName(name) {
      this.username = name;
    },
    setPassword(password) {
      this.password = password;
    },

    sendLogin() {
      this.$axios({
        url: "/login",
        method: "POST",
        data: {
          username: this.username,
          password: this.password
        }
      }).then(res => {
        // console.log(res.message);
        console.log(res.data.user);
        console.log(res.data.token);
        localStorage.setItem("user",JSON.stringify(res.data.user))
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user_id", res.data.user.username);

        this.$toast.success(res.message);
        setTimeout(() => {
          this.$router.push({ name: "homePage" });
        }, 1000);
      });
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  margin: 100px auto;
  padding: 20px;
  width: 320px;
}
.closeBtn {
  .iconfont {
    font-size: 27px;
  }
}
.logo {
  display: flex;
  justify-content: center;
  .iconfont {
    color: #d81e06;
    font-size: 126px;
  }
}
.btn {
  margin: 22px auto 0;
}
.register {
  margin-top: 20px;
  text-align: center;
}
.auth-btn{
  width:36%;
  height: 50px;
  line-height: 50px;
}
</style>
