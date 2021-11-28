<template>
  <div class="chinese-colors" :style="{ backgroundColor: currentColor.hex }">
    <div class="colors-container">
      <color-card
        v-for="color in colorsList"
        :key="color.name"
        :color="color"
        @click="clickColorCard(color)"
      />
    </div>

    <div class="color-info">
      <div class="color-info_value">
        <template v-for="(cmyk,index) in currentColor.CMYK" :key="index">
          <div class="color-info_cmyk">
            <span>{{ cmykTag[index] }}</span>
            <color-value :value='cmyk' :index='index'></color-value>
          </div>
        </template>
        <template v-for="(rgb,index) in currentColor.RGB" :key="index">
          <div class="color-info_rgb">
            <span>{{ rgbTag[index] }}</span>
            <div class="color-info_rgb__value">{{ getValue(index) }}</div>
          </div>
        </template>
      </div>
      <div class="color-info_name">
        <div class="color-info_name__chinese">{{ currentColor.name }}</div>
        <div class="color-info_name__pinyin">{{ currentColor.pinyin && currentColor.pinyin.toUpperCase() }}</div>
      </div>
      <div class="logo">
        <img src="../assets/images/logo.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'
import ColorCard from '../components/ColorCard'
import ColorValue from '../components/ColorValue'
import { getColors } from "../api/colors"
import colorData from './data'
import { title } from "../setting/index"
import { ref, reactive, onBeforeMount, getCurrentInstance} from "vue"
import { useRoute } from "vue-router"
export default {
  name: 'Home',
  components: {
    ColorCard,
    ColorValue
  },
  data(){
    return {
      r: 0,
      g: 0,
      b: 0
    }
  },
  computed: {
    getValue(){
      return (index)=>{
        const arr = [this.r, this.g, this.b]
        return arr[index].toFixed(0)
      }
    }
  },
  setup(props) {
    // init
    let currentColor = ref({
      name: '中国色',
      pinyin: 'zhongguose',
      CMYK: [0,0,0,0],
      RGB: [255,255,255],
      hex: '#126e82'
    })
    // cmyk value
    const cmykTag = ref(['C','M','Y','K'])
    const rgbTag = ref(['R','G','B'])

    // 获取数据
    const colorsList = ref([])
    
    function setColorByHash() {
      const route = useRoute()
      const pinyin = route.hash.replace('#','')
      const color = colorsList.value.find(c=> c.pinyin === pinyin)
      if(color) {
        currentColor.value = color
        document.title = `${color.name + ' - ' + title }`
      }
    }

    onBeforeMount(()=>{
      let { data } = colorData
      data = [].concat(data.splice(234)).concat(data)
      colorsList.value = data
      setColorByHash()
    })
    


    return {
      colorsList,
      currentColor,
      cmykTag,
      rgbTag,
    };
  },
  methods: {
    clickColorCard(color){
      this.currentColor = color
      document.title = `${color.name + ' - ' + title }`
      gsap.to(this, { duration: 1, r: color.RGB[0], g: color.RGB[1], b: color.RGB[2]})
    }
  }
}
</script>

<style lang="scss" scoped>
.chinese-colors {
  padding: 50px 0;
  background-image: url('../assets/images/texture.png');
  transition: background-color 1.5s;
  .colors-container {
    width: 50%;
    box-sizing: border-box;
    padding: 0 80px 0 270px;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
  .color-info {
    width: 50%;
    color: #fff;
    height: calc(100vh);
    position: fixed;
    left: 45%;
    top: 50px;
    display: flex;
    justify-content: flex-start;
    .color-info_value,
    .color-info_name,
    .logo {
      width: 29%;
      height: 100%;
    }
    .color-info_value {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .logo {
      text-align: center;
    }
    .color-info_name__chinese {
      font-family: FZLS, cursive;
      font-size: 7em;
      margin: 0 auto;
      letter-spacing: .3em;
      writing-mode: vertical-lr;
    }
    .color-info_name__pinyin {
      text-align: center;
    }

    .color-info_cmyk,
    .color-info_rgb {
      width: 50px;
      font-weight: 340;
      padding: 6px 0 14px;
      border-bottom: 1px solid rgba(255, 255, 255, .6);
      span {
         font-size: 12px;
      }
    }
    
    .color-info_rgb {
      height: 45px;
      padding-bottom: 10px;
      .color-info_rgb__value {
        line-height: 25px;
        font-size: 23px;
        text-align: right;
      }
    }

    .color-info_cmyk {
      height: 70px;
      &:first-child {
        border-top: 1px solid rgba(255, 255, 255, .6);
      }
    }
  }
}
</style>