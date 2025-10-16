// artPracticeGallery.js
export function renderArtPracticeSection(containerId, items) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Container with id "${containerId}" not found.`);
        return;
    }
    container.innerHTML = ''; // clear existing content

    items.forEach(({ iconClass = '', iconText = '', link, imgSrc, imgAlt, title }) => {
        // Create row div
        const row = document.createElement('div');
        row.className = 'row align-items-center';

        // Icon column
        const iconCol = document.createElement('div');
        iconCol.className = 'col-md-1 text-center';
        if (iconClass || iconText) {
            const iconP = document.createElement('p');
            if (iconClass) {
                const iconI = document.createElement('i');
                iconI.className = iconClass;
                iconP.appendChild(iconI);
            }
            if (iconText) {
                const textP = document.createElement('p');
                textP.textContent = iconText;
                iconCol.appendChild(iconP);
                iconCol.appendChild(textP);
            } else {
                iconCol.appendChild(iconP);
            }
        }
        row.appendChild(iconCol);

        // Image/link column
        const imgCol = document.createElement('div');
        imgCol.className = 'col-md-5';

        const linkElem = document.createElement('a');
        linkElem.href = link;

        const imgElem = document.createElement('img');
        imgElem.className = 'img-responsive img-hover';
        imgElem.src = imgSrc;
        imgElem.alt = imgAlt || title || '';
        linkElem.appendChild(imgElem);

        imgCol.appendChild(linkElem);
        row.appendChild(imgCol);

        // Title column
        const titleCol = document.createElement('div');
        titleCol.className = 'col-md-6';

        const h3 = document.createElement('h3');
        h3.textContent = title;
        titleCol.appendChild(h3);

        row.appendChild(titleCol);

        // Append row and hr to container
        container.appendChild(row);
        container.appendChild(document.createElement('hr'));
    });
}
