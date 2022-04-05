<template>
    <view class="content">
        <!-- 清晰的模板和语义化 -->
        <view class="card">
            <h2 class="text-base">卡片文字</h2>
        </view>

        <view class="size-n btn animated" hover-class="fadeIn">
            我是普通的按钮
        </view>

        <view class="size-n btn-hl animated" hover-class="rotateIn">
            我是高亮的按钮
        </view>
        <view class="size-n btn-bd animated" hover-class="lightSpeedIn">
            我是带边框的按钮
        </view>

        <view class="iconfont icon-icon-test77 icon-wrapper animated" hover-class="rubberBand">
            {{title}}
        </view>
        <view class="container flex justify-evenly">
            <view v-for="i in list" :key="i" class="block-1 animated" hover-class="flipInX" />
        </view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                title: 'Hello',
                list: [,,,,]
            }
        },
        onLoad() {

        },
        methods: {

        }
    }
</script>

<style scoped lang="less">
    /** 在style标签下重新引入基础less样式库 **/
    /**让 less 编译成 css 时按需生成混入的代码，减小项目体积**/
    @import (reference) '@/common/index.less';

    /** mixin样式库，使得设计更统一 **/
    .content {
        .p-2;
        .text-center;
    }

    .card {
        .p-5;
        .bg-info;
        .bg-opacity-50;
        .my-5;
        .rounded-2xl;
        .shadow-lg;
        .font-light;
    }

    .size-n {
        .px-5;
        .py-3;
        .mb-5;
    }

    .btn {
        .rounded-full;
        .text-white;
        .bg-warning;
        .font-bold;
        .text-2xl;
    }

    /**高亮的按钮**/
    .btn-hl {
        .rounded-full;
        .text-white;
        .bg-error;
        .bg-opacity-10;
        .font-bold;
        .text-error;
    }

    /**边框按钮**/
    .btn-bd {
        .bg-transparent;
        .border;
        .rounded;
        .border-base;
        .text-base;
    }

    .icon-wrapper {
        .text-3xl;
        .text-success;
        .mx-2;
    }

    /** 块 **/
    .block-1 {
        .w-9;
        .h-6;
        .mr-3;
        .my-1;
        .rounded;
        .bg-primary;
        .bg-opacity-80;
    }

    /** 容器**/
    .container {
        .px-3;
        .py-2;
        .mt-4;
        .bg-primary;
        .rounded-lg;
        .bg-opacity-10;
    }
</style>
