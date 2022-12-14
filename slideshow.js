let slideShow = 1;
showSlides(slideShow);

function nextSlides(n) {
    showSlides(slideShow += n);
}


function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) {slideShow = 1}
    if (n < 1) {slideShow = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideShow-1].style.display = "block";
}



// let slideShow = 0;
// showSlides();

// function showSlides() {
//     let i;
//     let slides = document.getElementsByClassName("slide");
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slideShow++;
//     if (slideShow > slides.length) {slideShow = 1}
//     slides[slideShow-1].style.display = "block";
//     setTimeout(showSlides, 1000); 
// }