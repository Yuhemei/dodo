<template>
  <div class="flex-row-farther">
    <div class="text-area">
      <li>
        <a :href="todo.href">{{todo.title}}</a>
      </li>
    </div>
    <div class="button-area">
      <!-- 编辑 -->
      <el-button type="primary" @click="hrefFormVisible = true" icon="el-icon-edit"></el-button>
      <el-dialog title="修改网址收藏信息" :visible.sync="hrefFormVisible">
        <el-form :model="aHref">
          <el-form-item label="网址名称" :label-width="formLabelWidth">
            <el-input v-model="aHref.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="网址URL" :label-width="formLabelWidth">
            <el-input v-model="aHref.loc" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="hrefFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="hrefFormVisible = false">确 定</el-button>
        </div>
      </el-dialog>
      <!-- 分享 -->
      <el-button type="primary" @click="copyRight" icon="el-icon-share"></el-button>

      <el-popconfirm
        confirmButtonText="确认"
        cancelButtonText="取消"
        icon="el-icon-info"
        iconColor="red"
        title="确定要删除本网站收藏吗"
      >
        <el-button slot="reference" type="primary" icon="el-icon-delete"></el-button>
      </el-popconfirm>
    </div>
  </div>
</template>
<script>
export default {
  props: ["todo"],
  methods: {
    copyRight() {
      this.$message({
        message: "您好！链接已复制至剪贴板",
        type: "success"
      });
    }
  },
  data() {
    return {
      hrefFormVisible: false,
      aHref: {
        name: "",
        loc:"",
      },
      formLabelWidth: "120px"
    };
  }
};
</script>
<style lang="less" scoped>
.flex-row-farther {
  justify-content: space-around;
  align-items: center;
  margin: 5px;
}
.button-area {
  width: 300px;
}
.text-area {
  width: 100px;
}
a {
  color: black;
}
a:hover {
  color: black;
  text-decoration: underline;
}
a:active {
  color: cadetblue;
}
li {
  list-style: none;
}
</style>