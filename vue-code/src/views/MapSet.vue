<template>
    <div class="container">
        <ul>
            <li v-for="(item, index) in list" :key="index">
                <span>{{item}}</span>
                <button @click="remove(item)">移除</button>
            </li>
        </ul>
        <button @click="add">添加</button>
        <button @click="clean">清空</button>
    </div>
</template>
<script>
export default {
    name: "mapSet",
    data: () => ( {
            list: new Set(['zhangsan', 'JavaScript', '前端工程师'])
    }),
    created() {
        console.log(this.list);
    },
    methods: {
        remove(item) {
            this.list.delete(item);
        },
        add() {
            const newItem = prompt('Input a new item');
            if (newItem) {
                this.list.add(newItem);
            }
        },
        clean() {
            this.list.clear();
        }
    },
}
</script>
<style lang="scss" scoped>
    .container {
        width: 640px;
        height: 400px;
        margin: auto;
        background-color: #ccc;
        padding-top: 20px;

        ul {
            li {
                list-style: none;
            }
        }
    }
</style>