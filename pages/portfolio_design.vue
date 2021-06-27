<template>
  <div>
    <v-stepper non-linear width="1000px" :class="$style.stepper">
      <v-stepper-header :class="$style.stepperHeader">
        <v-stepper-step
          editable
          step="1"
        >
          URIBO - 生活習慣を整えるロボット -
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step
          editable
          step="2"
        >
          Cheers - パーティーを盛り上げるグラス -
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step
          step="3"
          editable
        >
          Light Bottle - 光が溜まるボトル -
        </v-stepper-step>
      </v-stepper-header>
      <v-stepper-items :class="$style.stepperItems">
        <v-stepper-content
          :step="1"
          :class="$style.stepperContent"
        >
          <Uribo />
        </v-stepper-content>
        <v-stepper-content
          :step="2"
        >
          <Uribo />
        </v-stepper-content>
        <v-stepper-content
          :step="3"
        >
          <Uribo />
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

import Profile from '~/components/Profile.vue'

import Uribo from '~/components/portfolio/design/Uribo.vue'
import Cheers from '~/components/portfolio/design/Cheers.vue'
import LightBottle from '~/components/portfolio/design/LightBottle.vue'

export default {
  data() {
    return {
      windowWidth : 0,
      breakpoint: 600,
      fab: false,
      e1: 1,
      steps: 3,
      steppHeaderScrollY: 500,
    }
  },
  watch: {
    steps (val) {
      if (this.e1 > val) {
        this.e1 = val
      }
    },
  },
  head: {
    link: [
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Saira:wght@100;400;800&display=swap',
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;400;700&display=swap',
      },
    ],
  },
  methods: {
    calculateWindowWidth() {
      this.windowWidth = window.innerWidth;
    },
    handleScroll() {
      this.steppHeaderScrollY = window.scrollY;
      console.log(this.steppHeaderScrollY);
    },
  },
  components: {
    Logo,
    VuetifyLogo,
    Profile,
    Uribo,
    Cheers,
    LightBottle,
    Profile,
  },
  mounted() {
    window.addEventListener('resize', this.calculateWindowWidth);
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.calculateWindowWidth);
  },
}
</script>

<style module lang="scss">
@import "~assets/variables.scss";

.stepper {
  overflow: visible;
  margin-bottom: 50px;
  &Header {
    position: sticky !important;
    top: 64px;
    z-index: 100;
    background-color: $white;
  }
  &Items {
    overflow: visible;
  }
  &Content {
    overflow: visible;
  }
}

.v-stepper__wrapper {
  overflow: visible;
}

</style>
