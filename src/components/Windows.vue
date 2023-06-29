<template>

  <div id="windows-display">

    <div id="a-windows" style="display: inline-block;">
      <p>A window: </p>
      <table>
        <tr class="col-container1">
          <td v-for="(frame, index) in sender.frames" class="a"
              :style="[(index < 4)? {'background-color':'red'} : {'background-color' :'yellow'}]">{{ frame }}</td>
        </tr>
      </table> 
    </div>
    
    
    <div id="b-windows" style="display: inline-block; float: right;">
      <p>B window: </p>
      <table>
        <tr class="col-container2">
          <td v-for="(frame, index) in receiver.frames" class="b"
              :style="[(index < 4)? {'background-color':'red'} : {'background-color' :'yellow'}]">{{ frame }}</td>
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

      const senBuffer = new String(this.sender.buffer).split(',');
      const recBuffer = new String(this.receiver.buffer).split(',');


      senBuffer.forEach((elem) => {
        console.log(elem);
        senElements[new Number(elem)].style.backgroundColor = 'red';
      })
    

      recBuffer.forEach((elem) => {
        recElements[new Number(elem)].style.backgroundColor = 'red';
      })

    }
  },

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