<template>
    <view class="uni-comment-list" :class="{'u-comment-list-child':(item.fid>0)}">
        <view class="uni-comment-face">
            <image :src="item.avatarUrl" mode="widthFix"></image>
        </view>
        <view class="uni-comment-body">
            <view class="text-lg text-error font-weight-bold"><text>{{item.nickname}}</text></view>
            <view class="text-md">{{item.content}}</view>
            <view class="text-sm text-muted">
                <view>{{item.time}}</view>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        props: {
            item: Object,
            index: Number
        }
    }
</script>

<style scoped>
    .u-comment-list-child {
        padding: 20rpx;
        background: #F4F4F4;
        border-bottom: 1rpx solid #EEEEEE;
        box-sizing: border-box;
        margin: 0;
        margin-left: 70rpx;
        width: auto;
    }
</style>
