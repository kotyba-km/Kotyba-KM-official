const menu_btn = document.querySelector(".btn");
const menu = document.querySelector('.social-menu')
const close_menu = document.querySelector('.close')
menu_btn.addEventListener('click',function() {
  menu.classList.add('is-active')
});
close_menu.addEventListener('click' ,function(){
  menu.classList.remove('is-active')
})
const colorMode1 = document.querySelector('.color-button1');
const body = document.querySelector('body');
const navy = document.querySelector('.navy');
const heroSection = document.querySelectorAll('.hero-section');
const menuOption = document.querySelectorAll('.social-menu a');
const s1 = document.querySelector('.s1');
const spans = document.querySelectorAll('.span-with-pseudo');
const skillTitle = document.querySelectorAll('.skill-title');
function changeToDark() {
  body.style.animation="0";
  body.style.animation="intro2 7s linear infinite";
  menu.style.background="#151517";
  navy.style.background="linear-gradient(90deg, rgba(21,21,23,1) 0%, rgba(40,38,38,1) 50%, rgba(21,21,23,1) 100%)"
  s1.style.background="#151517";
  for (let i = 0; i < heroSection.length; i++) {
    heroSection[i].style.backgroundColor = "#151517";
  }
  for (let i = 0; i < menuOption.length; i++) {
    menuOption[i].style.backgroundColor = "#2a2a2d";
  }
  spans.forEach(span => {
    span.classList.add('changed-background');
  });
  for (let i = 0; i < skillTitle.length; i++) {
    skillTitle[i].style.backgroundColor = "#151517";
  }
}
function changeToBlue() {
  body.style.animation="0";
  body.style.animation="intro 7s linear infinite";
  menu.style.background="#000634";
  navy.style.background="linear-gradient(45deg, rgba(27,0,140,1) 0%, rgba(5,0,25,1) 100%)"
  s1.style.background="#000832";
  for (let i = 0; i < heroSection.length; i++) {
    heroSection[i].style.backgroundColor = "#000832";
  }
  for (let i = 0; i < menuOption.length; i++) {
    menuOption[i].style.backgroundColor = "#000a58";
  }
  spans.forEach(span => {
    span.classList.remove('changed-background');
  });
  for (let i = 0; i < skillTitle.length; i++) {
    skillTitle[i].style.backgroundColor = "#000832";
  }
}