<template>
  <div class="hello">
    <h1><span class="fat-only">歡迎來到</span>
      playback劇場!!</h1>
    <router-link class="ui huge green button" to="/about">請從流動塑像開始</router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 {
  text-shadow: 0.1em 0.1em 0.2em black;
}
.hello {
  color: orange;
  height: 100vh;
  padding-top: 2em;
  background: url(https://3dw.github.io/playback/og-image.jpg) no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

</style>
