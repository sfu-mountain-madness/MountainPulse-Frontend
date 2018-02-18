<template>
  <div class="tweets-container">
    <span class="tweet-item" v-for="(item) in tweetsId" :key="item">
      <Tweet :id="item"></Tweet>
    </span>
  </div>
</template>

<script>
import { Tweet } from 'vue-tweet-embed'
export default {
  name: 'moment',
  data () {
    return {
      tweetsId: [
        '964976236874252288',
        '964976236874252288',
        '964976236874252288',
        '964976236874252288'
      ]
    }
  },
  components: {
    Tweet
  }
}
</script>

<style scoped>
.tweets-container{
  padding: 0 3em 1em 3em;
  overflow: scroll;
}
.tweet-item{
  margin: 0.5em 0 0.5em 0;
}
.tweet-item:hover{
  box-shadow: 1px 1px 2px 2px darkgray;
  cursor: pointer;
}

</style>
