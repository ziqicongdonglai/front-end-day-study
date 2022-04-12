<template>
    <view class="px-2">
        <template v-if="list.length > 0">
            <!-- 消息列表 -->
            <block v-for="(item, index) in list" :key="index">
                <view @tap="goFrindChat">
                    <msg-list-item :item="item" :index="index"></msg-list-item>
                </view>
            </block>
        </template>

        <template v-else>
            <nothing></nothing>
        </template>

        <!-- 弹出层 -->
        <uni-popup ref="popup" type="top">
            <view class="menu-item" @tap="popupEvent('friend')">
                <text class="iconfont icon-sousuo mr-2"></text>
                <text>添加好友</text>
            </view>
            <view class="menu-item" @tap="popupEvent('clear')">
                <text class="iconfont icon-shanchu mr-2"></text>
                <text>清除列表</text>
            </view>
        </uni-popup>
    </view>
</template>

<script>
    const demo = [{
        avatarUrl: '/static/img/avatar0.jpg',
        nickname: '许老师',
        time: '15:20',
        content: '已经好啦',
        noReadNum: 1
    }, {
        avatarUrl: '/static/img/me.jpg',
        nickname: '小号',
        time: '12:30',
        content: '[文件]',
        noReadNum: 90
    }, {
        avatarUrl: '/static/img/avatar7.jpg',
        nickname: '酱油',
        time: '08:06',
        content: '寄蜉蝣于天地，渺沧海之一粟',
        noReadNum: 2
    }, {
        avatarUrl: '/static/img/avatar8.jpg',
        nickname: '可乐',
        time: '10:44',
        content: '今晚四三？👀',
        noReadNum: 10
    }]
    // 自定义消息列表item组件
    import msgListItem from "@/components/common/msg-list-item.vue";
    // 弹出层组件
    import uniPopup from "@/components/uni/uni-popup/uni-popup.vue";
    export default {
        components: {
            msgListItem,
            uniPopup
        },
        data() {
            return {
                list: []
            }
        },
        // 监听下拉刷新
        onPullDownRefresh() {
            this.getData();
        },
        onNavigationBarButtonTap(e) {
            switch (e.index) {
                case 0:
                    uni.navigateTo({
                        url: '../friend-list/friend-list'
                    })
                    break;
                case 1:
                    // 打开弹出层
                    this.$refs.popup.open();
                    break;
            }
        },
        methods: {
            // 获取数据
            getData() {
                setTimeout(() => {
                    // 赋值
                    this.list = demo;
                    // 关闭下拉刷新
                    uni.stopPullDownRefresh();
                }, 1000);
            },
            goFrindChat() {
                console.log("点击")
                uni.navigateTo({
                    url: '../friend-chat/friend-chat'
                })
            },
            // 弹出层选型点击事件
            popupEvent(e) {
                switch (e) {
                    case 'friend':
                        console.log('添加好友');
                        uni.navigateTo({
                            url: '../friend-list/friend-list'
                        })
                        break;
                    case 'clear':
                        console.log('清除列表');
                        break;
                }
                // 关闭弹出层
                this.$refs.popup.close();
            }
        }
    }
</script>

<style lang="less" scoped>
    @import (reference) '@/common/index.less';

    .msg-list {
        .py-2;
        .flex;

        image {
            .w-10;
            .h-10;
            .rounded-full;
            .mr-2;
            flex-shrink: 0;
        }

        view {
            flex: 1;
        }
    }

    .menu-item {
        .flex;
        .items-center;
        .justify-center;
        .h-10;
        .text-lg;
        .px-2;
        border-bottom: 1px solid #CCCCCC;
    }
</style>
