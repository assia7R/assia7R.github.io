jQuery(document).ready(function($) {
    // Scroll to the desired section on click
    // Make sure to add the `data-scroll` attribute to your `<a>` tag.
    // Example: 
    // `<a data-scroll href="#my-section">My Section</a>` will scroll to an element with the id of 'my-section'.
    function scrollToSection(event) {
      event.preventDefault();
      var $section = $($(this).attr('href')); 
      $('html, body').animate({
        scrollTop: $section.offset().top
      }, 500);
    }
    $('[data-scroll]').on('click', scrollToSection);
  }(jQuery));

  const btnScrollToTop = document.querySelector(".btnScrollToTop");
  btnScrollToTop.addEventListener("click", function() { 
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); 
  }); 
  window.addEventListener("scroll", () => { 
    if (window.pageYOffset > 100) { 
      btnScrollToTop.classList.add("active"); 
    } else { 
      btnScrollToTop.classList.remove("active"); 
    } 
  });


  