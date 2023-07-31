var cursor = document.querySelector("#cursor");
var main = document.querySelector("#main");

main.addEventListener("mousemove" , function(dets) {
    cursor.style.left= dets.x + "px";
    cursor.style.top= dets.y + "px";

})

var overlay =document.querySelector (".overlay1");
var img = document.querySelector (".word1 img");
overlay.addEventListener ("mousemove" , function(dets){
    img.style.left=(dets.x-250) + "px";
    img.style.top=(dets.y-1100) + "px";
    img.style.scale = 1
    img.style.opacity = 1
})
// var overlay =document.querySelector (".overlay2");
// var img = document.querySelector (".word2 img");
// overlay.addEventListener ("mousemove" , function(dets){
//     img.style.left=(dets.x) + "px";
//     img.style.top=(dets.y) + "px";
//     img.style.scale = 1
//     img.style.opacity = 1
// })
// var overlay =document.querySelector (".overlay3");
// var img = document.querySelector (".word3 img");
// overlay.addEventListener ("mousemove" , function(dets){
//     img.style.left=(dets.x) + "px";
//     img.style.top=(dets.y) + "px";
//     img.style.scale = 1
//     img.style.opacity = 1
// })
overlay.addEventListener("mouseleave", function(dets) {
    img.style.scale=0;
    img.style.opacity = 0;
  });