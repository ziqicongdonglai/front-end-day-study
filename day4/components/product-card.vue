<template>
    <view class="prod">
        <image class="img" :src="imgSrc" mode="aspectFill"></image>
        <view class="title">{{ title }}</view>
        <view class="flex-box">
            <view class="price">￥{{price}}</view>
            <view class="market-price">{{marketPrice}}</view>
        </view>
    </view>
</template>

<script>
    export default {
        // 从父组件传值
        props: {
            imgSrc: {
                type: String,
                default: ''
            },
            title: {
                type: String,
                default: ''
            },
            price: {
                type: String,
                default: ''
            },
            marketPrice: {
                type: String,
                default: ''
            }
        },
        data() {
            return {

            };
        }
    }
</script>

<style lang="less">
	.prod {
		position: relative;
		width: 350rpx;
		line-height: 34rpx;
		color: #333;
		background: #fff;
		border-radius: 10rpx;
		overflow: hidden;
		font-size: 26rpx;
		border: 1px solid #ccc;
		margin-bottom: 10px;

		.img {
			display: block;
			width: 100%;
			height: 260rpx;
		}

		.title {
			padding: 5px;
		}

		.price {
			padding: 2px 5px;
			color: #ff5000;
		}

		.market-price {
			padding: 2px 5px;
			font-size: 24rpx;
			color: #979797;
			text-decoration: line-through;
		}
	}
</style>
