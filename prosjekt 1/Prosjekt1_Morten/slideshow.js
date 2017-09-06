var slideNumber = 1;            // startpoint for picture slideshow
showSlides(slideNumber);        // loads the first picture

// function called when back/forward buttons are pressed
// negative numbers will go to previous slide
function nextSlide(n) {
  showSlides(slideNumber += n);
}

// changes the picture slideshow to the appropriate picture
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");

  // check if slideNumber is within the correct range
  if(n > slides.length) {
    slideNumber = 1;
  }
  if(n < 1) {
    slideNumber = slides.length;
  }

  // sets all pictures to not show
  for(i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // shows the desired picture
  slides[slideNumber-1].style.display = "block";
}
