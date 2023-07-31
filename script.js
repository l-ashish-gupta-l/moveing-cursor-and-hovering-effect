var cursor = document.querySelector("#cursor");
var main = document.querySelector("#main");

main.addEventListener("mousemove" , function(dets) {
    cursor.style.left= dets.x + "px";
    cursor.style.top= dets.y + "px";

})



document.querySelector (".overlay1").addEventListener ("mousemove" , function(dets){
    document.querySelector (".word1 img").style.left=(dets.x-250) + "px";
    document.querySelector (".word1 img").style.top=(dets.y-1100) + "px";
    document.querySelector (".word1 img").style.scale = 1
    document.querySelector (".word1 img").style.opacity = 1
    cursor.style.opacity = 0; 
})

document.querySelector (".overlay1").addEventListener("mouseleave", function(dets) {
   document.querySelector (".word1 img").style.scale = 0;
   document.querySelector (".word1 img").style.opacity = 0;
   cursor.style.opacity = 1; 
  });




  document.querySelector (".overlay2").addEventListener ("mousemove" , function(dets){
    document.querySelector (".word2 img").style.left=(dets.x-2150) + "px";
    document.querySelector (".word2 img").style.top=(dets.y-1100) + "px";
    document.querySelector (".word2 img").style.scale = 1
    document.querySelector (".word2 img").style.opacity = 1
    cursor.style.opacity = 0;
})

document.querySelector (".overlay2").addEventListener("mouseleave", function(dets) {
   document.querySelector (".word2 img").style.scale = 0;
   document.querySelector (".word2 img").style.opacity = 0;
   cursor.style.opacity = 1; 

  });





document.querySelector (".overlay3").addEventListener ("mousemove" , function(dets){
    document.querySelector (".word3 img").style.left=(dets.x-4130) + "px";
    document.querySelector (".word3 img").style.top=(dets.y-1130) + "px";
    document.querySelector (".word3 img").style.scale = 1
    document.querySelector (".word3 img").style.opacity = 1
    cursor.style.opacity = 0;
})

document.querySelector (".overlay3").addEventListener("mouseleave", function(dets) {
   document.querySelector (".word3 img").style.scale = 0;
   document.querySelector (".word3 img").style.opacity = 0;
   cursor.style.opacity = 1; 
});


