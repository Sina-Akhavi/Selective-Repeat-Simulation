
<template>
  <Title></Title>
  <SenRecLink></SenRecLink>
  <Windows></Windows>
  <Log></Log>
  
</template>


<script>
import { senWind, sender, receiver, recWind } from './index'
import Title from './components/Title.vue'
import SenRecLink from './components/SenRecLink.vue'
import Windows from './components/Windows.vue'
import Log from './components/Log.vue'

export default {

  components: {
    Title,
    SenRecLink,
    Windows,
    Log
  },

  data() {
    return {
      senWind: senWind,
      A: sender,
      B: receiver,
      recWind: recWind
    }
  },

  methods: {
    hello() {
      console.log("Hi");
    }
  }
}

</script>

<style>

h3 {
  margin-bottom: 0;
}

</style>
