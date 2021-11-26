<template>
  <div class="color-card" :style="{ borderTopColor: color.hex }">
    <div class="cmyk-name">
      <div class="cmyk-container">
        <cmyk-circle v-for="(value,index) in color.CMYK" :key="index" :value="value" />
      </div>
      <span class="name-chinese" :style="{ color: color.hex }"> {{ color.name }}</span>
    </div>

    <div class="rgb-name">

    </div>
  </div>
</template>

<script>
import CmykCircle from './components/CmykCircle.vue'
export default {
  name:'ColorsCard',
  components:{
    CmykCircle
  },
  props:{
    color: {
      type: Object
    }
  },
  setup(){
    
    return {
      
    }
  }
  
}
</script>

<style lang='scss' scoped>
.color-card {
  margin: 6px;
  width: 50px;
  color: #fff;
  border-top: 6px solid;
  padding-top: 10px;
  cursor: pointer;
}
.cmyk-name {
  display: flex;
  justify-content: space-between;
}
.name-chinese {
  writing-mode:vertical-lr;
  letter-spacing: 4px;
}
</style>