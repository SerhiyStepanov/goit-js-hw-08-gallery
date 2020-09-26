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

const galleryImage = document.querySelector(".gallery");
// console.log(galleryImage);

const openModal = document.querySelector(".lightbox");
// console.log(openModal);

const imgOpenInModal = document.querySelector(".lightbox__image");
// console.log(imgOpenInModal);

const closeModalbtn = document.querySelector(".lightbox__button");
// console.log(closeModalbtn);

const markupGallery = gallery.map(markupGalleryCart).join("");
galleryImage.insertAdjacentHTML("afterbegin", markupGallery);

const imageEl = document.querySelector(".gallery__image");
// console.log(imageEl);

galleryImage.addEventListener("click", onOpenModal);
closeModalbtn.addEventListener("click", onCloseModal);

function onOpenModal(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  // console.log(event.target);
  openModal.classList.add("is-open");
}

function onCloseModal(event) {
  if (event.target.nodeName !== "BUTTON") {
    return;
  }
  // console.log(event.target);
  openModal.classList.remove("is-open");
}
