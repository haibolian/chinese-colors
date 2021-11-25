<template>
  <div class="chinese-colors">
    
  </div>
</template>

<script>
import { getColors } from "../api/colors"
import { ref, toRefs, reactive } from "vue"
export default {
  name: 'Home',
  components: {

  },
  setup() {
    
  },
  created(){
    getColors()
  }
}
</script>
