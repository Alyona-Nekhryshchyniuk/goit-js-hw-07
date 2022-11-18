import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const galleryItem = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
  })
  .join("");

gallery.insertAdjacentHTML("afterbegin", galleryItem);

const modal = basicLightbox.create(`
<div class="gallery__item">
<a class="gallery__link" href="">
  <img
    class="gallery__image"
    src=""
    data-source=""
    alt=""
  />
</a>
</div>
`);

let form_open = false;

const imgFullScreen = (e) => {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") {
    return;
  }

  let img = modal.element().querySelector("img");
  //   img.dataset.source = e.target.dataset.source;
  img.src = e.target.src;

  let link = img.closest(".gallery__link");
  link.href = e.target.dataset.source;

  modal.show();
  form_open = true;
};

gallery.addEventListener("click", imgFullScreen);

// close modal with Esc key
document.addEventListener("keydown", (e) => {
  if (form_open && e.code === "Escape") {
    modal.close();
    console.log("pressed esc key to close modal");
  }
});
