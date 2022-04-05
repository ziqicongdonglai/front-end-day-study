<template>
    <view>
        <h1>对index.less内容进行练习</h1>
        <h2>颜色</h2>
        <h3>背景色</h3>
        <template>
            <view class="text-white">
                <text class="bg-primary">主要</text>
                <text class="bg-secondary">次要</text>
                <text class="bg-accent">强调</text>
                <text class="bg-neutral">中和</text>
                <text class="bg-base">基础</text>
                <text class="bg-info">信息</text>
                <text class="bg-success">成功</text>
                <text class="bg-warning">警告</text>
                <text class="bg-error">错误</text>
            </view>
        </template>
        <h3>文字色</h3>
        <template>
            <view>
                <text class="text-primary">主要</text>
                <text class="text-secondary">次要</text>
                <text class="text-accent">强调</text>
                <text class="text-neutral">中和</text>
                <text class="text-base">基础</text>
                <text class="text-info">信息</text>
                <text class="text-success">成功</text>
                <text class="text-warning">警告</text>
                <text class="text-error">错误</text>
            </view>
        </template>
        <h3>边框色</h3>
        <template>
            <view>
                <text class="border border-primary">主要</text>
                <text class="border border-secondary">次要</text>
                <text class="border border-accent">强调</text>
                <text class="border border-neutral">中和</text>
                <text class="border border-base">基础</text>
                <text class="border border-info">信息</text>
                <text class="border border-success">成功</text>
                <text class="border border-warning">警告</text>
                <text class="border border-error">错误</text>
            </view>
        </template>
        <h3>颜色不透明度</h3>
        <h4>背景色不透明度</h4>
        <template>
            <view>
                <text class="bg-primary bg-opacity-0">0%</text>
                <text class="bg-primary bg-opacity-10">10%</text>
                <text class="bg-primary bg-opacity-20">20%</text>
                <text class="bg-primary bg-opacity-30">30%</text>
                <text class="bg-primary bg-opacity-40">40%</text>
                <text class="bg-primary bg-opacity-50">50%</text>
                <text class="bg-primary bg-opacity-60">60%</text>
                <text class="bg-primary bg-opacity-70">70%</text>
                <text class="bg-primary bg-opacity-80">80%</text>
                <text class="bg-primary bg-opacity-90">90%</text>
                <text class="bg-primary bg-opacity-100">100%</text>
            </view>
        </template>
        <h4>文字色不透明度</h4>
        <template>
            <view>
                <text class="text-primary text-opacity-0">0%</text>
                <text class="text-primary text-opacity-10">10%</text>
                <text class="text-primary text-opacity-20">20%</text>
                <text class="text-primary text-opacity-30">30%</text>
                <text class="text-primary text-opacity-40">40%</text>
                <text class="text-primary text-opacity-50">50%</text>
                <text class="text-primary text-opacity-60">60%</text>
                <text class="text-primary text-opacity-70">70%</text>
                <text class="text-primary text-opacity-80">80%</text>
                <text class="text-primary text-opacity-90">90%</text>
                <text class="text-primary text-opacity-100">100%</text>
            </view>
        </template>
        <h4>边框不透明度</h4>
        <template>
            <view>
                <text class="border border-primary border-opacity-0">0%</text>
                <text class="border border-primary border-opacity-10">10%</text>
                <text class="border border-primary border-opacity-20">20%</text>
                <text class="border border-primary border-opacity-30">30%</text>
                <text class="border border-primary border-opacity-40">40%</text>
                <text class="border border-primary border-opacity-50">50%</text>
                <text class="border border-primary border-opacity-60">60%</text>
                <text class="border border-primary border-opacity-70">70%</text>
                <text class="border border-primary border-opacity-80">80%</text>
                <text class="border border-primary border-opacity-90">90%</text>
                <text class="border border-primary border-opacity-100">100%</text>
            </view>
        </template>
        <h3>最佳实践</h3>
        <h4>原色-深背景色，白色文字</h4>
        <template>
            <view>
                <text class="bg-primary text-white">主要</text>
                <text class="bg-secondary text-white">次要</text>
                <text class="bg-accent text-white">强调</text>
                <text class="bg-neutral text-white">中和</text>
                <text class="bg-base text-white">基础</text>
                <text class="bg-info text-white">信息</text>
                <text class="bg-success text-white">成功</text>
                <text class="bg-warning text-white">警告</text>
                <text class="bg-error text-white">错误</text>
            </view>
        </template>
        <h4>高亮-深色文字，浅背景色 (10%的不透明度)</h4>
        <template>
            <view>
                <text class="bg-primary bg-opacity-10 text-primary">主要</text>
                <text class="bg-secondary bg-opacity-10 text-secondary">次要</text>
                <text class="bg-accent bg-opacity-10 text-accent">强调</text>
                <text class="bg-neutral bg-opacity-10 text-neutral">中和</text>
                <text class="bg-base bg-opacity-10 text-base">基础</text>
                <text class="bg-info bg-opacity-10 text-info">信息</text>
                <text class="bg-success bg-opacity-10 text-success">成功</text>
                <text class="bg-warning bg-opacity-10 text-warning">警告</text>
                <text class="bg-error bg-opacity-10 text-error">错误</text>
            </view>
        </template>
        <h4>轮廓-深色边框和深色文字，透明背景</h4>
        <template>
            <view>
                <text class="bg-transparent border border-primary text-primary">主要</text>
                <text class="bg-transparent border border-secondary text-secondary">次要</text>
                <text class="bg-transparent border border-accent text-accent">强调</text>
                <text class="bg-transparent border border-neutral text-neutral">中和</text>
                <text class="bg-transparent border border-base text-base">基础</text>
                <text class="bg-transparent border border-info text-base">信息</text>
                <text class="bg-transparent border border-success text-success">成功</text>
                <text class="bg-transparent border border-warning text-warning">警告</text>
                <text class="bg-transparent border border-error text-error">错误</text>
            </view>
        </template>
        <h2>圆角</h2>
        <template>
            <view>
                <text class="border rounded-full">圆</text>
                <text class="border rounded-3xl">无敌大</text>
                <text class="border rounded-2xl">超级大</text>
                <text class="border rounded-xl">超大</text>
                <text class="border rounded-lg">大</text>
                <text class="border rounded-md">中</text>
                <text class="border rounded">基础</text>
                <text class="border rounded-sm">小</text>
                <text class="border rounded-none">无</text>
            </view>
        </template>
        <h2>阴影</h2>
        <template>
            <view>
                <text class="shadow-xl">超大</text>
                <text class="shadow-lg">大</text>
                <text class="shadow-md">中</text>
                <text class="shadow">基础</text>
                <text class="shadow-sm">小</text>
                <text class="shadow-none">无</text>
            </view>
        </template>
        <h2>尺寸</h2>
        <h3>范围</h3>
        <template>
            <!-- 表示高50rpx，宽90rpx的块 -->
            <view class="bg-accent rounded h-5 w-9"></view>
        </template>
        <h3>full 和 screen</h3>
        <template>
            <view>full表示100%</view>
            <view>screen表示100vh</view>
        </template>
        <h3>内外边距</h3>
        <template>
            <!-- 表示高50rpx，宽90rpx的块，上内边距20rpx，左内边30rpx -->
            <view class="bg-accent rounded h-5 text-white pt-2 pl-3 w-9">1</view>
        </template>
        <h2>字重</h2>
        <template>
            <view>
                <text class="font-thin">thin</text>
                <text class="font-extralight">extralight</text>
                <text class="font-light">light</text>
                <text class="font-normal">normal</text>
                <text class="font-medium">medium</text>
                <text class="font-semibold">semibold</text>
                <text class="font-bold">bold</text>
                <text class="font-extrabold">extrabold</text>
                <text class="font-black">black</text>
            </view>
        </template>
        <h2>字体尺寸</h2>
        <template>
            <view>
                <text class="text-xs">xs</text>
                <text class="text-sm">sm</text>
                <text class="text-md">md</text>
                <text class="text-lg">lg</text>
                <text class="text-xl">xl</text>
                <text class="text-2xl">2xl</text>
                <text class="text-3xl">3xl</text>
                <text class="text-4xl">4xl</text>
                <text class="text-5xl">5xl</text>
                <text class="text-6xl">6xl</text>
                <text class="text-7xl">7xl</text>
                <text class="text-8xl">8xl</text>
                <text class="text-9xl">9xl</text>
            </view>
        </template>
        <h2>文本方向</h2>
        <template>
            <view>
                <view class="text-left">text-left</view>
                <view class="text-center">text-center</view>
                <view class="text-right">text-right</view>
            </view>
        </template>
        <h2>文本装饰</h2>
        <template>
            <view>
                <text class="underline">underline</text>
                <text class="mx-5 line-through">line-through</text>
                <text class="no-underline">no-underline</text>
            </view>
        </template>
        <h2>文本大写</h2>
        <template>
            <view>
                <text class="uppercase">Uppercase</text>
                <text class="mx-5 lowercase">LOWERCASE</text>
                <text class="mr-5 capitalize">Capitalize</text>
                <text class="normal-case">normal-case</text>
            </view>
        </template>
        <h2>不透明度</h2>
        <template>
            <view class="flex">
                <text class="opacity-0 block-1">0%</text>
                <text class="opacity-10 block-1">10%</text>
                <text class="opacity-20 block-1">20%</text>
                <text class="opacity-30 block-1">30%</text>
                <text class="opacity-40 block-1">40%</text>
                <text class="opacity-50 block-1">50%</text>
                <text class="opacity-60 block-1">60%</text>
                <text class="opacity-70 block-1">70%</text>
                <text class="opacity-80 block-1">80%</text>
                <text class="opacity-90 block-1">90%</text>
                <text class="opacity-100 block-1">100%</text>
            </view>
        </template>
        <h2>Flex布局</h2>
        <h3>display</h3>
        <!-- 直接在容器上设置 flex 即可 -->
        <template>
            <view class="flex">
                <view class="block-1" />
                <view class="block-1" />
                <view class="block-1" />
                <view class="block-1" />
            </view>
        </template>
        <h3>主轴对齐</h3>
        <!-- 
        justify-end 尾部
        justify-start 头部
        justify-evenly 等距
        justify-center 居中
        justify-around 等比
        justify-between 靠两头 -->
        <template>
            <view>
                <!-- 居中对齐 -->
                <view class="container flex justify-center">
                    <view class="block-1" />
                    <view class="block-1" />
                    <view class="block-1" />
                    <view class="block-1" />
                </view>

                <!-- 等距对齐 -->
                <view class="container flex justify-evenly">
                    <view class="block-1" />
                    <view class="block-1" />
                    <view class="block-1" />
                    <view class="block-1" />
                </view>

                <!-- 等比对齐 -->
                <view class="container flex justify-around">
                    <view class="block-1" />
                    <view class="block-1" />
                    <view class="block-1" />
                    <view class="block-1" />
                </view>

                <!-- 靠两头对齐 -->
                <view class="container flex justify-between">
                    <view class="block-1" />
                    <view class="block-1" />
                    <view class="block-1" />
                    <view class="block-1" />
                </view>

                <!-- 头部对齐 -->
                <view class="container flex justify-start">
                    <view class="block-1" />
                    <view class="block-1" />
                    <view class="block-1" />
                    <view class="block-1" />
                </view>

                <!-- 尾部对齐 -->
                <view class="container flex justify-end">
                    <view class="block-1" />
                    <view class="block-1" />
                    <view class="block-1" />
                    <view class="block-1" />
                </view>
            </view>
        </template>
        <h3>交叉轴</h3>
        <!-- items-center 居中
        items-flex-end 头部
        items-flex-start 尾部
        items-baseline 文字基线对齐
        items-stretch 填充整个容器高度 -->
        <template>
            <view>
                <!-- 居中对齐 -->
                <view class="container flex items-center">
                    <view class="h-3 block-common" />
                    <view class="h-4 block-common" />
                    <view class="h-5 block-common" />
                    <view class="h-6 block-common" />
                </view>

                <!-- 填充整个容器高度，注意是容器高度 -->
                <view class="container flex items-stretch">
                    <view class="h-6 block-common" />
                    <view class="block-common" />
                    <view class="block-common" />
                    <view class="block-common" />
                </view>

                <!-- 文字基线对齐 -->
                <view class="container flex items-baseline">
                    <view class="h-3 block-common" />
                    <view class="h-4 block-common" />
                    <view class="h-5 block-common" />
                    <view class="h-6 block-common" />
                </view>

                <!-- 头部对齐 -->
                <view class="container flex items-flex-start">
                    <view class="h-3 block-common" />
                    <view class="h-4 block-common" />
                    <view class="h-5 block-common" />
                    <view class="h-6 block-common" />
                </view>

                <!-- 尾部对齐 -->
                <view class="container flex items-flex-end">
                    <view class="h-3 block-common" />
                    <view class="h-4 block-common" />
                    <view class="h-5 block-common" />
                    <view class="h-6 block-common" />
                </view>
            </view>
        </template>
        <h3>方向</h3>
        <!-- flex-row 横排
        flex-col 竖排
        flex-row-reverse 反向横排
        flex-col-reverse 反向竖排 -->
        <template>
            <view>
                <!-- 横排 -->
                <view class="container flex flex-row">
                    <view class="block-2">1</view>
                    <view class="block-2">2</view>
                    <view class="block-2">3</view>
                    <view class="block-2">4</view>
                </view>

                <!-- 竖排 -->
                <view class="container flex flex-col">
                    <view class="block-2">1</view>
                    <view class="block-2">2</view>
                    <view class="block-2">3</view>
                    <view class="block-2">4</view>
                </view>

                <!-- 反向横排 -->
                <view class="container flex flex-row-reverse">
                    <view class="block-2">1</view>
                    <view class="block-2">2</view>
                    <view class="block-2">3</view>
                    <view class="block-2">4</view>
                </view>

                <!-- 反向竖排 -->
                <view class="container flex flex-col-reverse">
                    <view class="block-2">1</view>
                    <view class="block-2">2</view>
                    <view class="block-2">3</view>
                    <view class="block-2">4</view>
                </view>
            </view>
        </template>
    </view>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        methods: {

        }
    }
</script>

<style scoped lang="less">
    @import (reference) '@/common/index.less';

    /** 块 **/
    .block-1 {
        .w-9;
        .h-6;
        .mr-3;
        .my-1;
        .rounded;
        .bg-accent;
        .bg-opacity-100;
    }

    .block-2 {
        .w-9;
        .h-6;
        .mr-3;
        .my-1;
        .flex;
        .rounded;
        .bg-accent;
        .text-white;
        .items-center;
        .justify-center;
        .bg-opacity-100;
    }

    /** 块 **/
    .block-common {
        .mr-3;
        .my-1;
        .flex-1;
        .rounded;
        .bg-accent;
        .bg-opacity-100;
    }

    /** 容器**/
    .container {
        .px-3;
        .py-2;
        .mt-4;
        .bg-accent;
        .rounded-lg;
        .bg-opacity-10;
    }
</style>
