<template>
    <div id="example">
        <button @click="show = !show">
            <block v-if="show">
                Toggle hide
            </block>
            <block v-else>
                Toggle show
            </block>
        </button>
        <transition name="bounce">
            <p v-if="show">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde quisquam autem explicabo sit non eligendi veniam laboriosam, eveniet distinctio! Doloremque voluptates vero temporibus adipisci odit vitae fuga quasi possimus quidem?
            </p>
        </transition>
    </div>
</template>
<script>
import {ref} from "vue";
export default {
    setup() {
        let show = ref(true);
        return {
            show
        };
    }
}
</script>
<style lang="scss" scoped>
    #example {
        background-color: #2194c5;
        width: 500px;
        height: 200px;
        margin: 10px auto;
        p {
            color: #fff;
        }
    }

    .bounce-enter-active {
        animation: bounce-in 0.5s;
    }

    .bounce-leave-active {
        animation: bounce-in 0.5s reverse;
    }

    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(1);
        }
    }
</style>