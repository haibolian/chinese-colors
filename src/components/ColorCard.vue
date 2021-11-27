<template>
  <a :href="'#' + color.pinyin" class="color-card" :style="{ borderTopColor: color.hex }">
    <div class="cmyk-name">
      <div class="cmyk-container">
        <cmyk-circle v-for="(value,index) in color.CMYK" :key="index" :value="value" />
      </div>
      <span class="name-chinese" :style="{ color: color.hex }"> {{ color.name }}</span>
    </div>

    <div class="rgb-name">
      <span v-text="color.hex.replace('#','').toUpperCase()"></span>
      <rgb-line :rgb="color.RGB"></rgb-line>
      <span v-text="color.pinyin.toUpperCase()"></span>
    </div>
  </a>
</template>

<script>
import CmykCircle from './CmykCircle.vue'
import RgbLine from './RgbLine.vue'
export default {
  name:'ColorsCard',
  components:{
    CmykCircle,
    RgbLine
  },
  props:{
    color: {
      type: Object
    }
  },
  setup(props){
    
    return {
      
    }
  }
  
}
</script>

<style lang='scss' scoped>
.color-card {
  text-decoration: none;
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
.rgb-name {
  height: 120px;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  font-size: 0.8em;
  span {
    writing-mode: vertical-lr;    
  }
}
</style>