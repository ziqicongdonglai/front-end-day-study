<template>
    <view class="chat-face">
        <view v-for="(item, index) in list" :key="index" class="face-item" @tap=addFace(item)>
            {{item}}
        </view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                list: ["🌸", "😴", "😄"]
            }
        },
        methods: {
            addFace(item) {
                this.$emit("addFace", item);
            }
        }
    }
</script>

<style lang="less" scoped>
    @import (reference) '@/common/index.less';

    .chat-face {
        width: 200rpx;
        // height: 100rpx;
        .px-2;
        .py-1;
        .justify-center;
        .shadow-md;
        .flex;

        .face-item {
            margin-right: 10rpx;
            font-size: 50rpx;
        }
    }
</style>
