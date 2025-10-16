/**
 * liveEvents.js
 *
 * Creates live events list inside a container div.
 * Uses Bootstrap grid columns and classes similar to your sample HTML.
 *
 * @param {Array} events - Array of event objects with keys:
 *   {
 *     date: 'June 17, 2014',
 *     eventUrl: '../../../html/extra/live events/la1.html',
 *     imgSrc: '../../../images/workinprogress 600x300.png',
 *     imgAlt: 'Image description',
 *     title: 'Concert at LA',
 *     authorUrl: '#',
 *     authorName: 'Ilya Minin (Eli)',
 *     description: 'Event description text...'
 *   }
 * @param {string} containerId - ID of the div container where events will be appended.
 */
function createLiveEvents(events, containerId) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`Container with id "${containerId}" not found.`);
    return;
  }

  container.innerHTML = ''; // Clear existing content

  events.forEach((event, index) => {
    const row = document.createElement('div');
    row.className = 'row';

    const dateCol = document.createElement('div');
    dateCol.className = 'col-md-1 text-center';
    const dateP = document.createElement('p');
    dateP.textContent = event.date;
    dateCol.appendChild(dateP);

    const imgCol = document.createElement('div');
    imgCol.className = 'col-md-5';
    const imgLink = document.createElement('a');
    imgLink.href = event.eventUrl;
    const img = document.createElement('img');
    img.className = 'img-responsive img-hover';
    img.src = event.imgSrc;
    img.alt = event.imgAlt || '';
    imgLink.appendChild(img);
    imgCol.appendChild(imgLink);

    const infoCol = document.createElement('div');
    infoCol.className = 'col-md-6';

    const h3 = document.createElement('h3');
    const titleLink = document.createElement('a');
    titleLink.href = event.eventUrl;
    titleLink.textContent = event.title;
    h3.appendChild(titleLink);

    const authorP = document.createElement('p');
    authorP.textContent = 'by';
    const authorLink = document.createElement('a');
    authorLink.href = event.authorUrl || '#';
    authorLink.textContent = ' ' + event.authorName;
    authorP.appendChild(authorLink);

    const descP = document.createElement('p');
    descP.textContent = event.description;

    infoCol.appendChild(h3);
    infoCol.appendChild(authorP);
    infoCol.appendChild(descP);

    row.appendChild(dateCol);
    row.appendChild(imgCol);
    row.appendChild(infoCol);

    container.appendChild(row);

    // Append <hr> after each event except last
    if (index !== events.length - 1) {
      container.appendChild(document.createElement('hr'));
    }
  });
}

export { createLiveEvents };
