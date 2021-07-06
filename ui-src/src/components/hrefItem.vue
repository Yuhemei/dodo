<template>
    <li><a :href="todo.href" target="_blank">{{todo.title}}</a></li>
</template>
<script>
export default {
    props:["todo"]
}
</script>
<style lang="less" scoped>
a{
    color: black;
}
a:hover{
    color: black;
    text-decoration: underline;
}
a:active{
    color: cadetblue;
}
</style>