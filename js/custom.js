
// Pre loader JS

$(window).on('load', function() {
    $('.preloader').delay(1500).fadeOut('slow', function() {
      $(this).remove();
    });
  });

  // const docBody = document.getElementById('docBody')


// Responsive Mobile Navbar
 const navContainer = document.getElementById('navbarSupportedContent')
 const navbarToggler = document.getElementById('nav-toggler')

 navbarToggler.addEventListener('click', function(){

    if(navContainer.classList.contains('show-nav')){
      docBody.classList.remove('black-mask')
        navContainer.classList.remove('show-nav')
        this.classList.remove('close-nav-icon')
       
    }else{
        docBody.classList.add('black-mask')
        this.classList.add('close-nav-icon')
        navContainer.classList.add('show-nav')
    }

 })


//  Navbar Dropdown Shower

const dropdownToggler = document.getElementsByClassName('dropdown-toggler')
const dropdown = document.getElementsByClassName('dropdown')

for(let i = 0; i < dropdownToggler.length; i++){

    dropdownToggler[i].addEventListener('click', function(){

        if(dropdown[i].classList.contains('show-dropdown')){

            this.classList.remove('show')
            dropdown[i].classList.remove('show-dropdown')
        }else{

            this.classList.add('show')
            dropdown[i].classList.add('show-dropdown')
        }
    })

}

// Navbar Sticky Top
let navbar = document.getElementById('navbar')

window.addEventListener('scroll', function(){

  if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){

      navbar.classList.add('sticky-menu')
  }else{
      navbar.classList.remove('sticky-menu')
  }
})




// Modal Backdrop
let modalBackDrop = document.getElementById('modal-backdrop')


// Search Off Canvas JS
const searchOffCanvas = document.getElementById('search-off-canvas')
const searchCanvasClose = document.getElementById('search-canvas-close')
const searchBtn = document.getElementById('search-btn')

searchBtn.addEventListener('click', function(){

    searchOffCanvas.style.visibility = 'visible'
    searchOffCanvas.style.transform = 'none'
    modalBackDrop.style.visibility = 'visible'


})

searchCanvasClose.addEventListener('click', function(){

    searchOffCanvas.style.visibility = 'hidden'
    searchOffCanvas.style.transform = 'translateY(-100%)'
    modalBackDrop.style.visibility = 'hidden'
})

modalBackDrop.addEventListener('click', function(){

    searchOffCanvas.style.visibility = 'hidden'
    searchOffCanvas.style.transform = 'translateY(-100%)'
    this.style.visibility = 'hidden'
})


// Feedback Section

$('.feedback-slider').slick({

    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay : true,
    dots: true,
    arrows: false,
    centerMode: true,
    centerPadding:  '0px',

    responsive: [
        {
          breakpoint: 1199.98,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 991.98,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            centerPadding:  '0',
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]

});

// Testimonial Section

$('.testimonial-slider').slick({
  dots: true,
  arrows : false,
  infinite: true,
  autoplay : true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  autoplaySpeed: 1500,
  pauseOnFocus : false,
  });


// counter

$('.numberCount').counterUp({
    delay: 10,
    time: 1000
});


// Back To Top Button

const backTopBtn = document.getElementById('back-top-btn')

window.addEventListener('scroll', function showBackToTop(){

  if(document.body.scrollTop > 40 || document.documentElement.scrollTop > 40){

      backTopBtn.style.visibility = 'visible'
      backTopBtn.style.bottom = '20px'

  }else{

      backTopBtn.style.visibility = 'hidden'
      backTopBtn.style.bottom = '0'
  }

})

// Backtop Button
  $("#back-top-btn").on('click', function() {
    $("html, body").animate(
        { scrollTop: "0" }, 1000);
  })

// Aos JS

AOS.init();