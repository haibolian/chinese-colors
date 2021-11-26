<template>
  <div class="cmyk-circle">
    <svg width="30px" height="30px" class="svg">
      <circle
        class="t2"
        r="9"
        cy="15"
        cx="15"
        stroke-width="5"
        stroke-opacity='.3'
        stroke="#ccc"
        stroke-linejoin="round"
        stroke-linecap="round"
        fill="none"
      />
      <circle
        class="t1"
        r="9"
        cy="15"
        cx="15"
        stroke-width="5"
        stroke-opacity='.7'
        stroke="#fff"
        stroke-linejoin="round"
        stroke-linecap="round"
        fill="none"
        stroke-dasharray="56.5"
        :stroke-dashoffset='offsetValue'
      />
    </svg>
  </div>
</template>
<script>
import { computed } from "vue";
export default {
  name: "CmykCircle",
  props: {
    value: {
      type: Number,
    },
  },
  setup(props) {
    const offsetValue = computed(() => {
      return 56.5 - (props.value / 100) * 56.5
    });

    return {
      offsetValue
    }
  },
};
</script>
<style lang="scss" scoped>
.svg {
  transform: rotate(-90deg);
}
.t1 {
  // animation: adasd 2s;
}
@keyframes adasd {
  from{
    stroke-dashoffset: 0px;
  }
  to{
    stroke-dashoffset: 30px;
  }
}
.cmyk-circle {
  .cmyk-circle_inner {
  }
}
</style>