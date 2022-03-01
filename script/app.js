$(document).ready(function(){
   $("#downloadBtn").click(function(){
       $('body').css({
         overflow: 'scroll',
       })
       $("#downloadBtn").css({display: "none"});
       $("#load").html(`<div class="spinner-border my-5"></div>`);
       setTimeout(location.reload(), 2000)
   }); 
  $("#showcode").css({
    overflow: "scroll",
  })
});