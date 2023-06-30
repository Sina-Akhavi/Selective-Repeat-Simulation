<template>

  <div id="windows-display">

    <div id="a-windows" style="display: inline-block;">
      <p>A window: </p>
      <table>
        <tr class="col-container1">
          <td v-for="(frame, index) in sender.frames" class="a"
              :style="[(index <= sender.shadedTo)? {'background-color':'green'} : {'background-color' :'white'}]">{{ frame }}</td>
        </tr>
      </table> 
    </div>
    
    
    <div id="b-windows" style="display: inline-block; float: right;">
      <p>B window: </p>
      <table>
        <tr class="col-container2">
          <td v-for="(frame, index) in receiver.frames" class="b"
              :style="[(index <= receiver.shadedTo)? {'background-color':'green'} : {'background-color' :'white'}]">{{ frame }}</td>
        </tr>
      </table>
    </div>

  </div>

</template>

<script>


export default {
  props: ['sender', 'receiver', 'recWindow'],

  methods: {
    updateWindows() {
      const senElements = document.getElementsByClassName('a')
      const recElements = document.getElementsByClassName('b')
      

      for (let i = 0; i < senElements.length; i++) {
        senElements[i].style.backgroundColor = 'white';
      }

      for (let i = 0; i < recElements.length; i++) {
        recElements[i].style.backgroundColor = 'white';
      }

      console.log(this.senderBuffer);
      this.senderBuffer.forEach((bufEl) => {

        senElements[bufEl].style.backgroundColor = 'red';
      }) 
      
      this.receiverBuffer.forEach((bufEl) => {
        recElements[bufEl].style.backgroundColor = 'red';
      }) 

      for (let i = this.sender.shadedFrom; i <= this.sender.shadedTo; i++) {
        senElements[i].style.backgroundColor = 'green';
      }


      for (let i = this.receiver.shadedFrom; i <= this.receiver.shadedTo; i++) {
        recElements[i].style.backgroundColor = 'green';
      }
      

    },

  },

  computed: {
    senderBuffer() {
      return this.sender.buffer;
    },
    receiverBuffer() {
      return this.receiver.buffer;
    },
    
  }

}

</script>

<style>

#windows-display {
  margin-bottom: 3rem;
}

table, td {
  border:1px solid black;
}

#a-windows, #b-windows {
  margin-top: 4rem;
}

#a-windows {
  margin-left: 2rem;
}

#b-windows {
  margin-right: 2rem;
}


</style>