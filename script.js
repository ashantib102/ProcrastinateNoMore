document.addEventListener("DOMContentLoaded", function () {
  let slideIndex = 0;
  const slides = document.getElementsByClassName("slide");

  function showSlides() {
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    // Move to the next slide
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }

    // Show the current slide
    slides[slideIndex - 1].style.display = "block";
    
    // Call again after 5 seconds
    setTimeout(showSlides, 5000);
  }

  // Start the slideshow
  showSlides();
});
