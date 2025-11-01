let button=document.querySelector(".menu");
button.addEventListener("click",open)
function open(e){
    e.preventDefault()
   document.querySelector(".droplist").classList.toggle("show")
   console.log(e.target)
}
window.addEventListener("click", function(e) {
  if (!e.target.closest(".menu") && !e.target.closest(".droplist")) {
    document.querySelector(".droplist").classList.remove("show");
  }
});

index=0
image()
function image(){
let a=document.getElementsByClassName("container");

for(i=0;i<a.length;i++){
    a[i].style.display="none";
}
index+=1
if(index>a.length){
    index=1
}console.log(index)
for(index;index<=a.length;index++){
    a[index-1].style.display="block";
    break
}
setTimeout(image,2000)
}


let log=document.getElementById("login")
log.addEventListener('click',over)

function over(e){
  e.preventDefault();
  console.log(e.target)
  document.querySelector(".overlay").style.display='block';
  document.querySelector(".login-detail").style.display='flex';
   document.body.style.overflow = 'hidden';

}
   window.addEventListener("click", function(e) {
   if (e.target.closest(".overlay")){
    document.querySelector(".login-detail").style.display='none';
    document.querySelector(".overlay").style.display='none';
       document.body.style.overflow = 'auto';
  }
});