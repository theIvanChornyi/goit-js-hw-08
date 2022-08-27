import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line




const galleryPhotoContainer = document.querySelector('.gallery');

createGallery(galleryItems, galleryPhotoContainer);

let lightbox = new SimpleLightbox('.gallery a',
{
  captions: true,
  captionType: 'attr',
  captionsData:	'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
  docClose: true,
});


function createGallery(galleryItemsArray, galleryContainer) {

  const galleryMarkupString = getMarkupString(galleryItemsArray);

  createGalleryEl(galleryMarkupString, galleryContainer);

  galleryContainer.addEventListener("click", zoomPicture);
}




function getMarkupString(galleryItemsArray) {
  const MarkupString = galleryItemsArray
  .map(
    ({ preview, original, description }) =>
      `<a class="gallery__link gallery__item" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>`
  )
  .join("");
  return MarkupString;
}

function createGalleryEl(markupString, galleryContainer) {
  galleryContainer.innerHTML = markupString;
}

function zoomPicture(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }
  event.preventDefault();
  lightbox.on('show.simplelightbox');

}