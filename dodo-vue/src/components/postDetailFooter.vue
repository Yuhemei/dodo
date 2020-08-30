<template>
  <div class="footer">
    <div class="disable" v-if="!isFocus">
      <input @focus="showArea" placeholder="写跟帖" type="text" />
      <div class="comment">
        <span class="iconfont iconpinglun-"></span>
        <div class="commentNumber">{{post.comment_length}}</div>
      </div>
      <span :class="{red: post.has_star}" @click="star" class="iconfont iconshoucang"></span>
      <a
        href="https://developers.weixin.qq.com/doc/offiaccount/Getting_Started/Explanation_of_interface_privileges.html"
      >
        <span class="iconfont iconfenxiang"></span>
      </a>
    </div>
    <div class="enable" v-if="isFocus">
      <textarea @blur="handleBlur" ref="commentArea" rows="3" v-model="comment"></textarea>
      <span @click="send" class="send">发送</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "postDetailFooter",
  props: ["post"],
  data() {
    return {
      isFocus: false,
      comment: ""
    };
  },
  methods: {
    send() {
      this.$axios({
        url: "/create_comment/" + this.post.id,
        method: "post",
        data: {
          content: this.comment
        }
      }).then(res => {
        this.isFocus = false;
        this.post.comment_length += 1;
        this.comment = "";
        this.$emit("newComment");
        console.log(res);
      });
    },
    star() {
      this.$axios({
        url: "/post_star/" + this.post.id,
        method: "POST"
      }).then(res => {
        this.$emit("starChanged");
        console.log(res);
      });
    },
    showArea() {
      this.isFocus = true;
      this.$nextTick(() => {
        this.$refs.commentArea.focus();
      });
    },
    handleBlur() {
      if (!this.comment) {
        this.isFocus = false;
      }
    }
  }
};
</script>

<style lang="less" scoped>
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  .disable {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px 10px 10px 0;
    .iconfont {
      font-size: 23px;
    }
    input {
      height: 31px;
      line-height: 31px;
      font-size: 14px;
      border: none;
      outline: none;
      border-radius: 16px;
      padding: 0 16px;
      background-color: #d7d7d7;
      color: #848484;
    }
    .comment {
      position: relative;
      .commentNumber {
        position: absolute;
        left: 2px;
        top: -8px;
        height: 16px;
        line-height: 16px;
        box-sizing: border-box;
        font-size: 12px;
        color: #fff;
        background: #f00;
        border-radius: 8px;
        padding: 0 8px;
      }
    }
  }
  .enable {
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    padding: 10px 10px 10px 0;
    textarea {
      width: 270px;
      padding: 16px 0;
      box-sizing: border-box;
      border: none;
      outline: none;
      border-radius: 8px;
      color: #666;
      background-color: #d7d7d7;
      resize: none;
    }
    .send {
      padding: 0 15px;
      height: 26px;
      line-height: 26px;
      text-align: center;
      background-color: #f00;
      color: #fff;
      border-radius: 16px;
      border: 1px solid #f00;
      font-size: 14px;
    }
  }
  .red {
    color: #f00;
  }
}
</style>
