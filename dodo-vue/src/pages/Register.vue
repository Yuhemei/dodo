<template>
  <div class="container">
    <p>已有账号？ <router-link to="/login">请登录</router-link></p>
    <div class="logo">
      <Logo></Logo>
    </div>

    <div class="inputName">
      <authInput
        @input="setUserName"
        err_message="请输入正确的用户名"
        placeholder="用户名（9位纯数字）"
        rule="[0-9]{9}$"
      />
    </div>
    <div class="inputemail">
      <authInput
        @input="setemail"
        err_message="请输入正确的email"
        placeholder="邮箱（留作密保用）"
        rule="^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$"
      ></authInput>
    </div>
    <div class="inputPwd">
      <authInput
        @input="setPassword"
        err_message="请输入正确的密码3-10位"
        placeholder="请输入密码(3到10位)"
        rule="^\d{3,10}$"
        type="password"
      ></authInput>
    </div>
    <div class="btn">
      <authBtn class="auth-btn" text="注册" @clickxx="sendRegister" />
    </div>
  </div>
</template>

<script>
import authBtn from "@/pages/components/authBtn";
import authInput from "@/pages/components/authInput";
import  Logo from "@/pages/components/Logo";
export default {
  data() {
    return {
      username: "",
      password: "",
      email: ""
    };
  },
  components: {
    authBtn,
    authInput,
    Logo
  },
  methods: {
    setUserName(username) {
      this.username = username;
    },
    setemail(name) {
      this.email = name;
    },
    setPassword(password) {
      this.password = password;
    },
    sendRegister() {
      this.$axios({
        url: "/register",
        method: "POST",
        data: {
          username: this.username,
          email: this.email,
          password: this.password
        }
      }).then(res => {
        if (!res) return;
        console.log("then:" + res.message);
        this.$toast.success(res.message);
      });

      console.log("sendRegister");
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  width:320px ;
  margin:19px auto;
  padding: 20px;
}
.closeBtn {
  .iconfont {
    font-size: 27px;
  }
}
.logo {
  // width:105px;
  display: flex;
  justify-content: center;
}
.btn{
  margin-top: 22px;
}
.auth-btn{
  width: 36%;
  height: 50px;
  line-height: 50px;
}
</style>
