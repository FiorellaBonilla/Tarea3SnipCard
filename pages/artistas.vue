<template>
  <div class="container">
    
    <HeaderView />
    <h3 style="margin-top: 15px">Famous Artists</h3>
    <p>Explore a collection of famous artists from around the world.</p>
    <ul>
      <li v-for="artist in artists" :key="artist.slug">
        <NuxtLink :to="{ name: 'artista-slug', params: { slug: artist.slug } }">{{ artist.name }}</NuxtLink>
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
      // Cargar datos del archivo artists.json
      const artists = await $content('artista').fetch() // Asegúrate de que el nombre aquí coincida con el archivo real
      return {
        artists
      }
    } catch (error) {
      console.error('Error loading artists:', error)
      return {
        artists: []
      }
    }
  }
}
</script>
