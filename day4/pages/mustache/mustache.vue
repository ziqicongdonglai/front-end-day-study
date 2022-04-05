<template>
    <view>
        <h2>模板语法和事件</h2>
        <view :title="singer">喜欢的歌手是：{{singer}}</view>
        <button @click="changeName">更换名字</button>
        <!-- 表达式 -->
        <view>{{number + 1}}</view>
        <view>{{ok ? 'YES' : 'NO'}}</view>
        <view>{{message.split('').reverse().join('')}}</view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                singer: '周杰伦',
                number: 9,
                ok: false,
                message: '模板语法和事件'
            }
        },
        methods: {
            changeName() {
                this.singer = '张学友';
            }
        }
    }
</script>

<style>

</style>
