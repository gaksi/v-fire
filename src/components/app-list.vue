<template>
  <div class="hello">
    <h1>app-list</h1>
    <p>
      firebase로 CURD 구현 해보자
    </p>
    <h3>리스트</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
    </ul>
  </div>
</template>

<script>
  import { db } from '../db'

export default {
  name: 'app-list',
  data() {
    return {
      documents: [],
    }
  },
  firestore: {
    documents: db.collection('test'),
  },
  created: function(){
    console.log(this.documents)
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
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
