// projects.js
export function createPortfolio(projectItems, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // Clear existing content if any
    container.innerHTML = '';

    // Create title row
    const titleRow = document.createElement('div');
    titleRow.className = 'row';

    const titleCol = document.createElement('div');
    titleCol.className = 'col-lg-12';

    const header = document.createElement('h2');
    header.className = 'page-header';
    header.textContent = 'Latest Projects';

    titleCol.appendChild(header);
    titleRow.appendChild(titleCol);
    container.appendChild(titleRow);

    // Create projects row
    const projectsRow = document.createElement('div');
    projectsRow.className = 'row';

    // Loop through all projects and create their HTML
    projectItems.forEach(({ link, imgSrc, alt }) => {
        const projectCol = document.createElement('div');
        projectCol.className = 'col-md-4 col-sm-6';

        const anchor = document.createElement('a');
        anchor.href = link;

        const img = document.createElement('img');
        img.className = 'img-responsive img-portfolio img-hover';
        img.src = imgSrc;
        img.alt = alt || '';

        anchor.appendChild(img);
        projectCol.appendChild(anchor);
        projectsRow.appendChild(projectCol);
    });

    container.appendChild(projectsRow);
}
