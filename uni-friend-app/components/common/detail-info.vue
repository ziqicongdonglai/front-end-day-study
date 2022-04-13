<template>
    <view class="p-2 animated fadeInLeft fast">
        <view class="flex mb-2">
            <!-- 头像 -->
            <image :src="item.avatarUrl" mode="widthFix" lazy-load class="w-9 h-9 rounded-full mr-2"></image>
            <view class="flex-1 flex flex-col">
                <text class="text-lg">{{item.nickname}}</text>
                <view class="text-muted">{{item.publishTime}}</view>
            </view>

            <!-- 没关注就显示关注按钮，已关注则不显示 -->
            <view v-if="!item.isFollow" @tap="follow(item)"
                class="icon iconfont icon-zengjia bg-error text-white rounded w-10 h-6 px-1">关注</view>
            <view v-else class="icon iconfont border border-error text-error rounded w-10 h-6 px-1">已关注</view>
        </view>

        <!-- 标题和缩略图部分 -->
        <view class="relative">
            <!-- 有缩略图就显示缩略图，没有就用默认图 -->
            <image :src="item.thumbnail" class="w-71 h-40 rounded" v-if="item.thumbnail !== ''"></image>
            <image src="/static/img/banner1.jpg" class="w-71 h-40 rounded" v-else></image>
            <!-- 文章标题 -->
            <view class="text-xl mb-2 absolute text-white" style="bottom: 40rpx;left: 20rpx;">{{item.title}}</view>
            <!-- 遮罩层 -->
            <view class="mask rounded"></view>
        </view>

        <!-- 文章内容，富文本 -->
        <view class="flex flex-col mb-2">
            <view class="text-md" v-html="item.content"></view>
        </view>

        <!-- 更多图片 -->
        <block v-for="(pic, index) in item.morePics" :key="index">
            <image :src="pic" lazy-load @tap="previewImg(index)" class="w-22 h-22 mr-1 rounded"></image>
        </block>

        <!-- 底部信息区 -->
        <view class="flex items-center">
            <view class="text-md">
                <text class="iconfont icon-dizhi"></text>
                {{item.address}}
            </view>
            <view class="flex mx-2 text-muted">
                <view class="icon iconfont icon-zhuanfa">
                    {{item.shareCount}}
                </view>
                <view class="icon iconfont icon-pinglun1 mx-2">
                    {{item.commentCount}}
                </view>
                <view class="icon iconfont icon-dianzan1">
                    {{item.likeCount}}
                </view>
            </view>
        </view>
    </view>
</template>

<script>
    // import tagGenderAge from "@"
    import uniBadge from "@/components/uni/uni-badge/uni-badge.vue";
    export default {
        components: {
            // tagGenderAge,
            uniBadge
        },
        props: {
            item: Object
        },
        data() {
            return {}
        },
        methods: {
            follow(item) {
                item.isFollow = true;
                uni.showToast({
                    title: '关注成功'
                });
            },
            previewImg(index) {
                uni.previewImage({
                    current: index,
                    urls: this.item.morePics
                })
            }
        }
    }
</script>

<style scoped>
    .mask {
        position: absolute;
        top: 0;
        bottom: 20rpx;
        left: 0;
        right: 0;
        background-color: #000;
        opacity: 0.5;
    }
</style>
