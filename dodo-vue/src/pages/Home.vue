<template>
      <div id="app">
        <div style="margin-left: 82vw;">
          您好!欢迎
          <a
            href="Mailto:yuhemei8088@163.com?CC=yuhemei8088@163.com&BCC=yuhemei8088@163.com&Subject=Hello&Body=你好"
            style="text-decoration: underline blue;margin-right: 200px;"
          >给作者发邮件(yuhemei8088@163.com)</a>
        </div>

        <div class="main">
          <div class="left-list">
            <hrefItem class="hrefItem" v-for="item in hrefList" :key="item.title" v-bind:todo="item"></hrefItem>
            <el-button type="text"><router-link to="editHrefList">编辑网站收藏</router-link></el-button>
          </div>
          <div class="middle">
            <div class="middle-lbt">
              <div class="carousel-wrap" id="carousel">
                <transition-group tag="ul" class="slide-ul" name="list">
                  <li
                    v-for="(list,index) in slideList"
                    :key="index"
                    v-show="index===currentIndex"
                    @mouseenter="stop"
                    @mouseleave="go"
                  >
                    <a :href="list.clickUrl">
                      <img :src="list.image" :alt="list.desc" />
                    </a>
                  </li>
                </transition-group>
                <div class="carousel-items">
                  <span
                    v-for="(item,index) in slideList.length"
                    :key="index"
                    :class="{'active':index===currentIndex}"
                    @mouseover="change(index)"
                  ></span>
                </div>
              </div>
            </div>
            <div class="middle-href-h">
              <h3>前端模块</h3>
              <h3>
                <a
                  href="https://developer.mozilla.org/zh-CN/docs/Learn/Getting_started_with_the_web"
                >
                  MDN
                  Web入门
                </a>
              </h3>
            </div>
            <div class="middle-href-list">
              <hrefIcon class="href-icon" v-for="item in hrefIcon" :key="item.title" v-bind:todo="item"></hrefIcon>
            </div>
          </div>
          <div class="right-list">
            <div class="right-top-list">
              <div class="right-top-list-h">
                <h2>Welcome To DoDo</h2>
                <h2>Just Do It!</h2>
                <h2>Yeah!</h2>
                <div style="opacity:1;
        filter: alpha(opacity=100);">
                  <img
                    src="./images/icons/五星级酒店.png"
                    style="width: 200px;height: 200px;opacity:1;
        filter: alpha(opacity=100);"
                    alt
                  />
                </div>
              </div>
            </div>
            <div class="right-footer-list">
              <h2>Python 模块</h2>
              <div class="right-footer-list-item">
                <a href="https://docs.python.org/zh-cn/3.7/tutorial/index.html">Python官方文档</a>
                <a
                  href="https://developer.mozilla.org/zh-CN/docs/Learn/Server-side/Django"
                >Python网站框架Django</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
</template>

<script>
import authInput from "@/pages/components/authInput"
import authBtn from "@/pages/components/authBtn"
import homeHeader from "@/components/homeHeader";
import hrefItem from "@/components/hrefItem";
import hrefIcon from "@/components/hrefIcon";

export default {
  name: "Home",
  components: {
    homeHeader,
    hrefItem,
    hrefIcon,
    authBtn,
    authInput
  },
  data() {
    this.slideList=[{
              "clickUrl": "#",
              "desc": "0",
              "image": require("./img/0.jpg")
          },
          {
              "clickUrl": "#",
              "desc": "1",
              "image": require("./img/1.jpg")
          },
          {
              "clickUrl": "#",
              "desc": "2",
              "image": require("./img/2.jpg")
          },
          {
              "clickUrl": "#",
              "desc": "3",
              "image": require("./img/3.jpg")
          },
          {
              "clickUrl": "#",
              "desc": "4",
              "image": require("./img/4.jpg")
          },
          {
              "clickUrl": "#",
              "desc": "5",
              "image": require("./img/5.jpg")
          },
          {
              "clickUrl": "#",
              "desc": "6",
              "image": require("./img/6.jpg")
          },
          {
              "clickUrl": "#",
              "desc": "7",
              "image": require("./img/7.jpg")
          },
          {
              "clickUrl": "#",
              "desc": "8",
              "image": require("./img/8.jpg")
          },
      ];
      this.hrefMenu= [{
                    title: '百度',
                    href: 'https://www.baidu.com'
                },
                {
                    title:'Google',
                    href:'https://www.google.com/'
                },
                {
                    title: '简书',
                    href: 'https://jianshu.com'
                }, {
                    title: '沈阳理工大学教务管理系统',
                    href: 'http://218.25.35.27:8080/(d0eiyp55edcqqv55ct5v0x45)/default2.aspx'
                }, {
                    title: 'B站',
                    href: 'https://www.bilibili.com/'
                },
                {
                    title: '163.com',
                    href: 'https://mail.163.com/#return'
                }, {
                    title: '西瓜视频',
                    href: 'https://www.ixigua.com/'
                }, {
                    title: '字节跳动校招',
                    href: 'https://job.bytedance.com/campus/position?summary=&city=&q1=python&position_type='
                }, {
                    title: 'Git.Book',
                    href: 'https://git-scm.com/book/zh/v2'
                },
            ];
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
        for(let i=0;i<len;i++){
          if(href_list[i]  in this.hrefMenu){
          continue
          }else{
          console.log(href_list[i]);
          this.hrefMenu.push(href_list[i])
          };
        }
        this.$toast.success(res.message);
      });
    }else{
      this.$toast.success('欢迎光临dodo')
    };
    return {
      loading: false,
      // finished:false,
      activeTab: 0,
      tabList: [],
      pageSize: 5,
      hrefList:this.hrefMenu,
      hrefIcon: [{
              title: '混合项目',
              img: require('./images/icons/混合项目.png'),
              href: 'https://github.com/Yuhemei/'
          },
          {
              title: 'MDN色彩选择工具',
              img: require('./images/icons/MDN色彩选择.png'),
              href: 'https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Colors/Color_picker_tool'
          },
          {
              title: 'Echarts实例',
              img: require('./images/icons/Echarts实例.png'),
              href: 'https://www.echartsjs.com/examples/zh/index.html'
          },
          {
              title: 'Google字体搜索',
              img: require('./images/icons/Google字体搜索.png'),
              href: 'https://fonts.google.com/'
          },
          {
              title: 'Google图片搜索',
              img: require('./images/icons/Google图片搜索.png'),
              href: 'https://www.google.com/imghp?gws_rd=ssl'
          }
      ],
      // 轮播图js
      
      currentIndex: 0,
      timer: '',
      aHref:{},
    };
  },

  methods: {
    setHrefTitle(title){
      this.aHref.title=title
    },
    setHrefHref(href){
      this.aHref.href=href
    },
    // registerHref(){
    //   console.log(this.aHref);
      
    //   this.$axios({
    //     url:'/registerHref',
    //     method:'POST',
    //     data:{
    //       username:localStorage.getItem("user_id"),
    //       href:this.aHref,  
    //     }
    //   }).then(res=>{
    //     console.log(res);
    //     this.$toast.success(res.message)
        
    //   })
    // },
    go() {
    this.timer = setInterval(() => {
        this.autoPlay();
    }, 3500);
    },
    stop() {
        clearInterval(this.timer);
        this.timer = null;
    },
    change(index) {
        this.currentIndex = index;
    },
    autoPlay() {
        this.currentIndex++; 
        if (this.currentIndex > this.slideList.length - 1) {
            this.currentIndex = 0
        }
    },
    pushList(){

    },
  },
    created() { 
      this.$nextTick(() => {
          this.timer = setInterval(() => {
              this.autoPlay()
          }, 4000)
      })
  }
};
</script>


