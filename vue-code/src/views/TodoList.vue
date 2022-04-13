<template>
    <div class="todo-list">
        <div class="header">todoList</div>

        <input type="text" v-model="name" placeholder="请输入名字" class="mr-1">
        <input type="text" v-model="sex" placeholder="请输入性别" class="mr-1">
        <button @click="add" class="mr-1">添加</button>
        <button @click="update" class="mr-1">更新</button>
        <button @click="clear">清空数组</button>

        <ul>
            <li v-for="(item, index) in list" :key="index">
                <span>姓名：{{item.name}}</span>
                <span>性别：{{item.sex}}</span>
                <div class="btn-div">
                    <button @click="edit(index)">编辑</button>
                    <button @click="del(index)">删除</button>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: "todoList",
    data() {
        return {
            list: [],
            name: "",
            sex: "",
            index: null
        }
    },
    methods: {
        add() {
            if (!this.name || !this.sex) {
                return;
            }
            this.list.push({
                name: this.name,
                sex: this.sex
            });
            this.name = "";
            this.sex = "";
        },
        edit(index) {
            let item = this.list[index];
            this.name = item.name;
            this.sex = item.sex;
            this.index = index;
            console.log(index);
        },
        update() {
            if (!this.name || !this.sex) {
                return;
            }
            this.list[this.index].name = this.name;
            this.list[this.index].sex = this.sex;
            this.sex = "";
            this.name = "";
            this.index = null;
        },
        del(index) {
            this.list.splice(index, 1);
            console.log(index);
        },
        clear() {
            this.list.length = 0;
            // this.list = []
        }
    },
}
</script>
<style lang="scss" scoped>
    .todo-list {
        width: 640px;
        margin: auto;
        .header {
            height: 60px;
            line-height: 60px;
            background-color: #3E3E33;
            color: orange;
            font-size: 48px;
            margin-bottom: 20px;
            border-radius: 5px;
        }

        ul {
            padding: 10px;
            min-height: 400px;
            li {
                list-style: none;
                text-align: left;
                height: 40px;
                margin-bottom: 10px;
                background-color: #9EBABB;
                line-height: 40px;
                border-left: 8px solid #629A9C;
                border-radius: 5px;
                padding: 5px 10px;
                color: #FFF;
                font-weight: bold;
                .btn-div {
                    float: right;
                }
                span {
                    display: inline-block;
                    padding: 0 10px;
                }
            }
        }
    }

    input,
    button {
        margin-right: 10px;
    }
</style>