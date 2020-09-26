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

const backdrop = document.querySelector(".lightbox");
// console.log(backdrop);

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
backdrop.addEventListener("click", onClickBackdrop);

function onOpenModal(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  window.addEventListener("keydown", onPressEscape);
  backdrop.classList.add("is-open");
  imgOpenInModal.src = event.target.dataset.source;
}

function onCloseModal(event) {
  if (event.target.nodeName !== "BUTTON") {
    return;
  }
  backdrop.classList.remove("is-open");
  imgOpenInModal.src = "";
  window.removeEventListener("keydown", onPressEscape);
}

function onClickBackdrop(event) {
  if (event.target.classList.contains("lightbox__overlay")) {
    backdrop.classList.remove("is-open");
    imgOpenInModal.src = "";
    window.removeEventListener("keydown", onPressEscape);
  }
}

function onPressEscape(event) {
  console.log(event.code);
  if (event.code === "Escape") {
    backdrop.classList.remove("is-open");
    imgOpenInModal.src = "";
    window.removeEventListener("keydown", onPressEscape);
  }
}
