<template>
  <div class="hello">
    <h1>app-list</h1>
    <p>
      firebase로 CURD 구현 해보자
    </p>
    <h3>리스트</h3>
    <table>
      <tr v-for="item in documents">
        <td>{{ item.title }}</td>
        <td>{{ item.content }}</td>
        <td>{{ item.date }}</td>
        <td><input type="button" @click="deleteById(item.id)" value="삭제"></td>
      </tr>
    </table>
    <table>
      <tr>
        <td><input type="text" v-model="initRowData.title"></td>
        <td><input type="text" v-model="initRowData.content"></td>
      </tr>
    </table>
    <button @click="submit">추가하기</button>


  </div>
</template>

<script>
  import { db } from '../db'
  import moment from 'moment'
export default {
  name: 'app-list',
  data() {
    return {
      documents: [],
      initRowData: {title:'', content:'', date: moment(new Date()).format('YYYY-MM-DD')}
    }
  },
  firestore: {
    documents: db.collection('test')
  },
  created: function(){
    console.log(moment(new Date()).format('YYYY-MM-DD'))
  },
  methods: {
    submit: function(){
      db.collection('test').add(this.initRowData);
      console.log(this.documents)
    },
    deleteById: function(id){
      var result = confirm('삭제하시겠습니까?');
      if (result) {
        db.collection('test').doc(id).delete();
      }
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
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
  table { border-collapse: collapse; margin:0 auto; max-width:1200px; width:100%;
    border-left:1px solid #ccc; border-top:1px solid #ccc;}
  table td { border-right:1px solid #ccc; border-bottom:1px solid #ccc; }
</style>
