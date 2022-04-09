<template>
    <view>
        <!-- 话题介绍组件 -->
        <topic-info :item="topicInfo"></topic-info>
        
        <!-- 消息区 -->
        <divider></divider>
        <block v-for="count in 2">
            <view class="top">
                <text class="iconfont icon-xiaoxi1 text-error text-lg font-weight-bolder pl-2 mx-2"></text>
                <text>【新人必读】uni-app实战 社区交友</text>
            </view>
            <divider></divider>
        </block>
        
        <!-- 列表 -->
        <view class="px-2">
            <block v-for="(item, index) in list" :key="index">
                <common-list-item :item="item" :index="index"></common-list-item>
                <divider></divider>
            </block>
        </view>
    </view>
</template>

<script>
    const demo = [{
            nickname: '紫气从东来',
            avatarUrl: '/static/img/me.jpg',
            publishTime: '2022-04-03 19:20:12',
            isFollow: false,
            title: '集腋成裘,聚沙成塔。',
            thumbnail: '/static/img/banner7.jpg',
            support: {
                type: "",
                supportCount: 10,
                unSupportCount: 0
            },
            commentCount: 10,
            shareCount: 12
        },
        {
            nickname: '酱油',
            avatarUrl: '/static/img/avatar7.jpg',
            publishTime: '2022-04-03 20:20:12',
            isFollow: true,
            title: '从那走到台上，短短几步，五年，我走了整整五年。',
            thumbnail: '',
            support: {
                type: "",
                supportCount: 8,
                unSupportCount: 2
            },
            commentCount: 10,
            shareCount: 12
        },
        {
            nickname: 'wota',
            avatarUrl: '/static/img/avatar8.jpg',
            publishTime: '2022-04-03 21:20:12',
            isFollow: false,
            title: 'good good study，day day up',
            thumbnail: '/static/img/banner9.jpg',
            support: {
                type: "support",
                supportCount: 33,
                unSupportCount: 7
            },
            commentCount: 10,
            shareCount: 12
        }
    ]
    import topicInfo from "@/components/common/topic-info.vue";
    import commonListItem from "@/components/common/common-list-item.vue";
    export default {
        components: {
            topicInfo,
            commonListItem
        },
        data() {
            return {
                topicInfo: {
                    id: 0,
                    titlePic: '',
                    title: '',
                    desc: '',
                    totalNum: 0,
                    todyNum: 0
                },
                list: demo
            }
        },
        onLoad(option) {
            console.log(option);
            this.topicInfo = JSON.parse(option.item);
            console.log(this.topicInfo);
        },
        methods: {
            
        }
    }
</script>

<style scoped lang="less">
    @import (reference) '@/common/index.less';
    
    .top {
        .h-10;
        line-height: 100rpx;
        .text-lg;
    }
</style>
