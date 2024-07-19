const container = document.getElementById('spacer-container');
for (let i = 0; i < 500; i++) {
    const span = document.createElement('span');
    span.className = 'spacer';
    container.appendChild(span);
}