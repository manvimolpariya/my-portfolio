const header =document.querySelector('header');
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky", window.scrollY > 100)
})
var typed = new Typed(".texted", {
    strings:['Software Developer','Web Developer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');


menu.onclick =()=>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}
window.onscroll =()=>{
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
   
}




