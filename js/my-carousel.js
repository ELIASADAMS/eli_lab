function createCarousel(images, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const carouselId = "dynamic-carousel";

    // Carousel Wrapper
    const carousel = document.createElement('div');
    carousel.id = carouselId;
    carousel.classList.add('carousel', 'slide');
    carousel.setAttribute('data-ride', 'carousel');

    // Inner container
    const inner = document.createElement('div');
    inner.classList.add('carousel-inner');

    images.forEach((src, idx) => {
        const item = document.createElement('div');
        item.classList.add('item');
        if (idx === 0) item.classList.add('active');

        const img = document.createElement('img');
        img.classList.add('img-responsive');
        img.src = src;
        img.alt = `Slide ${idx + 1}`;

        item.appendChild(img);
        inner.appendChild(item);
    });

    carousel.appendChild(inner);

    // Controls
    const controlPrev = document.createElement('a');
    controlPrev.classList.add('left', 'carousel-control');
    controlPrev.href = `#${carouselId}`;
    controlPrev.setAttribute('data-slide', 'prev');
    controlPrev.innerHTML = '<span class="glyphicon glyphicon-chevron-left"></span>';

    const controlNext = document.createElement('a');
    controlNext.classList.add('right', 'carousel-control');
    controlNext.href = `#${carouselId}`;
    controlNext.setAttribute('data-slide', 'next');
    controlNext.innerHTML = '<span class="glyphicon glyphicon-chevron-right"></span>';

    carousel.appendChild(controlPrev);
    carousel.appendChild(controlNext);

    // Append to container
    container.appendChild(carousel);
}
