import gallery from "./gallery-items.js";

const markupGalleryCart = ({ original, preview, description }) => {
  return `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
};

const galleryImg = document.querySelector(".gallery");
console.log(galleryImg);
const openModalGallery = document.querySelector(".lightbox");
console.log(openModalGallery);
const closeModalbtn = document.querySelector(".lightbox__button");
console.log(closeModalbtn);

const markupGallery = gallery.map(markupGalleryCart).join("");
galleryImg.insertAdjacentHTML("afterbegin", markupGallery);

galleryImg.addEventListener("click", onClickImage);

function onClickImage(event) {
  console.log(event.target);
}
