<template>
  <div class="rgb-line">
    <div class="line" v-for="(c,index) in rgb" :key="index">
      <div class="line_dotted"></div>
      <div class="line_real" :style="{ height: offsetValue(c) }"></div>
    </div>
  </div>
</template>

<script>
export default {
  name:'',
  components:{},
  props:{
    rgb: {
      type: Array
    },
  },
  setup(){
    const offsetValue = (c)=>{
      return (c / 255) * 100 + 'px'
    }
    return {
      offsetValue
    }
  }
}
</script>

<style lang='scss' scoped>
.rgb-line {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.line {
  width: 4px;
  box-sizing: border-box;
  position: relative;
  margin: 0 auto;
  .line_dotted {
    width: 1px;
    height: 100px;
    position: absolute;
    top: 0;
    left: 1px;
    background-color: #ccc;
    opacity: .6;
  }
  .line_real {
    position: absolute;
    width: 1px;
    height: 30px;
    top: 0;
    left: 1px;
    background-color: #fff;

  }
}


</style>