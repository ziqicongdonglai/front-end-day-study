<template>
    <view class="p-2">
        <template v-if="searchList.length === 0">
            <!-- 热搜 -->
            <view class="py-2 text-md font-semibold">
                热搜
            </view>
            <view class="flex flex-wrap justify-between pl-1">
                <view class="hot-item" style="overflow: hidden;" v-for="(item, index) in hot" :key="index"
                    @tap="tapSearchHistory(item)">
                    <text class="mr-2 font-semibold" :class="index+1 <=4 ? '' : 'text-base'">{{index+1}}</text>
                    <text>{{item}}</text>
                </view>
            </view>
        </template>
        <template v-if="searchList.length === 0">
            <!-- 搜索历史 -->
            <view class="flex justify-between items-center">
                <view class="py-2 text-md font-semibold">
                    搜索历史
                </view>
                <view class="text-base" v-if="list.length !== 0" @click="getAll">{{tip}}</view>
            </view>
            <view class="flex flex-wrap">
                <view class="history-item" v-for="(item, index) in list" :key="index" @tap="tapSearchHistory(item)">
                    {{item}}
                </view>
            </view>
            <view class="text-base flex justify-center mt-3">
                <view class="iconfont icon-lajitong mr-1"></view>
                <view @tap="clearList">清空搜索历史</view>
            </view>
        </template>
        <template v-else>
            <!-- 搜索后的结果 -->
            <view v-for="(item, index) in searchList" :key="index">
                <common-list-item :item="item" :index="index"></common-list-item>
            </view>
        </template>
    </view>
</template>

<script>
    const list = [
        'SNH48',
        '社区交友应用',
        'UniApp从入门到精通',
        'Vue.js实战开发',
        '前后端分离开发',
        '跨平台开发',
        '前端工程化',
        '小程序云开发',
        'JS快速入门',
        '正则表达式大全'
    ];
    const demo = [{
            nickname: '紫气从东来',
            avatarUrl: '/static/img/me.jpg',
            publishTime: '2022-04-03 19:20:12',
            isFollow: false,
            title: '集腋成裘,聚沙成塔。',
            thumbnail: '/static/img/banner7.jpg',
            support: {
                type: "",
                supportCount: 10,
                unSupportCount: 0
            },
            commentCount: 10,
            shareCount: 12
        },
        {
            nickname: '酱油',
            avatarUrl: '/static/img/avatar7.jpg',
            publishTime: '2022-04-03 20:20:12',
            isFollow: true,
            title: '从那走到台上，短短几步，五年，我走了整整五年。',
            thumbnail: '',
            support: {
                type: "",
                supportCount: 8,
                unSupportCount: 2
            },
            commentCount: 10,
            shareCount: 12
        },
        {
            nickname: 'wota',
            avatarUrl: '/static/img/avatar8.jpg',
            publishTime: '2022-04-03 21:20:12',
            isFollow: false,
            title: 'good good study，day day up',
            thumbnail: '/static/img/banner9.jpg',
            support: {
                type: "support",
                supportCount: 33,
                unSupportCount: 7
            },
            commentCount: 10,
            shareCount: 12
        }
    ]
    import commonListItem from '@/components/common/common-list-item.vue'
    export default {
        components: {
            commonListItem
        },
        data() {
            return {
                isShow: false,
                tip: '展开',
                searchTxt: '',
                hot: [
                    'SNH48',
                    '社区交友应用',
                    'UniApp从入门到精通',
                    'Vue.js实战开发',
                    '前后端分离开发',
                    '跨平台开发',
                    '前端工程化',
                    '小程序云开发',
                    'JS快速入门',
                    '正则表达式大全'
                ],
                list: [
                    'SNH48',
                    '社区交友应用',
                    'UniApp从入门到精通',
                    'Vue.js实战开发',
                    '前后端分离开发',
                    '跨平台开发',
                    '前端工程化',
                    '小程序云开发',
                    'JS快速入门',
                    '正则表达式大全'
                ],
                find: [
                    'SNH48',
                    '社区交友应用',
                    'UniApp从入门到精通',
                    'Vue.js实战开发',
                    '前后端分离开发',
                    '跨平台开发',
                    '前端工程化'
                ],
                // 搜索结果
                searchList: []
            }
        },
        onLoad() {
            this.list = this.list.splice(0, 4);
        },
        // 监听搜索框输入
        onNavigationBarSearchInputChanged(e) {
            console.log(e);
            this.searchTxt = e.text;
        },
        // 监听点击导航栏搜索按钮
        onNavigationBarButtonTap(e) {
            console.log(e);
            // 根据 e.index 确定点击了哪个按钮
            this.searchEvent();
        },
        methods: {
            // 点击搜索历史
            tapSearchHistory(txt) {
                this.searchTxt = txt;
                this.searchEvent();
            },
            // 搜索事件
            searchEvent() {
                // 收起软键盘
                uni.hideKeyboard();
                // loading
                uni.showLoading({
                    title: '加载中',
                    mask: false
                })
                // 请求搜索
                setTimeout(() => {
                    this.searchList = demo;
                    uni.hideLoading();
                }, 2000)
            },
            clearList() {
                uni.showModal({
                    title: '确认清除全部历史记录吗？',
                    confirmText: '确定',
                    confirmColor: '#ef4444',
                    cancelText: '取消',
                    success: (res) => {
                        if (res.confirm) {
                            // console.log('用户点击确定');
                            this.list = [];
                        } else if (res.cancel) {
                            // console.log('用户点击取消');
                        }
                    }
                })
            },
            getAll() {
                if (!this.isShow) {
                    this.list = list;
                    this.tip = "收起";
                } else {
                    this.list = list.splice(0, 4);
                    this.tip = "展开";
                }
                this.isShow = !this.isShow;
            }
        }
    }
</script>

<style scoped lang="less">
    @import (reference) '@/common/index.less';

    .history-item {
        .px-2;
        .py-1;
        .mr-2;
        .my-1;
        .rounded;
        // .border;
        // .border-base;
        // .text-base;
        .text-sm;
        .bg-base;
        .bg-opacity-10;
        // & 表示当前选择器的父级
        // &:hover {
        //     .text-error;
        // }
    }

    .hot-item {
        .w-30;
        .my-1;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
</style>
