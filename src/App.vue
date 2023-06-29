
<template>
  <Title></Title>
  <SenRecLink></SenRecLink>
  
</template>


<script>
import Title from './components/Title.vue'
import SenRecLink from './components/SenRecLink.vue'

export default {

  components: {
    Title,
    SenRecLink,
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
