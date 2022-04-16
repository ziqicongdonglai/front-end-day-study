<template>
    <div class="Dynamic-arguments">
        <!-- 模板插值 -->
        <h2>模板插值
        <br>
        <input v-model="msg" type="text">
        <br>
        {{msg}}
        </h2>
        <!-- JS表达式 -->
        <h2>
            JavaScript 表达式
            <br>
            字符串 split 操作：{{msg.split("，")[0]}}
            <br>
            数值计算：{{num + 1}}
            <br>
            数组操作：{{arr[0]}}
        </h2>
        <!-- 动态指令 -->
        <h2>
            v-bind:[varName] 绑定属性
            <br>
            <!-- <a v-bind:href="a">ziqicongdonglai.github.io</a> -->
            <!-- 动态指令 [] -->
            <a v-bind:[urlKey]="a">ziqicongdonglai.github.io</a>
        </h2>
        <h2>
            :[varName] 简写模式
            <br>
            <!-- 简写模式 -->
            <a :[urlKey]="a">ziqicongdonglai.github.io</a>
        </h2>
        <h2>
           v-on:[handleEventName] 绑定事件名变量
           <br>
           <!-- <button v-on:click="increase">{{num}}</button> -->
           
           <button v-on:[clickEventName]="increase">{{num}}</button>
        </h2>
        <h2>
           @[handleEventName] 简写模式
           <br>
           <!-- 简写模式 -->
           <button @[clickEventName]="increase">{{num}}</button>
        </h2>
        <h2>
            v-slot:[slotName] 具名插槽
            <parent>
                <template v-slot:[child]>
                    <child></child>
                </template>
            </parent>
        </h2>
        <h2>
            #[slotName] 简写模式
            <parent>
                <!-- 简写模式 -->
                <template #[child]>
                    <child></child>
                </template>
            </parent>
        </h2>
        <h2>
            动态指令计算
            <br>
            <!-- <a v-bind:[key1 + key2]="a">aaa.com</a> -->
        </h2>
    </div>
</template>
<script>
import {ref} from "vue";
import parent from './bbb';
import child from './aaa';
export default {
    name: "DynamicArguments",
    components: {
        parent,
        child
    },
    setup() {
        let msg = ref("哈哈哈，大笑三声");
        let num = ref(0);
        let arr = ref(['zhangsan', '前端打卡', '打卡的第17天了']);
        let a = 'ziqicongdonglai.github.io';
        let urlKey = ref('href');
        let clickEventName = ref('click');
        let key1 = ref('nam');
        let key2 = ref('e');
        const increase = () => {
            num.value++;
        };
        let child = ref('child');
        return {
            msg,
            num,
            arr,
            a,
            urlKey,
            increase,
            clickEventName,
            child,
            key1,
            key2
        }
    }
}
</script>
<style scoped>
    input {
        width: 300px;
    }
</style>