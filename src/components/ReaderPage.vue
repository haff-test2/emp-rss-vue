<template>
  <div class="posts">
    <div class="post" v-for="item in posts" v-bind:key="item.id" v-on:click="gotoLink(item.link)">
      <span>{{ item.description }}</span>
      <br/>
      <span class="post_date">from: {{ item.published_at }}</span>
    </div>
  </div>
</template>

<script>
  import { getList } from '@/services/posts'

  export default {
    name: 'ReaderPage',
    data: () => {
      return { posts: [] }
    },
    mounted() { this.updateList() },
    methods: {
      updateList: function() {
        getList().then(data => {
          this.posts = data
        })
      },
      gotoLink: function(postLink) {
        window.open(postLink)
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
  .post {
    margin-top: 20px;
    text-align: left;
  }
  .post_date {
    text-align: right;
    color: blue;
  }
</style>
