<!-- pages/index.vue -->\
<template>
    <div class="container">
      <HeaderView />
      <h2 style="margin-top: 15px"> Explorando los Tesoros del Arte</h2>
       <p>En esta página descubrirás información detallada sobre los museos más importantes del mundo, las obras de arte más icónicas y los artistas que han dejado una huella imborrable en la historia. Sumérgete en el fascinante mundo del arte y conoce las piezas que han inspirado a generaciones..</p>
       <ul>
         <li> <NuxtLink to="/pinturas">Pinturas information</NuxtLink></li>
         <li> <NuxtLink to="/artistas">Artista information</NuxtLink></li>
         <li> <NuxtLink to="/museo">Museo information</NuxtLink></li>
       </ul>
      <FooterView />
    </div>
   </template>

<script>
import HeaderView from '../components/global/HeaderView.vue'
import FooterView from '../components/global/FooterView.vue'

export default {
  components: {
    HeaderView,
    FooterView
  }
}
</script>
