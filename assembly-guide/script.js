const lightbox = document.querySelector('.lightbox');
const lightboxImage = lightbox?.querySelector('img');
const closeButton = lightbox?.querySelector('.lightbox-close');

document.querySelectorAll('[data-lightbox]').forEach((trigger) => {
  trigger.addEventListener('click', () => {
    if (!lightbox || !lightboxImage) return;

    const preview = trigger.querySelector('img');
    lightboxImage.src = trigger.dataset.lightbox;
    lightboxImage.alt = preview?.alt || 'Monster Rhino reference image';
    lightbox.showModal();
  });
});

closeButton?.addEventListener('click', () => lightbox.close());

lightbox?.addEventListener('click', (event) => {
  if (event.target === lightbox) lightbox.close();
});
