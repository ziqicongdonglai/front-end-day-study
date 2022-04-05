<template>
    <view>
        <h2>Vue.prototype</h2>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
        onLoad() {
            this.getBanner();
        },
        methods: {
            getBanner() {
                console.log(this.$websiteUrl + '/banner');
                uni.request({
                    url: this.$websiteUrl + '/banner',
                    method: 'GET',
                    data: {},
                    success: (res) => {},
                    fail: () => {},
                    complete: () => {}
                })
            }
        }
    }
</script>

<style>

</style>
