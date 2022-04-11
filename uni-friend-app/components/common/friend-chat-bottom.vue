<template>
    <view class="flex user-chat-bottom">
        <input type="text" placeholder="文明发言" v-model="text">
        <view class="flex iconfont icon-fabu submit" @tap="submit"></view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                text: ""
            }
        },
        methods: {
            submit() {
                this.$emit('submit', this.text);
                this.text = "";
            }
        }
    }
</script>

<style lang="less" scoped>
    @import (reference) '@/common/index.less';
    
    .user-chat-bottom {
        .fixed;
        .bottom-0;
        .left-0;
        .right-0;
        .px-3;
        .py-2;
        .bg-base;
        
        input {
            .w-60;
            .mr-2;
            .py-2;
            .pl-2;
            .rounded;
            background: #F7F7F7;
        }
        
        .submit {
            .w-15;
            .h-8;
            .text-2xl;
            .bg-error;
            .text-white;
            .rounded;
        }
    }
</style>
