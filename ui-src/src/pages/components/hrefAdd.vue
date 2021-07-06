<template>
  <div>
    <el-button type="success" @click="dialog = true">添加</el-button>

    <el-drawer
      title="您好!请添加网站收藏"
      :visible.sync="dialog"
      direction="rtl"
      custom-class="demo-drawer"
      ref="drawer"
    >
      <div class="demo-drawer__content">
        <el-form :model="form">
          <el-form-item label="网站备注" :label-width="formLabelWidth">
            <el-input v-model="atitle" @input="setHrefTitle" clearable></el-input>
          </el-form-item>
          <el-form-item label="网站地址" :label-width="formLabelWidth">
            <el-input v-model="ahref" @input="setHrefHref" clearable></el-input>
          </el-form-item>
        </el-form>
        <div class="demo-drawer__footer">
          <el-button @click="cancelForm">取 消</el-button>
          <el-button
            type="primary"
            @click="registerHref"
            :loading="loading"
          >{{ loading ? '提交中 ...' : '确 定' }}</el-button>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import authInput from "@/pages/components/authInput";
export default {
  components: {
    authInput
  },
  data() {
    return {
    atitle:'',
    ahref:'',
    aHref: {},
      table: false,
      dialog: false,
      loading: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "80px",
      timer: null
    };
  },
  methods: {
    handleClose(done) {
      if (this.loading) {
        return;
      }
      this.$confirm("确定要提交表单吗？")
        .then(_ => {
          this.loading = true;
          this.timer = setTimeout(() => {
            done();
            // 动画关闭需要一定的时间
            setTimeout(() => {
              this.loading = false;
            }, 400);
          }, 2000);
        })
        .catch(_ => {});
    },
    cancelForm() {
      this.loading = false;
      this.dialog = false;
      clearTimeout(this.timer);
    },
    setHrefTitle(title) {
      this.aHref.title = title;
    },
    setHrefHref(href) {
      this.aHref.href = href;
    },
    registerHref() {
      console.log(this.aHref);
      if(this.aHref.title!=undefined&&this.aHref.href!=undefined){
                this.$axios({
        url: "/registerHref",
        method: "POST",
        data: {
          username: localStorage.getItem("user_id"),
          href: this.aHref
        }
      }).then(res => {
        console.log(res);
        this.$toast.success(res.message);
      });
      }else{
          alert("不能为空");
      }
    }
  }
};
</script>