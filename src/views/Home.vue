<template>
  <div class="chinese-colors" :style="{ backgroundColor: backgroundColor }">
    <div class="colors-container">
      <color-card
        v-for="color in colorsList"
        :key="color.name"
        :color="color" 
        @click="clickColorCard(color)"
      />
    </div>

    <div class="color-info">

    </div>
  </div>
</template>

<script>
import ColorCard from '../components/ColorCard'
import { getColors } from "../api/colors"
import { ref, reactive, onBeforeMount} from "vue"
export default {
  name: 'Home',
  components: {
    ColorCard
  },
  setup(props) {
    // 获取数据
    const colorsList = ref([])
    onBeforeMount(async ()=>{
      let { data } = await getColors()
      colorsList.value = data
    })

    // 设置背景色
    let backgroundColor = ref('#ddd')
    const clickColorCard = (color)=> {
      backgroundColor.value = color.hex
    }

    
    return {
      colorsList,
      backgroundColor,
      clickColorCard
    };
  },
}
</script>

<style lang="scss" scoped>
.chinese-colors {
  padding: 20px 0;
  background-image: url('../assets/images/texture.png');
  transition: background-color 1.5s;
  .colors-container {
    width: 50%;
    box-sizing: border-box;
    padding: 0 80px 0 270px;

    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .color-info {
    width: 50%;
    height: 100%;
    padding: 0 30px 0 10px;
    background-color: red;
    position: fixed;
    right: 0;
  }
}
</style>