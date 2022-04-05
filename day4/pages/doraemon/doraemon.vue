<template>
    <view>
        <view class="doraemon">
            <view class="doraemon-face">
                <view class="eye"></view>
                <view class="mouth"></view>
                <view class="nose"></view>
            </view>
            <view class="doraemon-hand">
                <view class="finger"></view>
            </view>
            <view class="doraemon-footer">
                <view class="toe"></view>
            </view>
        </view>
    </view>
</template>
<style lang="scss">
    .doraemon {
        .doraemon-face {
            .eye {}

            .mouth {}

            .nose {}
        }

        .doraemon-hand {
            .finger {}
        }

        .doraemon-footer {
            .toe {}
        }
    }
    
    /* #ifdef MP-WEIXIN */
    .wx-clor{
        color: green;
    }
    /* #endif */
</style>
