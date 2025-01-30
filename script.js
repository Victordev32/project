const header=document.querySelector("header");

const button=document.querySelector("header span")
const icon=document.querySelector("header span i")

const li=document.querySelectorAll("nav ul li");


const navul=document.querySelector("nav ul");
button.onclick=()=>{
    button.style.zIndex="1000";
   navul.classList.toggle("open");
    icon.classList.toggle("fa-times");
    
}
document.onscroll=()=>{
    
    header.style.position="fixed";
    header.style.boxShadow="2px 0 2px black"
    header.style.background="white";
    navul.classList.remove("open");
    icon.classList.remove("fa-times")
}

