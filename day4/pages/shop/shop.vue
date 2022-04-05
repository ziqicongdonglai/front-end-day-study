<template>
    <view class="content">
        <product-card :imgSrc="prod.img" :title="prod.title" :price="prod.price" :marketPrice="prod.marketPrice"
            v-for="count in 8"></product-card>
    </view>
</template>

<script>
    import productCard from '@/components/product-card.vue'
    export default {
        components: {
            productCard
        },
        data() {
            return {
                prod: {
                    img: 'http://gw.alicdn.com/bao/uploaded/i3/1917047079/O1CN01VlEDD522AEJzpw3A5_!!2-item_pic.png_360x10000.jpg',
                    title: 'Apple/苹果 iPhone 12 Pro',
                    price: '8699.00',
                    marketPrice: '￥8699.00',
                }
            }
        },
        methods: {

        }
    }
</script>

<style scoped>
    .content {
        background: #fff;
        padding: 5px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
</style>
