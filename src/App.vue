
<template>
  <Title @exchange-frames="exchangeFrames"></Title>
  <SenRecLink ref="link"></SenRecLink>
  
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
    exchangeFrames() {
      this.$refs.link.drive();
    }
  }
}

</script>

<style>

h3 {
  margin-bottom: 0;
}

</style>
