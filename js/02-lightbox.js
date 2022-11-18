import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const galleryItem = galleryItems
  .map(({ preview, original, description }) => {
    return `<li><a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a></li>`;
  })
  .join("");

gallery.insertAdjacentHTML("afterbegin", galleryItem);

let galleryI = new SimpleLightbox(".gallery__item");
galleryI.on("show.simplelightbox", function () {
  console.log("ffff");
});

// gallery.on("error.simplelightbox", function (e) {

// });
