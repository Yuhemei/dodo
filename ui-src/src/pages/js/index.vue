<template>
  <div>
    <span>js学习</span>
    <div id="mountNode" ref="mountNode"></div>
  </div>
</template>
<script>
import G6 from '@antv/g6';

export default {
    "name":"forJs",
    data(){
        return{
           graphData:{
                nodes: [
                    {
                        id: 'node1',
                        x: 100,
                        y: 200,
                    },
                    {
                        id: 'node2',
                        x: 300,
                        y: 200,
                    },
                ],
                // 边集
                edges: [
                // 表示一条从 node1 节点连接到 node2 节点的边
                {
                    source: 'node1',
                    target: 'node2',
                },
            ],
           },
        // G6配置项
            graph:{},
        }
    },
    created(){
        console.log("ref",this.$refs.mountNode);
         const graph = new G6.Graph({
            container: this.$refs.mountNode,// 指定图画布的容器 id，与第 9 行的容器对应
            // 画布宽高
            width: 800,
            height: 500,
        });
        console.log(graph);
        this.draw(graph)
    },
    methods:{
        draw( graph){
            console.log(graph);
           graph.data(this.graphData);
            graph.render();
        }
    }
}
</script>

<style>
</style>