<style  lang="less" scoped>

* {
    margin: 0;
    padding: 0;
}
a{
  color:black
}
a:visited,
a:link {
    text-decoration: none;
    color: black;
}

.carousel-wrap {
    opacity: 1;
    filter: alpha(opacity=100);
    height: 400px;
    width: 845px;
    overflow: hidden;
    margin: auto;
    background-color: #d4eed3;
}

.slide-ul {
    margin: auto;
    position: relative;
    width: 845px;
    height: 420px;
}

.slide-ul li {
    text-align: center;
    list-style: none;
    position: absolute;
    width: 845px;
    height: 420px;
}

.slide-ul li img {
    /* width: 100%; */
    height: 100%;
}

/* lbt top bar */
.carousel-items {
    position: absolute;
    z-index: 10;
    /* top:360px; */
    /* bottom: 0; */
    width: 845px;
    /* margin:  auto; */
    text-align: center;
    font-size: 0;
}

.carousel-items span {
    display: inline-block;
    height: 6px;
    width: 30px;
    margin: auto;
    background-color: #b2b2b2;
    cursor: pointer;
}

.carousel-items .active {
    background-color: orange;
}

.list-enter-to {
    transition: all 1s ease;
    transform: translateX(0);
}

.list-leave-active {
    transition: all 1s ease;
    transform: translateX(-100%)
}

.list-enter {
    transform: translateX(100%)
}

.list-leave {
    transform: translateX(0)
}

.top-bar {
    text-align: center;
    width: 1550;
    height: 70px;
    background-color: #C4DCCE;
    margin: auto;
    line-height: 70px;
}

.main {
    /* background-color: #d4eed3;
        opacity:0.7;
        filter:alpha(opacity=0); */
    /* position: relative; */
    margin:auto;
    width: 1550px;
    display: flex;
    flex-flow: row nowrap;

}

.left-list {
    overflow: auto;
    background-color: #d4eed3;
    opacity: 1;
    filter: alpha(opacity=100);
    width: 150px;
    height: 700px;
    text-align: center;
    margin-left: 0;
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

.middle {
    width: 845px;
    height: 700px;
    background-color: #d4eed3;
    opacity: 1;
    filter: alpha(opacity=100);
    margin-left: 20px;
}

.middle-lbt {
    width: 815px;
    height: 320px;
    opacity: 1;
    filter: alpha(opacity=100);
}

.middle-href-h {
    margin: 130px auto 0;
    text-align: center;
}

.middle-href-list {
    /* position: relative; */
    /* margin:  auto; */
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-content: flex-start;

}

.middle-href-list li {
    list-style: none;
    /* font-family: Arial, Helvetica, sans-serif; */
    font-style: normal;
    text-align: center;
    font-weight: bold;
}

.right-list {
    margin-left: 35px;
    /* width: 475px; */

}

.right-top-list {
    width: 475px;
    height: 280px;
    background-color: #d4eed3;
    opacity: 1;
    filter: alpha(opacity=100);

}

.right-top-list-h {
    text-align: center;
}

.right-footer-list {
    margin-top: 40px;
    width: 475px;
    height: 380px;
    background-color: #d4eed3;
    opacity: 1;
    filter: alpha(opacity=100);
}

.right-footer-list-item {
    font-weight: bold;
    margin-left: 20px;
    margin-top: 40px;
    display: flex;
    flex-flow: column wrap;
}

#app {
    padding: 0;
    margin: 0;

}

.href-icon {
    position: static;
    width: 100px;
    height: 100px;
}

.href-icon img {
    width: 100px;
    height: 100px;
}

</style>
