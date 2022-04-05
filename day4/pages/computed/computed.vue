<template>
    <view>
        <h2>计算属性</h2>
        <view>喜欢的歌手是：{{singer}}</view>
        <view>喜欢的歌手是：{{computedSinger}}</view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                singer: '周杰伦'
            }
        },
        computed: {
            // 对singer二次加工处理
            computedSinger: function () {
                // this 指向 Vue 实例
                return this.singer.split('').reverse().join('');
            }
        },
        methods: {
            
        }
    }
</script>

<style>

</style>
