<template>
    <view class="content">
        <h2>双向绑定</h2>
        <input type="text" v-model="newName" />
        <button @click="addName">添加</button>
        <view>你要添加的名字：{{newName}}</view>
        <view class="list-area">
            名称列表：
            <view v-for="item in list">
                {{item.name}}
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                newName: '',
                list: [
                    {
                        name: '周杰伦'
                    }
                ]
            }
        },
        methods: {
            addName() {
                var name = this.newName.trim();
                if (name) {
                    this.list.push({
                        name: name
                    })
                    this.newName = '';
                }
            }
        }
    }
</script>

<style>
    
</style>
