/**
 * exhibitions.js
 *
 * Dynamically creates exhibition blocks inside a container div.
 *
 * @param {Array} exhibitions - Array of exhibition objects:
 *   {
 *     title: 'Meatpacking Biennale: Part 1',
 *     date: 'February 22, 2022 at 19:00 PM',
 *     url: 'meatpacking_biennale.html',
 *     imgSrc: '../../../images/Performances/meatbiennale.jpg',
 *     imgAlt: 'Exhibition preview',
 *     description: '"I once had a vision: I saw true horror...' // full descriptive text
 *   }
 * @param {string} containerId - ID of container div in which to insert exhibitions.
 */
function createExhibitions(exhibitions, containerId) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Container with id "${containerId}" not found.`);
        return;
    }

    container.innerHTML = ''; // Clear previous content

    exhibitions.forEach((exhibition, index) => {
        // Create row for this exhibition
        const row = document.createElement('div');
        row.className = 'row';

        // Inner col-md-8 as per sample
        const col = document.createElement('div');
        col.className = 'col-md-8';

        // Title block with h2 and inner paragraphs for title and empty <p>
        const h1 = document.createElement('h1');
        h1.classList.add('display-1');  // Bootstrap large display heading class
        h1.textContent = exhibition.title;
        col.appendChild(h1);


        // Empty <p> placeholders for vertical spacing
        col.appendChild(document.createElement('p'));

        // Date with clock icon
        const dateP = document.createElement('p');
        dateP.innerHTML = `<i class="fa fa-clock-o"></i> ${exhibition.date}`;
        col.appendChild(dateP);

        col.appendChild(document.createElement('p'));

        // Horizontal rule
        col.appendChild(document.createElement('hr'));

        // Image link with responsive, hover image
        const imgLink = document.createElement('a');
        imgLink.href = exhibition.url;
        const img = document.createElement('img');
        img.className = 'img-responsive img-hover';
        img.src = exhibition.imgSrc;
        img.alt = exhibition.imgAlt || '';
        imgLink.appendChild(img);
        col.appendChild(imgLink);

        col.appendChild(document.createElement('hr'));

        // Empty <p> for spacing
        col.appendChild(document.createElement('p'));

        // Description paragraph (with ampersand quotes fixed if needed)
        const descP = document.createElement('p');
        descP.innerHTML = exhibition.description;
        col.appendChild(descP);

        col.appendChild(document.createElement('p'));

        // Horizontal rule to separate exhibitions
        col.appendChild(document.createElement('hr'));

        // Append col to row, then row to container
        row.appendChild(col);
        container.appendChild(row);
    });
}

export { createExhibitions };
