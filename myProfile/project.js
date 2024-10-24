document.addEventListener("DOMContentLoaded", () => {
    const carousels = document.querySelectorAll(".carousel");

    carousels.forEach(carousel => {
        let currentIndex = 0;
        const images = carousel.querySelectorAll("img");
        const totalImages = images.length;

        // Show the first image
        images[currentIndex].classList.add("active");

        // Function to change the image
        const showNextImage = () => {
            images[currentIndex].classList.remove("active");
            currentIndex = (currentIndex + 1) % totalImages;
            images[currentIndex].classList.add("active");
        };

        // Optional: Automatically change images every 5 seconds
        setInterval(showNextImage, 5000);
    });
});
