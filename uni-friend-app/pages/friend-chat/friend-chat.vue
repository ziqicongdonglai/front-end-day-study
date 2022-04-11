<template>
    <view>
        
        <!-- 输入框 -->
        <friend-chat-bottom></friend-chat-bottom>
    </view>
</template>

<script>
    import friendChatBottom from "@/components/common/friend-chat-bottom.vue";
    export default {
        components: {
            friendChatBottom
        },
        data() {
            return {
                
            }
        },
        methods: {
            // 发送逻辑
            submit(data) {
                console.log("当前输入的是：" + data);
            }
        }
    }
</script>

<style>

</style>
