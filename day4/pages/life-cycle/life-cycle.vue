<template>
    <view class="content">
        <h2>生命周期</h2>
    </view>
</template>

<script>
    export default {
        onLaunch() {
            console.log('onLaunch');
        },
        onLoad() {
            console.log('onLoad');
        },
        onShow() {
            console.log('onShow');
        },
        onHide() {
            console.log('onHide');
        },
        onError() {
            console.log('onError');
        },
        onReady() {
             console.log('onReady');
        },
        onUnload() {
            console.log('onUnload');
        },
        onResize() {
            console.log('onResize');
        },
        onPullDownRefresh() {
            console.log('onPullDownRefresh');
        },
        onReachBottom() {
            console.log('onReachBottom');
        },
        onShareAppMessage() {
            console.log('onShareAppMessage');
        },
        onPageScroll() {
            console.log('onPageScroll');
        },
        onBackPress() {
            console.log('onBackPress');
        },
        data() {
            return {
                
            }
        },
        methods: {
            
        }
    }
</script>

<style>
    .content {
        height: 100vh;
    }
</style>
