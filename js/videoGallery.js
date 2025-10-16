export function createVideoGallery(container, sectionsData) {
    container.innerHTML = ''; // Clear existing content

    sectionsData.forEach(({ label, title, videos }) => {
        // Create section element with aria-label
        const section = document.createElement('section');
        section.className = 'video-section';
        section.setAttribute('aria-label', label);

        // Section title
        const h2 = document.createElement('h2');
        h2.className = 'section-title';
        h2.textContent = title;
        section.appendChild(h2);

        // Grid container for video items
        const grid = document.createElement('div');
        grid.className = 'video-grid';

        videos.forEach(({ src, title, description }) => {
            const item = document.createElement('div');
            item.className = 'video-item';
            item.setAttribute('role', 'listitem');

            const wrapper = document.createElement('div');
            wrapper.className = 'video-wrapper';

            const iframe = document.createElement('iframe');
            iframe.src = src;
            iframe.title = title;
            iframe.loading = 'lazy';
            iframe.allowFullscreen = true;

            wrapper.appendChild(iframe);
            item.appendChild(wrapper);

            const h3 = document.createElement('h3');
            h3.className = 'video-title';
            h3.textContent = title;
            item.appendChild(h3);

            const p = document.createElement('p');
            p.className = 'video-description';
            p.textContent = description;
            item.appendChild(p);

            grid.appendChild(item);
        });

        section.appendChild(grid);
        container.appendChild(section);
    });
}
