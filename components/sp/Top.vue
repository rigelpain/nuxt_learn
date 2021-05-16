<template>
  <div class="pa-0">
    <Hero />
    <Profile />
    <Content />
    <Blog />
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

import Hero from '~/components/sp/Hero.vue'
import Profile from '~/components/sp/Profile.vue'
import Content from '~/components/sp/Content.vue'
import Blog from '~/components/sp/Blog.vue'

export default {
  components: {
    Logo,
    VuetifyLogo,
    Hero,
    Profile,
    Content,
    Blog,
  }
}
</script>
