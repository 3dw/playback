<template>
  <div class="about">
    <h1>
        <span class = "fat-only">四元素
        </span>
    </h1>
    <p v-if ="myF.d">
        {{myF.d}}
    </p>
    <p v-if ="myF.g">
        呈現{{myF.g}}
    </p>
  </div>
</template>

<script type="text/javascript">
    
export default {
  name: 'ElemsElems',
  data () {
    return {
      myF:  {n:'四元素', c:'四元素',
          d:'音樂、肢體、舞布、即興詩',
          g:'較深刻或抽象的主題'},
      forms:  [
        {n:'四元素', c:'四元素',
          d:'音樂、肢體、舞布、即興詩',
          g:'較深刻或抽象的主題'}
      ]
    }
  }
}

</script>
