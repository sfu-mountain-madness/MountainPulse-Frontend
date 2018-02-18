<template>
  <v-app id="app">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <div class="header">
      <div style="align-items: center; display: flex">
        <v-btn style="float: left;" icon dense @click.stop="drawer = !drawer">
          <v-icon>menu</v-icon>
        </v-btn>
      </div>
      <div class="header-content">
        <div>
          <span style="float: left; font-family: 'Andale Mono'">Burnaby Mnt.</span>
          <v-icon style="float: left;" large>landscape</v-icon>
        </div>
      </div>
    </div>
    <router-view style="background: #eeeeee"/>
    <v-navigation-drawer temporary
                         v-model="drawer"
                         absolute>
      <v-card>
        <v-card-media :src=mountainImg height="200px">
        </v-card-media>
      </v-card>
      <v-list class="mountainInfo">
        <v-list-tile @click="goto('/moment')">
          <v-list-tile-action>
            <v-icon>slow_motion_video</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            Moments
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="goto('/statistic')">
          <v-list-tile-action>
            <v-icon>equalizer</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            Statistics
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="goto('/collection')">
          <v-list-tile-action>
            <v-icon>collections</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            Scenery
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="goto('/distribution')">
          <v-list-tile-action>
            <v-icon>room</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            distribution
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-divider></v-divider>
      <v-list class="developerInfo" dense>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>question_answer</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            About
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      drawer: null,
      mountainImg: '//assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2' +
      'VzLzYzYmQ3NTdmODBkYWVlM2JiZl82ODQ4MTMzNDQxX2RmMTkxMTAyNjZfYi5qcGciXSxbIn' +
      'AiLCJ0aHVtYiIsIngzOTA-Il0sWyJwIiwiY29udmVydCIsIi1xdWFsaXR5IDgxIC1hdXRvLW9yaWVudCJdXQ'
    }
  },
  methods: {
    goto: function (path) {
      this.$router.push(path)
    }
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;

    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
  }

  .header {
    display: flex;
    overflow: hidden;
    min-height: 5em;
  }

  .header-content {
    display: flex;
    flex-grow: 1;
    justify-content: space-around;
    align-content: center;
    font-size: 1.6em;
    font-weight: bolder;
    align-items: center;
    margin-right: 1.2em;
  }
</style>
