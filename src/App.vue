<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
body {
  margin: 0;
  font-family: "Open Sans", "Helvetica Neue", Arial, "Hiragino Sans GB",
    "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
  background-color: #34185d;
}
</style>

<style lang="scss">
* {
  user-select: none;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
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
