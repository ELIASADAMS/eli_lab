export function createPortfolioText(projectItems, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = '';

  const titleRow = document.createElement('div');
  titleRow.className = 'row';
  const titleCol = document.createElement('div');
  titleCol.className = 'col-lg-12';
  const header = document.createElement('h2');

  titleCol.appendChild(header);
  titleRow.appendChild(titleCol);
  container.appendChild(titleRow);

  // Group items into rows of 2 items (col-md-6)
  let projectsRow = null;

  projectItems.forEach(({ link, imgSrc, alt, title, description }, index) => {
    if (index % 2 === 0) {
      projectsRow = document.createElement('div');
      projectsRow.className = 'row';
      container.appendChild(projectsRow);
    }

    const projectCol = document.createElement('div');
    projectCol.className = 'col-md-6 img-portfolio';

    const anchor = document.createElement('a');
    anchor.href = link;

    const img = document.createElement('img');
    img.className = 'img-responsive img-hover';
    img.src = imgSrc;
    img.alt = alt || '';

    anchor.appendChild(img);

    const titleEl = document.createElement('h3');
    const pTitle = document.createElement('p');
    pTitle.innerHTML = `<strong>${title || ''}</strong>`;
    titleEl.appendChild(pTitle);


    const descriptionEl = document.createElement('p');
    const descDiv = document.createElement('div');
    descDiv.style.textAlign = 'justify';
    descDiv.innerHTML = description || '';
    descriptionEl.appendChild(descDiv);

    projectCol.appendChild(anchor);
    projectCol.appendChild(titleEl);
    projectCol.appendChild(descriptionEl);

    projectsRow.appendChild(projectCol);
  });
}
