<template>
  <div id="container">
    <div class="header">
      <div class="header-content">
        <v-icon style="float: left; margin-right: 0.5em" x-large>landscape</v-icon>
        <span style="float: left; font-family: 'Andale Mono'">Burnaby Mountain</span>
      </div>
    </div>
    <v-card class="twiters">
      <v-list three-line>
        <template v-for="item in items">
          <v-subheader v-if="item.header" v-text="item.header" :key="item.header"></v-subheader>
          <v-divider v-else-if="item.divider" v-bind:inset="item.inset" :key="item.divider"></v-divider>
          <v-list-tile avatar v-else v-bind:key="item.title">
            <v-list-tile-avatar>
              <!--<img v-bind:src="item.avatar"/>-->
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title v-html="item.title"></v-list-tile-title>
              <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-card>
    <div class="charts">
      <span>charts</span>
    </div>
    <div class="gifs">
      <span>gif</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'burnaby-mountain',
  data() {
    return {
      items: [
        { header: 'Today' },
        { avatar: '/static/doc-images/lists/1.jpg', title: 'Brunch this weekend?', subtitle: "<span class='grey--text text--darken-2'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?" },
        { divider: true, inset: true },
        { avatar: '/static/doc-images/lists/2.jpg', title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>', subtitle: "<span class='grey--text text--darken-2'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend." },
        { divider: true, inset: true },
        { avatar: '/static/doc-images/lists/3.jpg', title: 'Oui oui', subtitle: "<span class='grey--text text--darken-2'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?" },
        { divider: true, inset: true },
        { avatar: '/static/doc-images/lists/4.jpg', title: 'Birthday gift', subtitle: "<span class='grey--text text--darken-2'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?" },
        { divider: true, inset: true },
        { avatar: '/static/doc-images/lists/5.jpg', title: 'Recipe to try', subtitle: "<span class='grey--text text--darken-2'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos." },
        { divider: true, inset: true },
        { avatar: '/static/doc-images/lists/4.jpg', title: 'Birthday gift', subtitle: "<span class='grey--text text--darken-2'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?" },
        { divider: true, inset: true },
        { avatar: '/static/doc-images/lists/5.jpg', title: 'Recipe to try', subtitle: "<span class='grey--text text--darken-2'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos." },
        { divider: true, inset: true },
        { avatar: '/static/doc-images/lists/5.jpg', title: 'Recipe to try', subtitle: "<span class='grey--text text--darken-2'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos." },
        { divider: true, inset: true },
        { avatar: '/static/doc-images/lists/5.jpg', title: 'Recipe to try', subtitle: "<span class='grey--text text--darken-2'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos." },
        { divider: true, inset: true },
        { avatar: '/static/doc-images/lists/5.jpg', title: 'Recipe to try', subtitle: "<span class='grey--text text--darken-2'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos." }
      ]
    }
  }
}
</script>

<style scoped>
#container {
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 30% 20% auto;
  grid-template-rows: 3.5em 40% auto;
  grid-column-gap: 1em;
  grid-row-gap: 1em;
  grid-template-areas: "header empty empty" "twiters twiters charts" "twiters twiters gifs";
}
.header {
  grid-area: header;
  margin: 0 1em 0 1em;
}
.header:hover {
  background: gainsboro;
  cursor: pointer;
}
.header-content {
  font-size: 30px;
  display: block;
  padding-left: 3%;
}
.twiters {
  grid-area: twiters;
  margin: 0 1em 1em 1em;
  overflow: scroll;
}
.charts {
  grid-area: charts;
  background: yellow;
  margin: 0 1em 0 1em;
}
.gifs {
  grid-area: gifs;
  background: red;
  margin: 1em 1em 1em 1em;
}
</style>
