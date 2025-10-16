/**
 * Creates art content blocks inside a container div.
 * @param {Array} artworks - Array of artworks with:
 *   {
 *     title: 'EWP Project',
 *     url: 'animation/ewp_project.html',
 *     imgSrc: '../../images/EWP Project/ewp_scr_2.png',
 *     imgAlt: '',
 *     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...'
 *   }
 * @param {string} containerId - ID of container div to insert artworks.
 */
function createArtContent(artworks, containerId) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`Container ${containerId} not found.`);
    return;
  }

  container.innerHTML = ''; // Clear previous content

  artworks.forEach((artwork, index) => {
    const row = document.createElement('div');
    row.className = 'row';

    // Image column
    const imgCol = document.createElement('div');
    imgCol.className = 'col-md-7';
    const link = document.createElement('a');
    link.href = artwork.url;
    const img = document.createElement('img');
    img.className = 'img-responsive img-hover';
    img.src = artwork.imgSrc;
    img.alt = artwork.imgAlt || '';
    link.appendChild(img);
    imgCol.appendChild(link);

    // Text column
    const textCol = document.createElement('div');
    textCol.className = 'col-md-5';
    const h3 = document.createElement('h3');
    h3.textContent = artwork.title;
    const p = document.createElement('p');
    p.textContent = artwork.description;
    textCol.appendChild(h3);
    textCol.appendChild(p);

    row.appendChild(imgCol);
    row.appendChild(textCol);

    container.appendChild(row);

    // Add horizontal rule after each except last
    if (index !== artworks.length - 1) {
      container.appendChild(document.createElement('hr'));
    }
  });
}

export { createArtContent };
