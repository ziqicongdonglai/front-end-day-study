<template>
    <view>
        <h2>包装元素：template和block</h2>
        <view>
            <template v-if="test">
                <view>test 为 true 时显示</view>
            </template>
            <template v-else>
                <view>test 为 false 时显示</view>
            </template>
        </view>
        
        <!-- 列表渲染 -->
        <block v-for="(item, index) in list" :key="index">
            <view>{{item}} - {{index}}</view>
        </block>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                list: ['aaa', 'bbb', 'ccc']
            }
        },
        methods: {
            
        }
    }
</script>

<style>

</style>
