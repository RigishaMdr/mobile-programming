$(document).ready(function(){
  $("#findBus").click(function(){
    let dest = $("#destination").val().toLowerCase();

    if(dest === "ratnapark"){
      $("#result").text("Available buses: 5, 12, 21, 32");
    } else if(dest === "jawalakhel"){
      $("#result").text("Available buses: 3, 4, 20");
    } else {
      $("#result").text("No route found. Try another destination.");
    }
  });
});
function toggleMenu() {
  $("#menu").toggleClass("hidden");
}

