var i = 0; //Start point
var images = [];
var time = 3000;

// Image List

images[0]= 'football.jpg';
images[1]= 'img1.jpg';
images[2]= 'football.jpg';

// Function to change the image

function changeImg(){
    document.slider.src = images[i];
    if (i < images.length-1){
        i++;
    } else {
        i = 0;
    }
    setTimeout("changeImg()", time);
}

window.onload = changeImg;




// Script For Second Slider

const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

//Buttons 

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//Counter

let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

