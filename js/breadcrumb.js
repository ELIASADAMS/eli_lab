document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container .row .col-lg-12');
  if (!container) return;

  const breadcrumbMap = window.breadcrumbMap || {};

  let path = window.location.pathname;
  path = path.replace(/^\/|\/$/g, '');

  if (path.endsWith('index.html')) {
    path = path.slice(0, -'index.html'.length).replace(/\/$/, '');
  }

  if (!path.startsWith('html/')) {
    return;
  }

  let relativePath = path.slice(5);
  const segments = relativePath.split('/').filter(Boolean);

  const excludeFolders = ['projects','extra']; // add folder names to exclude if needed

  function stripExtension(filename) {
    const lastDotIndex = filename.lastIndexOf('.');
    if (lastDotIndex === -1) return filename;
    return filename.substring(0, lastDotIndex);
  }

  function prettify(filename) {
    const nameWithoutExt = stripExtension(filename);
    return nameWithoutExt
      .replace(/_/g, ' ')
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  const crumbs = [{ name: 'Home', url: '../../../../index.html' }];

  for (let i = 0; i < segments.length; i++) {
    const folderPath = segments.slice(0, i + 1).join('/');

    if (excludeFolders.includes(segments[i]) && !breadcrumbMap[folderPath]) {
      continue;
    }

    const filename = breadcrumbMap[folderPath] || segments[i] + '.html';
    const depth = segments.length - 1 - i;
    const relativePrefix = '../'.repeat(depth);
    const url = relativePrefix + filename;
    crumbs.push({ name: prettify(filename), url });
  }

  const activeCrumb = crumbs.pop();

  const h1 = container.querySelector('h1.page-header');
  if (h1) h1.textContent = prettify(activeCrumb.name);

  const ol = container.querySelector('ol.breadcrumb');
  ol.innerHTML = '';

  crumbs.forEach(({ name, url }) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = url;
    a.textContent = name;
    li.appendChild(a);
    ol.appendChild(li);
  });

  const liActive = document.createElement('li');
  liActive.className = 'active';
  liActive.textContent = prettify(activeCrumb.name);
  ol.appendChild(liActive);
});
