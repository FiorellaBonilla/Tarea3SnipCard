<template>
  <div class="container">
    <HeaderView />
    <div class="row">
      <div class="three columns">
        <img :src="museo.image" :alt="`Image of ${museo.name}`" style="max-width: 100%; height: auto;">
      </div>
      <div class="six columns">
        <h4>{{ museo.name }}</h4>
        <p>Location: {{ museo.location }}</p>
        <p>Established: {{ museo.established }}</p>
        <p>Description: {{ museo.description }}</p>
        <p>Notable Exhibits: {{ museo.notableExhibits }}</p>
        <h5>Paintings</h5>
        <ul>
          <li v-for="painting in paintings" :key="painting.slug">
            <NuxtLink :to="{ name: 'pintura-slug', params: { slug: painting.slug } }">{{ painting.title }}</NuxtLink>
          </li>
        </ul>
        <button class="snipcart-add-item mt-4 bg-white border 
            border-gray-200 d hover:shadow-lg text-gray-700 
            font-semibold py-2 px-4 rounded shadow"
					:data-item-id="museo.slug"
					:data-item-price="museo.name"
					:data-item-description="museo.description"
					:data-item-image="'/images/'+museo.image"
					:data-item-name="museo.title"
					>Comprame!</button>
      </div>
      <div class="two columns"></div>
    </div>
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
  async asyncData({ $content, params }) {
    try {
      // Cargar datos del museo
      const museo = await $content('museos', params.slug).fetch()

      // Cargar todas las pinturas
      const allPaintings = await $content('pinturas').fetch()

      // Filtrar pinturas asociadas al museo
      const paintings = allPaintings.filter(painting => painting.museum === museo.slug)

      return { museo, paintings }
    } catch (error) {
      console.error('Error fetching museo or paintings:', error)
      return { museo: {}, paintings: [] }
    }
  }
}
</script>
