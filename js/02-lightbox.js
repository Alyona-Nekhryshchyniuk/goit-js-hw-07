import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const galleryItem = galleryItems
  .map(({ preview, original, description }) => {
    return `<li><a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}"  />
  </a></li>`;
  })
  .join("");

gallery.insertAdjacentHTML("afterbegin", galleryItem);

new SimpleLightbox("a.gallery__item", {
  captionDelay: "250",
  captionsData: "alt",
});
