<template>

  <div class="sen-rec-link">
    <button class="sender">A</button>
    <button class="link"></button>
    <button class="receiver">B</button>
  </div>

  <button class="send-frame" @click="sendFrame()">Send Frame</button>
  <button class="send-rr">Send RR</button>

  <Windows ref="windows" :receiver="B" :sender="A" :recWindow="B.buffer"></Windows>
  <Log @say-by="produceSentence" ref="log"></Log>

</template>

<script>
import { sender, receiver } from '../index'
import Windows from './Windows.vue'
import Log from './Log.vue'

export default {
  components: {
    Windows,
    Log
  },

  data() {
    return {
      A: sender,
      B: receiver
    }
  },

  methods: {
    sendFrame() {
      let stateFrame = this.A.sendFrame(this.B);
      let status = stateFrame[0];
      let sentFrame = stateFrame[1];
      this.$refs.log.senRecFrameWriter(status, sentFrame);

      this.$refs.windows.updateWindows();
    },

  }
}

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