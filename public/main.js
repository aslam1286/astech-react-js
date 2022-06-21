// (function() {
//   "use strict";

//   const select = (el, all = false) => {
//     el = el.trim()
//     if (all) {
//       return [...document.querySelectorAll(el)]
//     } else {
//       return document.querySelector(el)
//     }
//   }

//   const on = (type, el, listener, all = false) => {
//     let selectEl = select(el, all)
//     if (selectEl) {
//       if (all) {
//         selectEl.forEach(e => e.addEventListener(type, listener))
//       } else {
//         selectEl.addEventListener(type, listener)
//       }
//     }
//   }

//   const onscroll = (el, listener) => {
//     el.addEventListener('scroll', listener)
//   }

//   let navbarlinks = select('#navbar .scrollto', true)
//   const navbarlinksActive = () => {
//     let position = window.scrollY + 200
//     navbarlinks.forEach(navbarlink => {
//       if (!navbarlink.hash) return
//       let section = select(navbarlink.hash)
//       if (!section) return
//       if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
//         navbarlink.classList.add('active')
//       } else {
//         navbarlink.classList.remove('active')
//       }
//     })
//   }
//   window.addEventListener('load', navbarlinksActive)
//   onscroll(document, navbarlinksActive)

  
//   const scrollto = (el) => {
    
    
//     let header = select('#header')
//     let offset = header.offsetHeight
//     // offset = 445>>>>>>>443
//     let elementPos = select(el).offsetTop
//     window.scrollTo({
//       // top: elementPos - offset,
//       top: elementPos - 75,
//       behavior: 'smooth'
//     })
//   }

//   let backtotop = select('.back-to-top')
//   if (backtotop) {
//     const toggleBacktotop = () => {
//       if (window.scrollY > 100) {
//         backtotop.classList.add('active')
//       } else {
//         backtotop.classList.remove('active')
//       }
//     }
//     window.addEventListener('load', toggleBacktotop)
//     onscroll(document, toggleBacktotop)
//   }

//   on('click', '.mobile-nav-toggle', function(e) {
//     select('#navbar').classList.toggle('navbar-mobile')
//     this.classList.toggle('bi-list')
//     this.classList.toggle('bi-x')
//   })

//   on('click', '.navbar .dropdown > a', function(e) {
//     if (select('#navbar').classList.contains('navbar-mobile')) {
//       e.preventDefault()
//       this.nextElementSibling.classList.toggle('dropdown-active')
//     }
//   }, true)

//   on('click', '.scrollto', function(e) {
//     if (select(this.hash)) {
//       e.preventDefault()

//       let navbar = select('#navbar')
//       if (navbar.classList.contains('navbar-mobile')) {
//         navbar.classList.remove('navbar-mobile')
//         let navbarToggle = select('.mobile-nav-toggle')
//         navbarToggle.classList.toggle('bi-list')
//         navbarToggle.classList.toggle('bi-x')
//       }
//       scrollto(this.hash)
//     }
//   }, true)

//   window.addEventListener('load', () => {
//     if (window.location.hash) {
//       if (select(window.location.hash)) {
//         scrollto(window.location.hash)
//       }
//     }
//   });


// 	$(window , 'body').on('scroll', function() {
//     var newScroll = $(document).scrollTop();
//     if (newScroll > 10) {
//       $('#header').addClass('header_scrolled');
//     }else{
//       $('#header').removeClass('header_scrolled');
//     }
        
//   });

//   $(function(){
//       $('a').each(function(){
//           if ($(this).prop('href') == window.location.href) {
//               $(this).addClass('active'); $(this).parents('li').addClass('active');
//           }
//       });
//   });

 
// })()

/*Hamburgers Menu Start*/
// $(document).ready(function(){

// 	var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};
//   var hamburgers = document.querySelectorAll(".hamburger");
//   if (hamburgers.length > 0) {
//     forEach(hamburgers, function(hamburger) {
//       hamburger.addEventListener("click", function() {
//         this.classList.toggle("is-active");
//       }, false);
//     });
//   };
  
//   $('.navbar-nav a').click(function(){
//     $(".navbar-collapse").collapse('hide');
//     $("a.hamburger").removeClass("is-active");
//   });
    
// });

/*Hamburgers Menu End*/					



$(document).ready(function(){
  $(window , 'body').on('scroll', function() {
    alert("okay>>>>>");

  });



  // $(window , 'body').on('scroll', function() {
  //   console.log("okkkkkkkkkkkkk");
  //   var newScroll = $(document).scrollTop();
  //   if (newScroll > 10) {
  //     $('#header').addClass('header_scrolled');
  //   }else{
  //     $('#header').removeClass('header_scrolled');
  //   }
        
  // });


  // var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};
  // var hamburgers = document.querySelectorAll(".hamburger");
  // if (hamburgers.length > 0) {
  //   forEach(hamburgers, function(hamburger) {
  //     hamburger.addEventListener("click", function() {
  //       this.classList.toggle("is-active");
  //     }, false);
  //   });
  // };

  // $('.navbar-nav a').click(function(){
  //   $(".navbar-collapse").collapse('hide');
  //   $("a.hamburger").removeClass("is-active");
  // });

})