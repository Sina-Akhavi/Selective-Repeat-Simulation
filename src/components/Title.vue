<template>
  
  <div class="title">
  <h3>Selective-Repeat Simulation</h3>
  <div class="input-frame-container">
    <label for="input"> Enter Frames: </label>
    <input type="text" id="input">
    <button @click="$emit('exchange-frames')">Start</button>
  </div>
  <br>
  <hr class="hor-line">
</div>
  
</template>


<script>


export default {
  props: ['exchangeFrames'],

  emits: ['exchange-frames'],


  methods: {
    start() {
      this.$emit()
    }
  }
}


</script>


<style>

.hor-line {
  width: 18.5rem;
  float: left;
  margin-top: 0;
}

.input-frame-container {
  float: right;
}

</style>