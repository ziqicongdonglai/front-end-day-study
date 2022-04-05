<template>
    <view>
        <!-- 登录状态：{{$store.state.isLogin}} -->
        
      <!--  登录状态：{{isLogin}}
        登录状态：{{hasLogin}} -->
        
        <view>
            登录状态：{{isLogin}}
        </view>
        <button @click="login(true)">登录</button>
        <button @click="login(false)">退出</button>
    </view>
</template>

<script>
    import {mapState} from 'vuex';
    export default {
        data() {
            return {
                
            }
        },
        // 利用计算参数 简洁写法
        // computed: mapState({
        //     // 箭头函数可使代码更简练
        //     isLogin: state => state.isLogin,
        //     // 传字符串参数 'isLogin' 等同于 `state => state.isLogin`
        //     hasLogin: 'isLogin'
        // }),
        // 更简洁的写法
        computed: {
           ...mapState(['isLogin'])
        },
        methods: {
            // // 登录
            // login() {
            //     this.$store.commit('storeLogin', true);
            // },
            // // 退出
            // logout() {
            //     this.$store.commit('storeLogin', false)
            // }
            
            // 改变登录状态
            login(bool) {
                this.$store.commit('storeLogin', bool);
            }
        }
    }
</script>

<style>

</style>
