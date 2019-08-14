<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <app-list/>
  </div>
</template>

<script>
// @ is an alias to /src
import appList from '@/components/app-list.vue'

export default {
  name: 'home',
  components: {
    appList
  }
}
</script>
