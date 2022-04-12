<template>
    <view>
        <!-- 聊天列表 -->
        <view class="p-2">
            <block v-for="(item, index) in list" :key="index">
                <chat-list-item :item="item" :index="index"></chat-list-item>
            </block>
        </view>
        <!-- 输入框 -->
        <friend-chat-bottom @submit="submit"></friend-chat-bottom>
    </view>
</template>

<script>
    const arr = [{
        isMe: true,
        avatar: "/static/img/me.jpg",
        type: "text",
        content: "老师这里有问题"
    },{
        isMe: true,
        avatar: "/static/img/me.jpg",
        type: "img",
        content: "/static/img/顶部导航吸顶.png"
    },{
        isMe: false,
        avatar: "/static/img/avatar0.jpg",
        type: "text",
        content: "我看看"
    },{
        isMe: true,
        avatar: "/static/img/me.jpg",
        type: "text",
        content: "嗯嗯"
    },{
        isMe: false,
        avatar: "/static/img/avatar0.jpg",
        type: "text",
        content: "已经好啦"
    }];
    import friendChatBottom from "@/components/common/friend-chat-bottom.vue";
    import chatListItem from "@/components/common/chat-list-item.vue";
    import time from "@/common/time.js";
    export default {
        components: {
            friendChatBottom,
            chatListItem
        },
        data() {
            return {
                list: []
            }
        },
        onLoad() {
            this.getData();
        },
        methods: {
            getData() {
                // 模拟从服务器获取到的数据
                this.list = arr;
            },
            submit(data) {
                // 构建数据
                let obj = {
                    isMe: true,
                    avatar: "/static/img/me.jpg",
                    type: "text",
                    content: data
                };
                this.list.push(obj);
            }
        }
    }
</script>

<style scoped lang="less">
    @import (reference) '@/common/index.less';
</style>
