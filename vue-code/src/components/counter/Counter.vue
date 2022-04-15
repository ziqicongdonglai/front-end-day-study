<template>
    <button @click="increment">
        Count is: {{count}}, double is: {{double}} Name is: {{reonly.name}}
    </button>
</template>
<script>
import {reactive, computed, toRefs, watch, watchEffect, readonly} from 'vue';
export default {
    setup() {
        const state = reactive({
            count: 0,
            double: computed(() => state.count * 2)
        });

        const reonly = readonly({
            name: "zqcdl"
        });

        function increment() {
            state.count++;
        };

        watch (() => state.count, (newVal, oldVal) => {
            console.log("Counter is change ===>", oldVal, newVal);
        });

        watchEffect(() => {
            console.log("watchEffect");
            reonly.name = "紫气从东来";
        });

        return {
            ...toRefs(state),
            reonly,
            increment
        }
    }
}
</script>
<style scoped>
    .container {
        width: 640px;
        height: 400px;
        margin: auto;
        background-color: #ccc;
        padding-top: 20px;
    }
</style>