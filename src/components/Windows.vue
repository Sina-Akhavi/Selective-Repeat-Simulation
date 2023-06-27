<template>

  <div id="windows-display">

    <div id="a-windows" style="display: inline-block;">
      <p>A window: </p>
      <table>
        <tr>
          <td>0</td>
          <td>1</td>
          <td>2</td>
          <td style="background-color: yellow;">3</td>
          <td style="background-color: yellow;">4</td>
          <td>5</td>
          <td>6</td>
        </tr>
      </table> 
    </div>
    
    
    <div id="b-windows" style="display: inline-block; float: right;">
      <p>A window: </p>
      <table>
        <tr>
          <td>0</td>
          <td>1</td>
          <td>2</td>
          <td style="background-color: yellow;">3</td>
          <td style="background-color: yellow;">4</td>
          <td>5</td>
          <td>6</td>
        </tr>
      </table>
    </div>

  </div>

</template>&nbsp;

<script></script>

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