<template>
    <li><a :href="todo.href"><img :src="todo.img" :alt="todo.title"><p>{{todo.title}}</p> </a></li>
</template>
<script>
export default {
    props:['todo'],
}
</script>
<style lang="less" scoped>
img{
    width:100px;
}
a:hover{
    text-decoration: underline;
}
a{
    color: black;
}
a:active{
    color: cadetblue;
}
</style>