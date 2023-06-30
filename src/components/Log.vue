<template>
<hr id="hr-left">  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; LOG 
<hr id="hr-right">

<div id="log-container">


</div>

</template>

<script>
export default {
  data() {
    return {
      logContainer: undefined
    }
  }, 
  
  methods: {
    senRecFrameWriter(status, frame) {
      const logContainer = this.logContainer;
      let html1 = logContainer.innerHTML;
      
      let addedHtml = '';
      if (status == 1) {
        addedHtml = `<p style="display: inline-block;">Frame${frame} sent </p>
            <p style="display: inline-block; float: right;" >Frame${frame} received </p> <br>`;
      } else {
        let nonReachedFrame = frame - 1;
        addedHtml = `<p style="display: inline-block;">Frame${frame} sent </p>
            <p style="display: inline-block; float: right;" > Frame${frame} received & 
            SREJ${nonReachedFrame} sent </p><br>`;
        
        addedHtml += `<p style="display: inline-block;">Frame${nonReachedFrame} sent </p>
            <p style="display: inline-block; float: right;" > Frame${nonReachedFrame} received </p><br>`;
      }
      
      logContainer.innerHTML = html1 + addedHtml;

    },

    senRRWriter(i) {
      const logContainer = this.logContainer;
      let html1 = logContainer.innerHTML;
      
      let addedHtml = `<p style="display: inline-block;">RR${i} received </p>
            <p style="display: inline-block; float: right;" >RR${i} sent </p> <br>`;
      
      addedHtml += `<p style="display: inline-block;">Frame${i} sent </p>
            <p style="display: inline-block; float: right;" >Frame${i} received </p> <br>`;

      logContainer.innerHTML = html1 + addedHtml;
    },
    
    damagedWriter(frame) {
      const logContainer = this.logContainer;
      let html = logContainer.innerHTML;

      let addedHtml = `<p style="display: inline-block;"> Frame${frame} sent </p><br>`;
      
      logContainer.innerHTML = html + addedHtml;
    },

    PBitWriter() {
      const logContainer = this.logContainer;
      let html = logContainer.innerHTML;

      let addedHtml = `<p style="display: inline-block;">RRP(Bit = 1) sent </p>
            <p style="display: inline-block; float: right;" >RRP(Bit = 1) received </p> <br>`
      
      logContainer.innerHTML = html + addedHtml;
    }
    
  },



  mounted() {
    this.logContainer = document.getElementById('log-container');
    console.log(this.logContainer);
  }
}

</script>


<style>
#hr-left {
  float: left;
  width: 35rem;
}

#hr-right {
  float: right;
  width: 35rem;
}


</style>