<template>
  <div class="map-container">
    <gmap-map :center="center" :zoom="15" style="width: 100%; height: 300px">
      <gmap-marker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true" :draggable="true" @click="center=m.position"></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
import * as VueGoogleMaps from 'vue2-google-maps'
import Vue from 'vue'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBPj6ER1A4Mxey2Dr8WvKidreaCK_kvG18'
    // v: 'OPTIONAL VERSION NUMBER',
    // libraries: 'places', //// If you need to use place input
  }
})

export default {
  data() {
    return {
      center: {
        lat: 10.0,
        lng: 10.0
      },
      markers: []
    }
  },
  mounted: function () {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.center.lat = position.coords.latitude
        this.center.lng = position.coords.longitude
        this.markers.push({
          position: {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }
        })
      })
    }
  }
}
</script>

<style scoped>
.map-container {
  max-width: 100%;
}
</style>
