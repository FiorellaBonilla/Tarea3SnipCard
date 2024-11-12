<template>
  <div class="container">
    <HeaderView />
    <h3 style="margin-top: 15px">Museos Famosos</h3>
    <p>Lista de museos famosos alrededor del mundo.</p>
    <ul>
      <li v-for="museo in museos" :key="museo.slug">
        <NuxtLink :to="{ name: 'museos-slug', params: { slug: museo.slug } }">{{ museo.name }}</NuxtLink>
      </li>
    </ul>
    <FooterView />
  </div>
</template>

<script>
import HeaderView from '~/components/global/HeaderView.vue'
import FooterView from '~/components/global/FooterView.vue'
export default {
  components: {
    HeaderView,
    FooterView
  },
  async asyncData({ $content }) {
    try {
      const museos = await $content('museos').fetch()
      return { museos }
    } catch (error) {
      console.error('Error fetching museos:', error)
      return { museos: [] }
    }
  }
}
</script>
