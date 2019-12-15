<template>
  <div class="feeds">
    <div class = "search">
      <input required v-model="new_feed_url" placeholder="http://your_feed_url.com"/>
      <button type="submit" v-on:click="addFeed()">Add feed</button>
    </div>
    <br />
    <table class="feed_list">
      <tr>
        <th> id </th>
        <th> title </th>
        <th> url </th>
        <th></th>
        <th></th>
      </tr>
      <tr v-for="item in feeds" v-bind:key="item.id">
        <td> {{ item.id }} </td>
        <td> {{ item.channel_title }} </td>
        <td> {{ item.url }} </td>
        <td> <button v-on:click="removeItem(item.id)">remove</button> </td>
      </tr>
    </table>
  </div>
</template>

<script>
  import { getList, registerFeed, removeFeed } from '@/services/feeds'

  export default {
    name: 'FeedList',
    data: () => {
      return { feeds: [], new_feed_url: null }
    },
    mounted() { this.updateList() },
    methods: {
      addFeed: function() {
        if (this.new_feed_url != null) {
          registerFeed(this.new_feed_url).then(() => { this.updateList() })
        }
      },
      updateList: function() {
        getList().then(data => {
          this.feeds = data
        })
      },
      removeItem: function (feedId) {
        removeFeed(feedId).then(() => { this.updateList() })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
