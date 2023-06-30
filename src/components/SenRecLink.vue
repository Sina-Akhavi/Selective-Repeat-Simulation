<template>

  <div class="sen-rec-link">
    <button class="sender">A</button>
    <button class="link"></button>
    <button class="receiver">B</button>
  </div>

  <button class="send-frame" @click="sendFrame()">Send Frame</button>
  <button class="send-frame" @click="sendDamagedFrame()">Send damaged Frame</button>
  <button class="send-rr" @click="sendRR()">Send RR</button>

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
      B: receiver,
      timeoutID: -1,
      timeOut: 10000,
    }
  },

  methods: {
    async sendFrame() {

      let stateFrame = await this.A.sendFrame(this.B);
      let status = stateFrame[0];
      let sentFrame = stateFrame[1];
      this.$refs.log.senRecFrameWriter(status, sentFrame);

      this.$refs.windows.updateWindows();
    },

    async sendRR() {
      // if (this.timeoutID != -1) {
      //   clearTimeout(this.timeoutID);
      // }

      let i = await this.B.sendRR(this.A);
      this.$refs.log.senRRWriter(i);
      this.$refs.windows.updateWindows();
      
      // this.timeoutID = setTimeout(async () => {
      //   this.alive = false;
      //   this.timeoutID = -1;
      //   this.$refs.log.PBitWriter();
        
      //   let i = await this.B.sendRR(this.A);
      //   this.$refs.log.senRRWriter(i);
      //   this.$refs.windows.updateWindows();

        
      // }, this.timeOut);

    },
      
    async sendDamagedFrame() {
      let frame = await this.A.sendDamagedFrame();
      this.$refs.log.damagedWriter(frame);
      this.$refs.windows.updateWindows();
    },

    drive() {
      console.time();

      document.getElementById('log-container').innerHTML = '';
      const frames = document.getElementById('input').value.split(',');

      for (let i = 0; i < frames.length; i++) {
        let firstLetter = frames[i].charAt(0);
        
        switch (firstLetter) {
          case 'f':
            this.sendFrame();
            break;
          
          case 'F':
            this.sendDamagedFrame();
            break;
          
          case 'R':
            this.sendRR();
            break;
        }
      }
      console.timeEnd();    
    }

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