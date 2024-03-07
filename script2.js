document.addEventListener('DOMContentLoaded', () => {
    const artImages = document.querySelectorAll('.guerilla-art-gallery .guerilla-art-item img');

    artImages.forEach(image => {
        image.addEventListener('click', () => {
            // Use the alt text as a unique identifier for each art piece
            const artName = image.alt.trim().toLowerCase().replace(/[^a-zA-Z0-9]+/g, '-');

            // Construct the URL for the story page based on the artName
            // Assuming you have a directory called 'stories' where each story is a separate HTML file
            // Example: 'lifelike-sculpture-on-public-bench.html'
            const storyUrl = `stories/lifelike-sculpture-on-public-bench.html`;

            // Redirect the user to the story page
            window.location.href = storyUrl;
        });
    });
});
