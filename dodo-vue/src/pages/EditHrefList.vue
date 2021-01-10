<template>
  <div class="this-page">
    <div class="hrefList">
      <!-- 添加 -->
       <el-button type="primary" @click="hrefFormVisible = true" icon="el-icon-plus">添加</el-button>
      <el-dialog title="修改网址收藏信息" :visible.sync="hrefFormVisible">
        <el-form :model="aHref">
          <el-form-item label="网址名称" >
            <el-input v-model="aHref.title" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="网址URL" >
            <el-input v-model="aHref.href" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="hrefFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="registerHref">确 定</el-button>
        </div>
      </el-dialog>
      <editHref class="editHref" v-for="item in hrefList" :key="item.title" v-bind:todo="item"></editHref>
    </div>
  </div>
</template>
<script >
import authInput from "@/pages/components/authInput";
import authBtn from "@/pages/components/authBtn";
import editHref from "@/pages/components/editHref";
import hrefIcon from "@/components/hrefIcon";
import hrefAdd from "@/pages/components/hrefAdd";
export default {
  inject:['reload'],
  name: "editHrefList",
  components: {
    editHref,
    hrefIcon,
    authBtn,
    authInput,
    hrefAdd,
  },
  data(){
      this.hrefList=[];
      if(localStorage.getItem("user_id")){
      let user=localStorage.getItem("user_id")
      this.$axios({
        url: "/homePage",
        method: "POST",
        data: {
          username: user,
        }
      }).then(res => {
        console.log(res.data);
        let href_list=res.data.user.hrefs;
        let len=href_list.length;
        console.log(len);
        for(let i=0,l;i<len;i++){
          if(href_list[i] in this.hrefList){
            continue;
          }else{
            this.hrefList.push(href_list[i]);
          }
        }
      });
    }else{
      this.$toast.success('欢迎光临dodo,若想操作此项请先登录')
    }
    return{
      aHref: {
        title:'',
        href:''
      },
      hrefList:this.hrefList,
      hrefFormVisible:false,
    };
  },
  methods: {
    setHrefTitle(title) {
      this.aHref.title = title;
    },
    setHrefHref(href) {
      this.aHref.href = href;
    },
    registerHref() {
      console.log(this.aHref);
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
        hrefFormVisible = false;
    }
  }
};
</script>
<style lang="scss" scoped>
.this-page{
  display: flex;
  flex-flow: row nowrap;
}
.left-list {
  background-color: #d4eed3;
  opacity: 1;
  filter: alpha(opacity=100);
  width: 150px;
  height: 700px;
  text-align: center;
  margin: auto;
}

.left-list li {
  margin-top: 6px;
  list-style: none;
}

.left-list a {
  text-decoration: none;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 20px;
  font-weight: bold;
}

.href-item {
  margin: auto;
  text-align: center;
  width: 150px;
}
.auth-input >>> {
    width: 100%;
    border:1px black solid;
}
.auth-btn{
    width: 50%;
}
</style>