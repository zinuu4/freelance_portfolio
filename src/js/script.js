// LAPTOP
// let _animated = [
//     'computer',
//     'shadow',
//     'hole',
//     'code-cover-screen'
// ].map((id) => document.getElementById(id));
let getById = (id) => document.getElementById(id)

let _animated = [
    getById('computer'),
    getById('shadow'),
    getById('hole'),
    getById('code-cover-screen')
];

let btn = document.querySelector('.btn_laptop');

btn.addEventListener('click', () => {
    _animated.forEach(function(el){
        el.style.animation = 'none'; 
        setTimeout(() => {
            el.style.animation = '';
          }, 10);
     });    
});

// MENU
const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close'),
      overlay = document.querySelector('.menu__overlay');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

overlay.addEventListener('click', () => {
    menu.classList.remove('active');
});

window.addEventListener("keydown", (e) => {
    if (e.key == 'Escape') {
        menu.classList.remove('active');
    }
});

//WOW
wow = new WOW(
    {
        offset: 200,
        mobile: true,
    }
)
wow.init();

// SKILLS - RATINGS %
const counters = document.querySelectorAll('.skills__ratings-counter'),
      lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});

// Page up
  $(document).ready(function(){
    //Smooth scroll and pageup
  
    $(window).scroll(function() {
      if ($(this).scrollTop() > 1200) {
        $('.pageup').fadeIn();
      } else {
        $('.pageup').fadeOut();
      }
    });
  
    // $("a[href^='#'").click(function() {
    //   const _href = $(this).attr("href");
    //   $("html, body").animate({scrollTop: $(_href).offset().top+"-x"});
    //   return false;
    // });
    $("a[href=#up]").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 1600, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });