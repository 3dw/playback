<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <h3>歡迎來到playback劇場!!</h3>
    <router-link class="ui green button" to="/about">請從流動塑像開始</router-link>
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
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
