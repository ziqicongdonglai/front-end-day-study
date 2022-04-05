<template>
    <view>
        <h2>路由与页面跳转</h2>
        <button @click="goList()">跳转到list页面</button>
        
        <!-- d或者使用标签形式跳转 -->
        <navigator url="/pages/list/list?id=1&name=uniapp" open-type="navigate">去列表</navigator>
    </view>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        methods: {
            goList() {
                // 在起始页面跳转到list.vue页面并传递参数
                uni.navigateTo({
                    url: '/pages/list/list?id=1&name=uniapp'
                });
            }
        }
    }
</script>

<style>

</style>
