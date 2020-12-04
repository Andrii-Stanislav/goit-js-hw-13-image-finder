import lightbox from "../templates/lightbox.hbs";

function showLargePhoto() {
  const photoGallery = document.querySelector('.gallery');
  const boxForLightbox = document.querySelector('.for-lightbox')

  const refs = { }

  photoGallery.addEventListener('click', showLightbox);

  function showLightbox(event) {
    event.preventDefault();
    if (event.target === event.currentTarget) { return };

    const originalPhotoRef = event.target.getAttribute('data-large');
    boxForLightbox.insertAdjacentHTML("beforeEnd", lightbox(originalPhotoRef));

    refs.lightboxOverlay = document.querySelector('.lightbox__overlay');
    refs.closeBtn = document.querySelector('.lightbox__button');

    refs.closeBtn.addEventListener('click', closeLightbox);
    refs.lightboxOverlay.addEventListener('click', closeLightbox);
  };

  function closeLightbox(event) {
    if (event.target !== event.currentTarget) { return };
    console.log("closeLightbox");
    boxForLightbox.innerHTML = "";
  };
}

export default showLargePhoto();
