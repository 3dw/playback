<template>
  <div class="about">
    <h1>
        <span class = "fat-only">自由呈現
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
  name: 'Free',
  data () {
    return {
      myF:  {n:'自由呈現', c:'自由呈現',
          d:'說故事的人選一位演員扮演他自己，如果有其他重要角色，也由說故事的人選擇，其他人自由，呈現方式自由。',
          g:'較重的故事'},
      forms:  [
        {n:'自由呈現', c:'自由呈現',
          d:'說故事的人選一位演員扮演他自己，如果有其他重要角色，也由說故事的人選擇，其他人自由，呈現方式自由。',
          g:'較重的故事'}
      ]
    }
  }
}

</script>
