const carousel = document.querySelector('.carousel');
const projectItems = document.querySelectorAll('.project-item');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentIndex = 0;

function showProject(index) {
    // Hide all project items
    projectItems.forEach((item, i) => {
        item.style.display = (i === index) ? 'block' : 'none';
    });
    // Show the active image
    const images = projectItems[index].querySelectorAll('img');
    images.forEach((img, i) => {
        img.classList.remove('active');
        if (i === 0) img.classList.add('active'); // Only show the first image
    });
}

function updateCarousel() {
    showProject(currentIndex);
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : projectItems.length - 1;
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < projectItems.length - 1) ? currentIndex + 1 : 0;
    updateCarousel();
});

// Initialize the carousel
updateCarousel();
