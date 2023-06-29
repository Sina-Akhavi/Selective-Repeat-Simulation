<template>
<hr id="hr-left">  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; LOG 
<hr id="hr-right">

<div id="log-container">


</div>

</template>

<script>
export default {
  
  methods: {
    senRecFrameWriter(status, frame) {
      const logContainer = document.getElementById('log-container');
      let html1 = logContainer.innerHTML;
      
      let addedHtml = '';
      if (status == 1) {
        addedHtml = `<p style="display: inline-block;">Frame${frame} was sent </p>
              <p style="display: inline-block; float: right;" >Frame${frame} was received </p> <br>`;
      } else {
        let nonReachedFrame = frame - 1;
        addedHtml = `<p style="display: inline-block;">Frame${frame} was sent </p>
              <p style="display: inline-block; float: right;" >SREJ${nonReachedFrame} sent </p>`;
      }
      
      logContainer.innerHTML = html1 + addedHtml;

    }
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