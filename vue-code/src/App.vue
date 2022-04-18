<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/mapSet">MapSet</router-link> |
    <router-link to="/markRaw">MarkRaw</router-link> |
    <router-link to="/readOnly">ReadOnly</router-link> |
    <router-link to="/todoList">todoList</router-link> |
    <router-link to="/counter">Counter</router-link> |
    <router-link to="/parent">slots</router-link> |
    <router-link to="/slotName">具名插槽</router-link> |
    <router-link to="/slotScopes">插槽作用域</router-link> |
    <router-link to="/dynamicArguments">DynamicArguments</router-link> |
    <router-link to="/globalApi">globalApi</router-link> |
    <router-link to="/filters">filters</router-link> |
    <router-link to="/transition">transition</router-link> |
    <router-link to="/tele">tele</router-link> |
  </nav>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
