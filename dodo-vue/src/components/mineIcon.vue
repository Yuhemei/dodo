<template>
<div class="flex-column-farther">
    <div class="user-icon">
        <div class="demo-basic--circle">
            <div class="block"><el-avatar :size="50" :src="circleUrl"></el-avatar></div>
        </div>
        <p>做毕设很重要</p>
    </div>
    <div class="button-area">
        <el-button>点赞</el-button>
        <el-button>收藏</el-button>
        <el-button>关注</el-button>
    </div>
</div>
</template>

<script>
export default {
    name:'mineIcon',
    props:['user'],
    data(){
        return{
            circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
            squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
            sizeList: ["large", "medium", "small"]

        }
    }
}
</script>

<style lang="scss" scoped>
.flex-column-farther{
    margin-top: 5px;
}
.user-icon{
    margin-top: 5px;
}
</style>>

