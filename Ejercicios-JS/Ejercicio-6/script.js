showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    setTimeout(showSlides, 2000);
}