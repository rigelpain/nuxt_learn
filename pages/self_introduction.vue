<template>
  <div>
    <Profile />
  </div>
</template>

<script>
import Profile from '~/components/portfolio/self/Profile.vue'

export default {
  data() {
    return {
      windowWidth : 0,
      breakpoint: 600,
      fab: false,
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

</style>
