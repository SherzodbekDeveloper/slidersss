

let next = document.getElementById("next")
let prev = document.getElementById("prev")
let images = document.querySelectorAll("img")

let i = 0;

next.addEventListener("click", () => {
   images[i].style.display = 'none'
   i++;

   if( images.length <= i ){
    i = 0
   }
   images[i].style.display ='block'

})


setInterval(() => {
    images[i].style.display = 'none'
    i++;
 
    if( images.length <= i ){
     i = 0
    }
    images[i].style.display ='block'
 
 }, 4000)

prev.addEventListener("click", () => {
    images[i].style.display = 'none'
    i--;
 
    if( i < 0 ){
        i = images.length -1   
    }
    images[i].style.display ='block'
 
 })