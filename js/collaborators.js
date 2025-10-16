/**
 * Creates a collaborators list inside a container.
 *
 * @param {Array} collaborators - Array of objects { name, href, role }.
 * @param {string} containerId - ID of container div to insert content.
 */
function createCollaboratorsList(collaborators, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';

    collaborators.forEach(({ name, href, role }, idx) => {
        const p = document.createElement('p');

        if (href) {
            const a = document.createElement('a');
            a.href = href;
            const strong = document.createElement('strong');
            strong.textContent = name;
            a.appendChild(strong);

            p.appendChild(a);
            p.append(` - ${role}`);
        } else {
            const strong = document.createElement('strong');
            strong.textContent = name;
            p.appendChild(strong);
        }

        container.appendChild(p);
    });
}

export { createCollaboratorsList };
