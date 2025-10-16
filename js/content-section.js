// reusableBlocks.js

/**
 * Creates multiple history blocks inside a container.
 * @param {Array} blocksData - Array of block objects.
 * @param {string} containerId - ID of the container div to insert blocks.
 */
function createHistoryBlocks(blocksData, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  // Clear container first (optional)
  container.innerHTML = '';

  // Add header only once
  const headerRow = document.createElement('div');
  headerRow.className = 'row';
  headerRow.innerHTML = `<div class="col-lg-12"><h1 class="page-header">Development history</h1></div>`;
  container.appendChild(headerRow);

  // Helper to create a block row
  function createBlock({ iconClass, linkUrl, imgSrc, imgAlt, headingText, paragraphs }) {
    const row = document.createElement('div');
    row.className = 'row';
    row.innerHTML = `
        <div class="col-md-1 text-center">
          <p><i class="fa ${iconClass} fa-4x"></i></p><p></p>
        </div>
        <div class="col-md-5">
          <a href="${linkUrl}"><img class="img-responsive img-hover" src="${imgSrc}" alt="${imgAlt}"></a>
        </div>
        <div class="col-md-6">
          <h3><a href="${linkUrl}">${headingText}</a></h3>
          ${paragraphs.map(p => `<p style="text-align: justify;">${p}</p>`).join('')}
        </div>
      `;
    return row;
  }

  blocksData.forEach((block, idx) => {
    container.appendChild(createBlock(block));
    if (idx !== blocksData.length - 1) {
      container.appendChild(document.createElement('hr'));
    }
  });
}

export { createHistoryBlocks };
