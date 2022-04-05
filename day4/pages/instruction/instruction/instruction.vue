<template>
    <view>
        <h2>指令</h2>
        <!-- v-text：在元素当中插入值 -->
        <view v-text='singer'></view>
        <!-- v-for：根据变量的值来循环渲染元素 -->
        <view v-for="(item, index) in list">
            {{item}}--{{index}}
        </view>
        <!-- v-if和v-else：根据表达式的真假值来动态插入和移除元素 -->
        <view v-if="isShow">我会显示</view>
        <view v-else>我不会显示，但是我要跟有 v-if 指令的元素并齐</view>
        <!-- v-model：把input的值和变量绑定了，实现了数据和视图的双向绑定 -->
        <input type="text" v-model="singer">
        <!-- v-bind：绑定元素的属性并执行相应的操作 -->
        <view v-bind:class="{t1: isBig}">isBig 为 true 时，该元素class类名会变为 t1</view>
        <!-- 上面v-bind可以简写 : -->
        <view :class="{t1: isBig}">isBig 为 true 时，该元素class类名会变为 t1</view>
        <!-- v-on：监听元素事件，并执行相应的操作 -->
        <view v-on:click="change">该元素绑定了点击事件</view>
        <!-- 上面 v-on：可以简写 @ -->
        <view @click="change">该元素绑定了点击事件</view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                singer: '周杰伦',
                list: [1, 2, 3, 4],
                isShow: true,
                isBig: true

            }
        },
        methods: {
            change() {
                console.log("该元素绑定了点击事件");
                this.isShow = !this.isShow;
                this.isBig = !this.isBig;
            }
        }
    }
</script>

<style scoped>
    .t1 {
        font-weight: bold;
        font-size: 32px;
    }
</style>
