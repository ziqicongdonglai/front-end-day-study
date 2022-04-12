<template>
    <view class="flex mb-3 items-center" :class="{'chat-me': item.isMe}">
        <image v-if="!item.isMe" :src="item.avatar" mode="widthFix" lazy-load class="avatar"></image>
        <view class="chat-list-body">
            <!-- 文字 -->
            <text v-if="item.type === 'text'">{{item.content}}</text>
            <image v-if="item.type === 'img'" :src="item.content" mode="widthFix" lazy-load></image>
        </view>
        <image v-if="item.isMe" :src="item.avatar" mode="widthFix" lazy-load class="avatar"></image>
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

<style scoped lang="less">
    @import (reference) '@/common/index.less';
    
    .avatar {
        .w-10;
        .h-10;
        .rounded-full;
    }
    
    .chat-list-body {
        .relative;
        background: #F4F4F4;
        .mx-2;
        .p-2;
        .rounded-lg;
        
        &::after {
            .absolute;
            .left-0;
            .right-0;
            left: -30rpx;
            top: 30rpx;
            content: '';
            width: 0;
            height: 0;
            border: 16rpx solid #F4F4F4;
            border-color: transparent #F4F4F4 transparent transparent;
        }
        
        image {
            .w-30;
            .h-20;
            .rounded;
        }
    }
    
    .chat-me {
        .ml-10;
        .mr-2;
        justify-content: flex-end;
    }
    
    .chat-me .chat-list-body::after {
        left: auto;
        right: -30rpx;
        border-color: transparent transparent transparent #F4F4F4;
    }
</style>

<style>
</style>
