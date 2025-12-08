$(document).ready(function(){
  $("button").click(function(){
    $("div").animate({  
      left: '150px',
      height: '200px',
      width: '200px',
      opacity: '0.5',
      backgroundColor: 'blue'
    }, 1000)
    .animate({
      left: '8px',
      height: '100px',
      width: '100px',
      opacity: '1',
      backgroundColor: 'green'
    }, 1000);
  });
});
