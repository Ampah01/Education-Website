let menuEl = document.getElementById('menu-button');
let listEl = document.querySelector('.nav-list');
let closeEl = document.getElementById('menu-close');
let navEl = document.querySelector('.js-nav');
let navBarBgEl = document.querySelector('.js-navbar-bg');
const button1El = document.querySelector('.login-button');
const closeIconEl = document.querySelector('.close-icon');
const lastContainerEl = document.querySelector('.last-container');

menuEl.addEventListener('click',()=>{
  listEl.classList.add('active')
});

 closeEl.addEventListener('click',()=>{
  listEl.classList.remove('active')
});

window.addEventListener('scroll', ()=>{
  if (window.scrollY > navBarBgEl.offsetTop - 
       navEl.offsetHeight){
       navEl.classList.add('active')
      } else {
       navEl.classList.remove('active')
      }
 })  

button1El.addEventListener('click', ()=>{
  lastContainerEl.classList.remove('active')

});

closeIconEl.addEventListener('click', ()=>{
  lastContainerEl.classList.add('active')
})