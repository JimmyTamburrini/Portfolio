const viewer = document.getElementById('image-viewer');
const photo = document.getElementById('viewer-image');
const stage = document.getElementById('viewer-stage');
const sizeButton = document.getElementById('toggle-size');
const caption = document.getElementById('image-caption');
let previousOverflow = '';

function setActualSize(actual) {
  stage.classList.toggle('actual', actual);
  sizeButton.setAttribute('aria-pressed', String(actual));
  sizeButton.textContent = actual ? 'Fit to screen' : 'Actual size';
  stage.scrollTop = 0;
  stage.scrollLeft = 0;
}

document.querySelectorAll('[data-full-image]').forEach(link => {
  link.addEventListener('click', event => {
    // Preserve the browser's open-in-new-tab and download shortcuts.
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || event.button !== 0) return;
    event.preventDefault();
    const thumbnail = link.querySelector('img');
    photo.alt = thumbnail.alt;
    caption.textContent = thumbnail.alt;
    photo.removeAttribute('src');
    photo.src = link.href;
    document.getElementById('original-image').href = link.href;
    setActualSize(false);
    previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    viewer.showModal();
  });
});
photo.addEventListener('error', () => {
  caption.textContent = 'This photo could not be loaded. Try Open original.';
});
sizeButton.addEventListener('click', () => setActualSize(!stage.classList.contains('actual')));
photo.addEventListener('click', () => setActualSize(!stage.classList.contains('actual')));
document.getElementById('close-viewer').addEventListener('click', () => viewer.close());
viewer.addEventListener('close', () => {
  document.body.style.overflow = previousOverflow;
  photo.removeAttribute('src');
});
stage.addEventListener('click', event => {
  if (event.target === stage) viewer.close();
});
