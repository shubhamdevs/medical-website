let slideIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slider img');
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    }
    const offset = -slideIndex * 100;
    document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
}

function openNavMenu() {
    document.querySelector('.nav_menu_container').classList.add('open_nav_menu_container');
    document.querySelector('.menu-div').classList.add('open');
    document.querySelector('.cross-div').style.display = 'block'; // Display the close icon
}

function closeNavMenu() {
    document.querySelector('.nav_menu_container').classList.remove('open_nav_menu_container');
    document.querySelector('.menu-div').classList.remove('open');
    document.querySelector('.cross-div').style.display = 'none'; // Hide the close icon
}



showSlide(slideIndex);

