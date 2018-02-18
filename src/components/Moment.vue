<template>
  <div class="tweets-container">
    <div class="tweet-item" v-for="(item, index) in tweetsId" :key="index">
      <span>
        <Tweet :id="item.id"></Tweet>
      </span>
    </div>
  </div>
</template>

<script>
import { Tweet } from 'vue-tweet-embed'
import gql from 'graphql-tag'
export default {
  name: 'moment',
  data() {
    return {
      tweetsId: [],
      tweetsLimit: 10
    }
  },
  components: {
    Tweet
  },
  apollo: {
    tweetsId: {
      query: gql`query TweetsId($limit: Int!){
        tweetsId(limit:$limit){
          id
        }
      }`,
      variables() {
        return {
          limit: this.tweetsLimit
        }
      },
      update: function (data) {
        return data.tweetsId
      }
    }
  }
}
</script>
<style scoped>
.tweets-container {
  padding: 0 1.3em 1em 1.3em;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  overflow: scroll;
}
.tweet-item {
  margin: 0.5em 0 0 0;
}
.tweet-item:hover {
  box-shadow: 1px 1px 2px 2px darkgray;
  cursor: pointer;
}
</style>
