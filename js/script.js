// sticky header start
window.addEventListener("scroll", function(){
	var header = document.querySelector(".header_area");
	header.classList.toggle("sticky", window.scrollY > 0);
});
// sticky header end
// go top start
let mytopbtn = document.getElementById("myTop");
window.onscroll = function(){scrollFunction()};
function scrollFunction(){
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
    mytopbtn.style.display = "block";
  }else{
    mytopbtn.style.display = "none";
  }
}
function topFunction(){
  document.body.scrollTop =0;
  document.documentElement.scrollTop = 0;
}
// go top end
// preloder start
$(document).ready(function(){
  $('.js-preloader').preloadinator({
    scroll:false,
    minTime: 1000,
    animation: 'fadeOut',
    animationDuration: 300
  });
});
// preloder end
//    wow js 
new WOW().init();
//    wow js 
// aos 
AOS.init({
  duration: 1200
});
// aos 
// jQ ui start
// slick slider start
$(document).ready(function(){
    $('.lazy').slick({
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 3000,
        // dots: false,
     responsive: [
       {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: true,
         }
       },
       {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
         }
       },{
        breakpoint: 575,
        settings:{
          slidesToShow: 1,
        } 
      }
     ]
   }); 
   });
// slick slider end 
// chef socail icon start 
// item 1 
let toggle = document.querySelector('.toggle');
let menu = document.querySelector('.chef_socail_icon');
toggle.onclick = function(){
  menu.classList.toggle('active')
}
// item 2
let toggle2 = document.querySelector('.toggle2');
let menu2 = document.querySelector('.chef_socail2');
toggle2.onclick = function(){
  menu2.classList.toggle('active2')
}
// item 3
let toggle3 = document.querySelector('.toggle3');
let menu3 = document.querySelector('.chef_socail3');
toggle3.onclick = function(){
  menu3.classList.toggle('active3')
}
// chef socail icon end
// food gallary start
$(document).ready(function(){
  $('.lite').venobox({
  });               
}); 
// food gallary end
// counter me section start
$(document).ready(function(){
  $("#count_item1").countMe(10, 10);
  $("#count_item2").countMe(10, 10);
  $("#count_item3").countMe(10, 10);       
  $("#count_item4").countMe(10, 10);       
  }); 
// counter me section end
// jQ ui end