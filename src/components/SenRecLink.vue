<template>

  <div class="sen-rec-link">
    <button class="sender">A</button>
    <button class="link"></button>
    <button class="receiver">B</button>
  </div>

  <button class="send-frame">Send Frame</button>
  <button class="send-rr">Send RR</button>

</template>

<script>
</script>



<style scoped>

.sender {
  height: 4rem;
  width: 4rem;
  border: 10px;
  border-radius: 5px;
  background-color: green;
  font-weight: bolder;
  font-size: xx-large;
}

.sen-rec-link {
  margin-top: 4rem;
  margin-left: 2rem;
}

.link {
  width: 64rem;
  height: 1rem;
  background-color: orangered;
  border: none;
}

.receiver {
  height: 4rem;
  width: 4rem;
  border: 10px;
  border-radius: 5px;
  background-color: green;
  font-weight: bolder;
  font-size: xx-large;
}

.send-frame {
  margin-top: 4rem;
  margin-left: 2rem;
}

.send-rr {
  margin-top: 4rem;
  float: right;
  margin-right: 4rem;
}

button.send-frame, button.send-rr {
  border: none;
  padding: 1rem;
  background-color: black;
  color: white;
  border-radius: 0.5rem;
  margin-top: 1.5rem;
  
}


</style>