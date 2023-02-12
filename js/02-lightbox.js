import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryEl = document.querySelector(".gallery");
const imagesMarkup = ({ original, preview, description }) => {
  return `
  <a class="gallery-item" href="${original}">
  <img class="gallery-image" src="${preview}" alt="${description}" width="340"/>
  </a>
  `;
};
const createImagesList = galleryItems.map(imagesMarkup).join("");
galleryEl.insertAdjacentHTML("afterbegin", createImagesList);
let gallery = new SimpleLightbox(".gallery-item", {
  captionDelay: 250,
  captionsData: "alt",
});
