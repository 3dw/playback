<template>
  <div class="about">
    <h1>
        <span class = "fat-only">流動塑像
        </span>
        <span v-if = "myF.n">{{myF.n}}</span>
    </h1>
    <p v-if ="myF.d">
        {{myF.d}}
    </p>
    <div class="ui buttons">
        <a class="ui green button" v-for = "f in forms" :key="f.n" @click = "myF = f" :class = "{active: myF.css == f.css}">{{f.n}}</a>
    </div>
    <section class = "stage">
        <div class="statue" id="s1" :class="myF.css"></div>
        <div class="statue" id="s2" :class="myF.css"></div>
        <div class="statue" id="s3" :class="myF.css"></div>
        <div class="statue" id="s4" :class="myF.css"></div>
    </section>
  </div>
</template>

<script type="text/javascript">
    
export default {
  name: 'Home',
  data () {
    return {
      myF:  {n: '起點', css: ''},
      forms:  [
            {n: '起點', css: ''},
            {n:'定格流動塑像',
             c:'流動塑像', 
             css:'shiftingStatue',
             d:'每人出來講同樣短句三次，之後定格，換下一位出來。\n全部定格後，送給說故事的人。',
             g:'心情或小故事'},
            {n:'持續流動塑像', c:'流動塑像',
             css:'rollingStatue',
              d:'每人出來講同樣短句三次，之後轉小聲、持續動作，換下一位出來。\n最後一位講完再一起定格，送給說故事的人。',
             g:'心情或小故事'}
        ]
    }
  }
}

</script>

<style lang="scss" scoped="">

$step-one: 33px;
$step-two: 66px;
$step-three: 100px;

.statue {
  display: inline-block;
  position: relative;
  margin: 50px;
  width: 50px;  
  height: 50px;
  border-radius: 50%;
  border: 1px solid black;
}

@media screen and (max-width: 600px) {
  .statue {
    margin: 10px;
  }
}

.statue:before {
  position: absolute;
  left: 50%;
  margin-left: -8px;
  top: 100%;
  content: "";
  display: inline-block;
  border-top: 8px solid black; 
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
}

@mixin keyFrames($animation-name) {
  @-webkit-keyframes #{$animation-name} {   @content; }
  @-moz-keyframes #{$animation-name} {  @content; }
  @keyframes #{$animation-name} {  @content; }
}


@include keyFrames(shiftingStatue) {
  0% { top:0px }
  20% { top:$step-one; }
  33% { top:$step-one; }
  53% { top:$step-two; }
  66% { top:$step-two; }
  87% { top:$step-three; }
  100% { top:$step-three; }
}


/* 塑像 */
.shiftingStatue {
  animation: shiftingStatue 3s ease forwards 1, speak 3s ease forwards 1;
}

.rollingStatue {
  animation: shiftingStatue 3s ease forwards 1,
    speak 3s ease forwards 1,
    murmur 2.5s ease forwards 6;
}

#s1 {
    animation-delay: 0s;
}
#s2 {
    animation-delay: 3s;
}
#s3 {
    animation-delay: 6s;
}
#s4 {
    animation-delay: 9s;
}

/* ~塑像 */

</style>