<template>
    <div class="container">
        <Counter />
    </div>
</template>
<script>
import Counter from "@/components/counter/Counter.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "TestCounter",
  components: {
    Counter,
  }
});
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