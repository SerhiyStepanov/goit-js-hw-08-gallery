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

const galleryImages = document.querySelector(".gallery");
// console.log(galleryImage);
const backdrop = document.querySelector(".lightbox");
// console.log(backdrop);
const imgOpenInModal = document.querySelector(".lightbox__image");
// console.log(imgOpenInModal);
const closeModalbtn = document.querySelector(".lightbox__button");
// console.log(closeModalbtn);
const markupGallery = gallery.map(markupGalleryCart).join("");
galleryImages.insertAdjacentHTML("afterbegin", markupGallery);

const imageEl = document.querySelector(".gallery__image");
// console.log(imageEl);

galleryImages.addEventListener("click", onOpenModal);
closeModalbtn.addEventListener("click", onCloseModalBtn);
backdrop.addEventListener("click", onCloseModalBackdrop);

function onOpenModal(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  window.addEventListener("keydown", onCloseModalEscape);
  backdrop.classList.add("is-open");
  imgOpenInModal.src = event.target.dataset.source;
}

function closeModal(event) {
  backdrop.classList.remove("is-open");
  imgOpenInModal.src = "";
  window.removeEventListener("keydown", onCloseModalEscape);
}

function onCloseModalBtn(event) {
  if (event.target.nodeName !== "BUTTON") {
    return;
  }
  closeModal();
}

function onCloseModalBackdrop(event) {
  if (event.target.classList.contains("lightbox__overlay")) {
    closeModal();
  }
}

function onCloseModalEscape(event) {
  if (event.code === "Escape") {
    closeModal();
  }
}
