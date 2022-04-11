<template>
    <view class="container">
        <image :src="item.avatarUrl" lazy-load></image>
        
        <view class="flex flex-col flex-1">
            <view class="text-xl text-neutral mb-1">
                {{item.nickname}}
            </view>
            <view class="text-muted text-md">
                {{item.content}}
            </view>
        </view>
        
        <view class="flex flex-col w-6 items-flex-end">
            <view class="text-muted text-lg mb-1">{{item.time}}</view>
            <template v-if="item.noReadNum > 0">
                <uni-badge :text="item.noReadNum" type="error" class="no-read-num"></uni-badge>
            </template>
        </view>
    </view>
</template>

<script>
    import uniBadge from "@/components/uni/uni-badge/uni-badge.vue";
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
        .flex;
        .h-14;
        .p-2;
        .mb-1;
        border-bottom: 2px solid #F1F1F1;
        
        image {
            .w-13;
            .h-13;
            .rounded-full;
            .mr-2;
        }
    }
    
    .no-read-num {
        .w-5;
        .h-5;
        .flex;
        .items-center;
        .justify-center;
        .rounded-full;
        .text-md;
        background-color: #FE683F;
    }
</style>
