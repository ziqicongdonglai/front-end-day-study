<template>
    <view>
        <!-- 顶部选项卡 -->
        <scroll-view scroll-x="true" class="scroll-row shadow" style="100rpx;">
            <view v-for="(item, index) in tabBars" class="scroll-row-item px-3 py-2 font-md" :key="index"
                :class="tabInex === index ? 'text-error text-lg font-weight-bolder' : ''" @tap="changeTab(index)">
                {{item.name}}
            </view>
        </scroll-view>
        <!-- 横向滑动的视图容器，对应上面tabbar -->
        <swiper :duration="150" :current="tabInex" :style="'height:' + scrollH + 'px;'" @change="onChangeTab">
            <swiper-item v-for="(item, index) in newsList" :key="index">
                <!-- 每个横向的swiper-item里，用纵向滚动视图容器来显示容器 -->
                <scroll-view scroll-y="true" :style="'height:' + scrollH + 'px;'" @scrolltolower="loadmore(index)">
                    <template v-if="item.list.length > 0">
                        <view v-for="(item2,index2) in item.list" :key="index2" class="mb-3 p-2">
                            <common-list-item :item="item2" :index="index2" @follow="follow" @doSupport="doSupport">
                            </common-list-item>
                            <!-- 全局组件 -->
                            <template v-if="index2 !== item.list.length - 1">
                                <divider></divider>
                            </template>
                        </view>
                        <!-- 上拉加载组件 -->
                        <loadmore :loadmore="item.loadmore"></loadmore>
                    </template>
                    <template v-else>
                        <!-- 空页面组件 -->
                        <nothing></nothing>
                    </template>
                </scroll-view>
            </swiper-item>
        </swiper>
    </view>
</template>

<script>
    // 模拟数据
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
    import commonListItem from '@/components/common/common-list-item.vue';
    import loadmore from '@/components/common/loadmore.vue';
    export default {
        components: {
            commonListItem,
            loadmore
        },
        data() {
            return {
                // 列表高度
                scrollH: 600,
                tabInex: 0,
                scrollInto: "",
                // 顶部选项卡
                tabBars: [{
                    name: '推荐'
                }, {
                    name: '体育'
                }, {
                    name: '热点'
                }, {
                    name: '财经'
                }, {
                    name: '娱乐'
                }, {
                    name: '军事'
                }, {
                    name: '历史'
                }],
                newsList: []
            }
        },
        onLoad() {
            // 异步获取系统信息
            let res = uni.getSystemInfo({
                success: res => {
                    // console.log(res);
                    this.scrollH = res.windowHeight - uni.upx2px(100);
                }
            })
            this.getData();
        },
        // 点击导航栏搜索框
        onNavigationBarSearchInputClicked() {
            uni.navigateTo({
                url: '../search/search'
            })
        },
        // 顶部发帖按钮
        onNavigationBarButtonTap(e) {
            uni.navigateTo({
                url: '../write/write'
            })
        },
        methods: {
            // 获取数据
            getData() {
                let arr = [];
                // 生成数据
                for (let i = 0; i < this.tabBars.length - 1; i++) {
                    // 列表数据模板
                    let obj = {
                        // 1.上拉加载更多 2.加载中 3.没有更多了
                        loadmore: '上拉加载更多',
                        list: demo
                    }
                    arr.push(obj);
                }
                // 最后一个选项卡内容
                let emptyObj = {
                    list: []
                }
                arr.push(emptyObj);
                this.newsList = arr;
            },
            // 关注取关
            follow(e) {
                let list = this.newsList[this.tabInex].list;
                console.log(list);
                list[e].isFollow = !list[e].isFollow;
                if (list[e].isFollow) {
                    uni.showToast({
                        title: '关注成功'
                    })
                } else {
                    uni.showToast({
                        title: '取关成功'
                    })
                }
            },
            // 赞和踩
            doSupport(e) {
                console.log(e);
                let list = this.newsList[this.tabInex].list;
                let item = list[e.index];
                // console.log(item.support.type, e.type);
                // 有无点踩记录
                if (item.support.type !== null && item.support.type !== "") {
                    // 不同操作 “互斥”
                    if (item.support.type !== e.type) {
                        // 已经执行了“顶操作 现在点了踩
                        if (item.support.type === 'support' && e.type === 'unSupport') {
                            // console.log('踩');
                            // 顶-1，踩+1
                            item.support.supportCount--;
                            item.support.unSupportCount++;
                        } else if (item.support.type === 'unSupport' && e.type === 'support') { // 执行了“顶”操作 
                            // console.log("顶");
                            // 顶+1，踩-1
                            item.support.supportCount++;
                            item.support.unSupportCount ? item.support.unSupportCount-- : item.support.unSupportCount;
                        }
                    } else { // 相同操作，进行取消
                        if (item.support.type === 'support' && e.type === 'support') {
                            // console.log('取消赞');
                            // 顶-1 踩+1
                            item.support.supportCount--;
                            item.support.type = '';
                            return;
                        } else if (item.support.type === 'unSupport' && e.type === 'unSupport') { // 执行了“顶”操作 
                            // console.log("取消踩");
                            // 踩-1 顶+1
                            item.support.unSupportCount ? item.support.unSupportCount-- : item.support.unSupportCount;
                            item.support.type = '';
                            return;
                        }
                    }
                } else { // 无点踩记录
                    if (e.type === 'unSupport') {
                        // console.log('踩');
                        item.support.unSupportCount++;
                    } else if (e.type === 'support') { // 执行了“顶”操作
                        // console.log("顶");
                        item.support.supportCount++;
                    }
                }
                item.support.type = e.type;
            },
            // 切换选项卡
            changeTab(index) {
                if (this.tabIndex === index) {
                    return;
                }
                // console.log(index);
                this.tabInex = index;
                // console.log(this.tabInex);
            },
            // 监听滑动
            onChangeTab(e) {
                this.changeTab(e.detail.current);
            },
            // 上拉加载更多
            loadmore(index) {
                // 获得当前列表
                let item = this.newsList[index];
                // 判断是否处于可加载状态
                if (item.loadmore !== '上拉加载更多') {
                    return;
                }
                // 修改当前列表的加载状态
                item.loadmore = '加载中...';
                // 模拟数据请求
                setTimeout(() => {
                    // 加载数据
                    item.list = [...item.list, ...item.list];
                    // 修改状态
                    item.loadmore = '上拉加载更多'
                }, 2000)
            }
        }
    }
</script>

<style lang="less" scoped>
    .scroll-row {
        width: 100%;
        white-space: nowrap;
    }

    .scroll-row-item {
        display: inline-block !important;
    }
</style>
