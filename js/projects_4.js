export function createPortfolio(projectItems, containerId) {
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

  let projectsRow = null;
  projectItems.forEach(({ link, imgSrc, alt }, index) => {
    if (index % 4 === 0) {
      projectsRow = document.createElement('div');
      projectsRow.className = 'row';
      container.appendChild(projectsRow);
    }

    const projectCol = document.createElement('div');
    projectCol.className = 'col-md-3 img-portfolio';

    const anchor = document.createElement('a');
    anchor.href = link;

    const img = document.createElement('img');
    img.className = 'img-responsive img-hover';
    img.src = imgSrc;
    img.alt = alt || '';

    anchor.appendChild(img);
    projectCol.appendChild(anchor);
    projectsRow.appendChild(projectCol);
  });
}
