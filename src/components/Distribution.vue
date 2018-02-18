<template>
  <div class="map-container">
    <gmap-map :center="center" :zoom="15" style="width: 100%; min-height: 300px">
      <gmap-marker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true" :draggable="true" @click="center=m.position"></gmap-marker>
    </gmap-map>
    <div class="location-container" style="flex-grow:1;">
      <div style="margin:0.5em 0.3em 0 0.3em;" :key="index" v-for="(loc,index) in markers">
        <v-card>
          <v-card-title primary-title>
            <div>
              <div style="text-align:left;" v-if="index===0">Your Location</div>
              <div style="text-align:left;" v-else>Sensor - {{index}}</div>
              <div>Position: {{loc.position.lat|toShort}}, {{loc.position.lng|toShort}}</div>
            </div>
          </v-card-title>
        </v-card>
      </div>
    </div>
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
      markers: [],
      psuedoCount: 10
    }
  },
  filters: {
    toShort: function (value) {
      return String(value).slice(0, 11)
    }
  },
  mounted: function () {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.center.lat = position.coords.latitude
        this.center.lng = position.coords.longitude
        const psuedoMarkers = this.makePseudoMakers(this.psuedoCount, this.center)
        console.log(psuedoMarkers)
        this.markers.push({
          position: {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }
        })
        this.markers.push(...psuedoMarkers)
      })
    }
  },
  methods: {
    makePseudoMakers: function (count, baseLoc) {
      const markers = [...Array(count).keys()].map(_ => {
        const offsetX = (Math.random() - 0.5) / 100
        const offsetY = (Math.random() - 0.5) / 100
        return {
          position: {
            lat: baseLoc.lat + offsetX,
            lng: baseLoc.lng + offsetY
          }
        }
      })
      return markers
    }
  }
}
</script>

<style scoped>
.map-container {
  max-width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}
.location-container {
  overflow: auto;
}
/* .location-item{
  display: flex;
  flex-direction: column;
} */
</style>
