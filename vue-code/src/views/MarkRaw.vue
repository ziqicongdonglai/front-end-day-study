<template>
    <div class="container">
        你好 {{obj.name}}
        <button @click="update">不能修改数据</button>
    </div>
</template>
<script>
import {markRaw} from 'vue';
export default {
    name: "markRaw",
    data: () => ({
        obj: markRaw({name: 'Vue'})
    }),
    methods: {
        update() {
            this.obj.name = 'Ken';
            console.log(this.obj);
        }
    },
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