document.addEventListener('DOMContentLoaded', function() {
    const scrollSection = document.querySelector('.blog__bottom');
    scrollSection.addEventListener('wheel', function(event) {
        if (event.deltaY !== 0) {
            event.preventDefault();
            scrollSection.scrollLeft += event.deltaY;
        }
    });
});