<template>
  <div>
    <!-- 在双花括号中 -->
    {{ message | capitalize }}
  </div>
</template>
<script>
  export default {
    name: 'filters',
    data() {
      return {
        message: 'ken',
      };
    },
    filters: {
      capitalize: function (value) {
        if (!value) return '';
        value = value.toString();
        return value.charAt(0).toUpperCase() + value.slice(1);
      },
    },
  };
</script>