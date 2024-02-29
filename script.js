document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.image-container img');

    images.forEach(image => {
        image.addEventListener('click', () => {
            const imageName = image.nextElementSibling.textContent;
            alert(`You clicked on ${imageName}`);
        });
    });
});
