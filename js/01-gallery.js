import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
// const galleryItem = document.createElement(div);
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
    <div class="modal">
    </div>
`);

// const clear = () => {
//   console.log("need to to clearance");
//   modalEl.textContent = "";
//   modal.close();
// };

const modalEl = modal.element().querySelector("div");

const imgFullScreen = (e) => {
  e.preventDefault();
  //   modalEl.textContent = "";
  let clickedImg = e.target.outerHTML;
  //   if (modalEl.innerHTML !== "") {

  //   }
  modalEl.innerHTML = clickedImg;

  console.log(modalEl.innerHTML);
  modal.show();

  //   document.addEventListener("click", clear);
};

if (modal.close()) {
  console.log("now closed");
  gallery.addEventListener("click", imgFullScreen);
}

// const closeFn = () => {
//   modal.close();
// };
// if (modal.show()) {
//   document.addEventListener("click", closeFn);
// }
