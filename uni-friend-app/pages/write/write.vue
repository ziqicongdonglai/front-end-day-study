<template>
    <view>
        <!-- 自定义导航 -->
        <uni-nav-bar leftIcon="back" leftText="返回" rightIcon="location" rightText="分享"
        statusBar="true" backgroundColor="#EF4444" color="#FFFFFF"
        @click-left="back">
            <view class="flex align-center justify-center w-full">
                <text>所有人可见</text>
                <text class="iconfont icon-shezhi ml-2"></text>
            </view>
        </uni-nav-bar>
        
        <!-- 文本域 -->
        <textarea v-model="content" placeholder="说一句话吧" class="input-area" />
        
        <!-- 多图上传 -->
        <upload-image @change="changeImage"></upload-image>
        
        <!-- 底部操作条 -->
        <view class="fixed-bottom bg-white" style="height: 85rpx;">
            <view class="iconfont icon-caidan animated" hover-class="jello"></view>
            <view class="iconfont icon-huati animated" hover-class="jello"></view>
            <view class="iconfont icon-tupian animated" hover-class="jello"></view>
            <view class="send animated" hover-class="bounceIn">发送</view>
        </view>
    </view>
</template>

<script>
    import uniNavBar from '@/components/uni/uni-nav-bar/uni-nav-bar.vue'
    import uploadImage from '@/components/common/upload-image.vue'
    export default {
        components: {
            uniNavBar,
            uploadImage
        },
        data() {
            return {
                content: '',
                imageList: [] // 要上传到服务器的图片数组
            }
        },
        methods: {
            // 选中图片
            changeImage(e) {
                console.log(e);
                this.imageList = e;
            },
            back() {
                uni.navigateBack({
                    delta: 1
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    @import (reference) '@/common/index.less';
    
    .input-area {
        .w-68;
        margin: auto;
        .h-30;
        background-color: #f6f6f6;
        .p-2;
        .mt-2;
        .text-md;
    }
    
    .fixed-bottom {
        .flex;
        .items-center;
        .fixed;
        .bottom-0;
        .left-0;
        .right-0;
        .px-2;
        
        .iconfont {
            font-size: 50rpx;
            margin-right: 30rpx;
        }
        
        .send {
            .bg-error;
            .text-white;
            .text-lg;
            .px-4;
            .rounded;
            .flex;
            .items-center;
            .justify-center;
            margin-left: auto;
            width: 120rpx;
            height: 80rpx;
        }
    }
</style>
