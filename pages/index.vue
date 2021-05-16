<template>
  <div>
    <div v-if="this.windowWidth < breakpoint">
      <SpTop />
    </div>
    <div v-if="this.windowWidth >= breakpoint">
      <PcTop />
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

import SpTop from '~/components/sp/Top.vue'
import PcTop from '~/components/pc/Top.vue'

export default {
  data() {
    return {
      windowWidth : 0,
      breakpoint: 600,
    }
  },
  components: {
    Logo,
    VuetifyLogo,
    SpTop,
    PcTop,
  },
  mounted() {
    window.addEventListener('resize', this.calculateWindowWidth);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.calculateWindowWidth);
  },
  methods: {
    calculateWindowWidth() {
    this.windowWidth = window.innerWidth;
    }
  }
}
</script>
