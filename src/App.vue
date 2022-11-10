<template>
  <div id="app">
    <div class="ui menu thin-only">
      <!-- <router-link class = "item" to="/">
        <i class="home icon"></i>
      </router-link> -->
      <router-link class = "item" to="/about">
        <i class="user icon"></i>
        </router-link>
      <router-link class = "item" to="/one_to_one">
        <i class="sync icon"></i>
        </router-link>
      <router-link class = "item" to="/pages">
        <i class="book icon"></i>
        </router-link>
      <router-link class = "item" to="/4elems">
        <i class="music icon"></i>
        </router-link>
      <router-link class = "item" to="/free">
        <i class="birthday cake icon"></i>
      </router-link>
    </div>
    <div class="ui labeled icon menu fat-only">
      <router-link class = "item" to="/">
        <i class="home icon"></i>
        首頁
      </router-link>
      <router-link class = "item" to="/about">
        <i class="user icon"></i>
        流動塑像
      </router-link>
      <router-link class = "item" to="/one_to_one">
        <i class="sync icon"></i>
        一對對
      </router-link>
      <router-link class = "item" to="/pages">
        <i class="book icon"></i>
        一頁頁
      </router-link>
      <router-link class = "item" to="/4elems">
        <i class="music icon"></i>
        四元素
      </router-link>
      <router-link class = "item" to="/free">
        <i class="birthday cake icon"></i>
        自由呈現
      </router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">

@import "./sass/playback.scss";
@import "./sass/animation.scss";

.ui.menu {
  margin: 0 !important;
  width: 100vw;
}

@media (max-width: 600px) {
  .fat-only {
    display: none !important;
  }
}

@media (min-width: 601px) {
  .thin-only {
    display: none !important;
  }
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.item.router-link-exact-active {
  background-color: #ccf !important;
}

html, body {
  padding: 0;
  margin: 0;
}

p {
  text-align: left;
  white-space: pre-line;
  padding: 0 1em;
}
</style>
