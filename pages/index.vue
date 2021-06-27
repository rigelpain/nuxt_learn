<template>
  <div>
    <div v-if="this.windowWidth < breakpoint">
    </div>
    <div v-if="this.windowWidth >= breakpoint">
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

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
