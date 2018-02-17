<template>
  <v-app id="app">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <div>
      <v-btn style="float: left;" icon dense><v-icon >menu</v-icon></v-btn>
    </div>
    <router-view/>
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  background: #eeeeee;
  position: absolute;
  height: 100%;
  width: 100%;
}
</style>
