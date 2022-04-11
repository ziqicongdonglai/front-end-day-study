<template>
    <view class="container">
        <image :src="item.avatar" class="avatar"></image>
        <view class="flex flex-col flex-1">
            <text class="font-md">{{item.nickname}}</text>
            <uni-badge :text="item.age" :type="item.gender === 1 ? 'error' : 'primary'" size="small" class="w-5 h-5" style="color: transparent;line-height: 40rpx;">
                <text v-if="item.age > 0" class="iconfont text-white font-sm mr-1"
                :class="item.gender===1 ? 'icon-nv' : 'icon-nan'"></text>
            </uni-badge>
        </view>
        <view class="uni-icon uni-icon-checkbox-filled" :class="item.isFollow ? 'text-error': 'text-muted'"></view>
    </view>
</template>

<script>
    import uniBadge from '@/components/uni/uni-badge/uni-badge.vue';
    export default {
        components: {
            uniBadge
        },
        props: {
            item: Object,
            index: Number
        }
    }
</script>

<style scoped lang="less">
    @import (reference) '@/common/index.less';
    
    .container {
        .p-2;
        .flex;
        .items-center;
        border-bottom: 2px solid #F1F1F1;
    }
    
    .avatar {
        .w-10;
        .h-10;
        .rounded-full;
        .mr-2;
    }
</style>
