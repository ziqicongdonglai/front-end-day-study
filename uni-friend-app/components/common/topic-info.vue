<template>
    <view>
        <!-- 模糊背景 -->
        <view class="topic-bg">
            <image :src="item.titlePic" mode="aspectFill" lazy-load></image>
        </view>
        <!-- 话题信息 -->
        <view class="px-2">
            <view class="topic-info-t">
                <image :src="item.titlePic" mode="widthFix" lazy-load></image>
                <view class="text-base">#{{item.title}}#</view>
            </view>
            <view class="topic-info-c">
                <view class="mr-2">动态 {{item.totalNum}}</view>
                <view>今日 {{item.todayNum}}</view>
            </view>
            <view class="topic-info-b">{{item.desc}}</view>
        </view>
    </view>
</template>

<script>
    export default {
        props: {
            item: Object
        }
    }
</script>

<style scoped lang="less">
    @import (reference) '@/common/index.less';
    
    .topic-bg {
        .w-full;
        .h-30;
        .relative;
        overflow: hidden;
        
        image {
            .w-full;
            .absolute;
            filter: blur(10px);
        }
    }
    
    .topic-info-t {
        .relative;
        
        image {
            .w-15;
            .h-15;
            .absolute;
            top: -75rpx;
            .rounded-lg;
        }
        
        view {
            .text-xl;
            .ml-17;
        }
    }
    
    .topic-info-c {
        .flex;
        .py-2;
        .text-base;
    }
    
    .topic-info-b {
        .text-base;
        .text-lg;
        .pb-1;
    }
</style>
