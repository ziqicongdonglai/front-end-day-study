<template>
    <view class="">
        <chat-face v-if="isShow" class="fixed" style="bottom: 150rpx;right: 0;"
        @addFace="addFace"></chat-face>
        <view class="flex user-chat-bottom items-center">
            <input type="text" placeholder="文明发言" v-model="text" class="flex-1" 
            @input="handleInput">
            <view class="iconfont icon-icon_xiaolian-mian text-white" style="font-size: 60rpx;"
                :style="!isEmpty ? 'margin-right: 20rpx;' : ''" @tap="iconClickEvent('biaoqing')"></view>
            <view v-if="!isEmpty" class="flex iconfont icon-fabu submit" @tap="submit"></view>
        </view>
    </view>
</template>

<script>
    import chatFace from "@/components/common/chat-face.vue";
    export default {
        components: {
            chatFace
        },
        data() {
            return {
                isEmpty: true,
                isShow: false,
                text: ""
            }
        },
        methods: {
            handleInput(e) {
                if (!this.isEmpty) return;
                if (e.detail.value.trim() != "") {
                    this.isEmpty = !this.isEmpty;
                }
            },
            addFace(item) {
                // console.log(item);
                this.text += item;
                if (!this.isEmpty) return;
                this.isEmpty = !this.isEmpty;
                this.isShow = !this.isShow;
            },
            submit() {
                this.$emit('submit', this.text);
                this.text = "";
                this.isEmpty = !this.isEmpty;
            },
            iconClickEvent(e) {
                switch (e) {
                    case "biaoqing":
                        console.log('点击了表情');
                        this.isShow = !this.isShow;
                        break;
                }
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
            // .w-60;
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
            .justify-center;
            .items-center;
        }
    }
</style>
