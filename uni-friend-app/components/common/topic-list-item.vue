<template>
    <view class="container" @tap="gotoDetail(item)">
        <view class="pt-1">
            <image :src="item.titlePic" lazy-load class="pic"></image>
        </view>
        <view>
            <view class="title">#{{item.title}}#</view>
            <view class="num">动态 {{item.totalNum}} 今日 {{item.todayNum}}</view>
            <view class="desc">{{item.desc}}</view>
        </view>
    </view>
</template>

<script>
    export default {
        props: {
            item: Object,
            index: Number
        },
        methods: {
            gotoDetail(item) {
                uni.navigateTo({
                    url: `../topic-detail/topic-detail?item=${JSON.stringify(item)}`
                });
            }
        }
    }
</script>

<style scoped lang="less">
    @import (reference) '@/common/index.less';

    .container {
        .flex;
        .mb-2;
        .border;
        .border-base;
        .border-opacity-20;
        .rounded;
    }

    .pic {
        .w-23;
        .h-19;
        .rounded;
        .mr-2;
    }

    .title {
        .text-lg;
        color: #a03e28;
        .mb-1;
    }

    .desc {
        .text-md;
        .text-base-focus;
        .mb-1;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
    }

    .num {
        .text-base;
        .text-sm;
    }
</style>
