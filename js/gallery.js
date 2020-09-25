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

// console.log(gallery);

const galleryImg = document.querySelector(".gallery");
// console.log(galleryImg);
const markupGallery = gallery.map(markupGalleryCart).join("");
// console.log(markupGallery);
galleryImg.insertAdjacentHTML("afterbegin", markupGallery);

console.log(galleryImg);
