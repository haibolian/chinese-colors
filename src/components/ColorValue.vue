<template>
  <div class="color-value">
    <svg width="50px" height="50px">
      <circle
        class="circle_dotted"
        r="24"
        cx="25"
        cy="25"
        stroke="#ccc"
        stroke-opacity='.3'
        stroke-width="2"
        fill="none"
      />
      <circle
        class="circle_real"
        r="24"
        cx="25"
        cy="25"
        :stroke="colors[index]"
        stroke-width="2"
        stroke-dasharray='151'
        :stroke-dashoffset='offsetValue'
        fill="none"
      />
      <!-- <text x="0" y="0" font-size="24px" :style="{ fill: colors[index] }">{{ value }}</text> -->
    </svg>
    <div :style="{ color: colors[index] }"> {{ value }} </div>
  </div>
</template>

<script>
import { computed } from "vue"
export default {
  name:'ColorValue',
  components:{},
  props:{
    color: {
      type: String,
      default: '#fff'
    },
    value: {
      type: Number,
      default: 0
    },
    index: {
      type: Number,
      default: 0
    }
  },
  setup(props) {
    const offsetValue = computed(()=>{
      return 151 - (props.value / 100) * 151
    })

    const colors = ['#0093D3', '#CC006B', '#FFF10C', '#111']

    return {
      offsetValue,
      colors
    }
  }
}
</script>

<style lang='scss' scoped>
.color-value {
  position: relative;
  div {
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    position: absolute;
    top: 0;
    left: 0;
    font-size: 24px;
  }
}

.circle_real {
  transform: rotate(-90deg);
  transform-origin: center center;
  transition: stroke-dashoffset 1s;
}
</style>