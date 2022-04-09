<template>
    <view class="p-2">
        <view class="between mb-1">
            <view class="text-lg">热门分类</view>
            <view class="center">
                <view>更多</view>
                <view class="iconfont icon-jinru"></view>
            </view>
        </view>
        <view class="left">
            <block v-for="(item, index) in nav" :key="index">
                <view class="label">{{item.name}}</view>
            </block>
        </view>
    </view>
</template>

<script>
    export default {
        props: {
            nav: Array
        }
    }
</script>
<style scoped lang="less">
    @import (reference) '@/common/index.less';
    
    .label {
        .center;
        .px-2;
        .mr-1;
        .rounded;
        .bg-error;
        .text-white;
    }
    
    .center {
        .flex;
        .justify-center;
        .items-center;
    }
    
    .left {
        .flex;
        .items-center;
    }
    
    .right {
        .flex;
        .justify-end;
        .items-center;
    }
    
    .between {
        .flex;
        .justify-between;
        .items-center;
    }
</style>
