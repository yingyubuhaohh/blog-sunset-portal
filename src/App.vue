<template>
    <Head></Head>
      <router-view />
    <Foot></Foot>
</template>

<script setup>
import Head from "@/components/head/index"
import Foot from "@/components/foot/index"
</script>

<style lang="scss">
::-webkit-scrollbar {
  width: 0 !important;
}
::-webkit-scrollbar {
  width: 0 !important;height: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body{
  margin: 0px;
  background: url("./assets/images/cool-background.png") repeat-x fixed #2c3e50;
  background-size: 100% 100%;
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
