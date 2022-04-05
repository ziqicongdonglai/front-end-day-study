<template>
    <view class="content">
        <image class="logo" src="/static/logo.png"></image>
        <button @tap="getMsg">{{title}}</button>
    </view>
</template>

<script>
    export default {
        // props 是从父级（引用当前组件）的变量占位，在当前组件下给这些变量一个初始化值（initValue）
        props: {
            title: {
                type: String,
                default: ''
            },
            list: {
                type: Array,
                default () { // 这里返回值需要是一个函数
                    return []
                }
            }
        },
        data() {
            return {
                title: 'Hello'
            }
        },
        created() {

        },
        methods: {
            getMsg() {
                console.log('I am a demo')
                this.$emit('getMsg', this)
            }
        }
    }
</script>

<style lang="scss">
    
</style>
