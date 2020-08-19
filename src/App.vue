<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">首頁</router-link>
      <router-link to="/about">流動塑像</router-link>
      <router-link to="/about">一對對</router-link>
      <router-link to="/about">一頁頁</router-link>
      <router-link to="/about">四元素</router-link>
      <router-link to="/about">自由呈現</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">

@import "./sass/playback.scss";
@import "./sass/animation.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
    padding: 0 5px;
    border-left: 1px solid black;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
