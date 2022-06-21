import React from 'react'
import $ from 'jquery';

import Hero from './Hero';
import Header from './Header';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Footer from './Footer';
import Faq from './Faq';

function Frontpage() {
  return (
  <>
  <Header />
  <main id="main">
    <Hero />
    <About />
    <Services />
    <Faq />
    <Contact />
    <Footer />
  </main>
  </>
  );
}

export default Frontpage

$(document).ready(function(){
  $(window , 'body').on('scroll', function() {
    var newScroll = $(document).scrollTop();
    if (newScroll > 10) {
      $('#header').addClass('header_scrolled');
      $('#header').css("color", "red");
    }else{
      $('#header').removeClass('header_scrolled');
    }
  });
})