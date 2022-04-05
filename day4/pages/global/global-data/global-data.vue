<template>
    <view>
        <h2>globalData</h2>
        <button @click="getGlobalData()">获取globalData</button>
        <button @click="setGlobalData()">设置globalData</button>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
        onShow() {
          this.getGlobalData();
        },
        methods: {
            setGlobalData() {
                getApp().globalData.websiteUrl = 'http://localhost:5000';
            },
            getGlobalData() {
                console.log(getApp().getGlobalData.websiteUrl);
            }
        }
    }
</script>

<style>

</style>
