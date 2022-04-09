<template>
    <view>
        <uni-nav-bar statusBar backgroundColor="#EF4444" color="#FFFFFF" title="动态"></uni-nav-bar>

        <scroll-view scroll-y class="mt-1">
            <!-- 轮播图 -->
            <swiper class="px-2" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
                <block v-for="(item, index) in topic.swiper" :key="index">
                    <swiper-item>
                        <image :src="item.src" class="w-full rounded" mode="aspectFill" lazy-load></image>
                    </swiper-item>
                </block>
            </swiper>

            <!-- 热门分类 -->
            <hot-topic :nav="topic.nav"></hot-topic>

            <!-- 最近更新 -->
            <view class="px-2">
                <view class="text-lg mb-1">最近更新</view>
                <block v-for="(item, index) in topic.list" :key="index">
                    <topic-list-item :item="item" :index="index"></topic-list-item>
                </block>
            </view>
        </scroll-view>
    </view>
</template>

<script>
    import uniNavBar from "@/components/uni/uni-nav-bar/uni-nav-bar.vue";
    import hotTopic from "@/components/common/hot-topic.vue";
    import topicListItem from "@/components/common/topic-list-item.vue";
    export default {
        components: {
            uniNavBar,
            hotTopic,
            topicListItem
        },
        data() {
            return {
                swiperheight: 600,
                topic: {
                    swiper: [{
                        src: "/static/img/banner.jpg"
                    }, {
                        src: "/static/img/banner7.jpg"
                    }, {
                        src: "/static/img/banner8.jpg"
                    }],
                    nav: [{
                        name: "最新"
                    },{
                        name: "游戏"
                    },{
                        name: "打卡"
                    },{
                        name: "情感"
                    },{
                        name: "故事"
                    },{
                        name: "喜爱"
                    }],
                    list: [{
                        titlePic: "/static/img/topic/1.jpg",
                        title: "Vue3学习",
                        desc: "Vue3采用Composition Api",
                        totalNum: 50,
                        todayNum: 10
                    },{
                        titlePic: "/static/img/topic/2.jpg",
                        title: "SpringBoot",
                        desc: "Spring Boot是由Pivotal团队提供的全新框架，其设计目的是用来简化新Spring应用的初始搭建以及开发过程",
                        totalNum: 50,
                        todayNum: 10
                    },{
                        titlePic: "/static/img/topic/3.jpg",
                        title: "开到荼蘼",
                        desc: "彼岸花开，开到荼蘼",
                        totalNum: 50,
                        todayNum: 10
                    },{
                        titlePic: "/static/img/topic/4.jpg",
                        title: "最佳拍档",
                        desc: "找朋友组队，参加最佳拍档吧",
                        totalNum: 50,
                        todayNum: 10
                    },{
                        titlePic: "/static/img/topic/5.jpg",
                        title: "校园生活",
                        desc: "分享你的校园生活",
                        totalNum: 50,
                        todayNum: 10
                    },{
                        titlePic: "/static/img/topic/6.jpg",
                        title: "48狼人杀",
                        desc: "看河内小偶像线下狼人杀",
                        totalNum: 50,
                        todayNum: 10
                    }]
                }
            }
        },
        methods: {
            // gotoDetail(index) {
            //     uni.navigateTo({
            //         url: '../topic-detail/topic-detail'
            //     });
            // }
        }
    }
</script>

<style scoped>
    .topic-swiper {
        padding: 0 20rpx 20rpx 20rpx;
    }

    .topic-swiper image {
        width: 100%;
        border-radius: 10rpx;
    }

    .topic-new {
        padding: 20rpx;
    }

    .topic-new>view:first-child {
        padding-bottom: 5rpx;
        font-size: 32rpx;
    }
</style>
