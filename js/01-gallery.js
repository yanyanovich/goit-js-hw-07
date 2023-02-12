import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryEl = document.querySelector(".gallery");
const imagesMarkup = ({ original, preview, description }) => {
  return `
  <div class="gallery-item">
  <a class="gallery-link" href="${original}">
  <img class="gallery-image" src="${preview}" data-source="${original}" alt="${description}" width="340"/>
  </a>
  </div>
  `;
};
const createImagesList = galleryItems.map(imagesMarkup).join("");
galleryEl.insertAdjacentHTML("afterbegin", createImagesList);
galleryEl.addEventListener("click", (e) => {
  e.preventDefault();
  if (!e.target.dataset.source) {
    return;
  }
  const instance = basicLightbox.create(
    `
  <img width="100%" height="100%" src="${e.target.dataset.source}">
`,
    {
      onShow: () =>
        document.addEventListener("keydown", (e) => {
          if (e.code === "Escape") instance.close();
        }),
      onClose: () =>
        document.removeEventListener("keydown", (e) => {
          if (e.code === "Escape") instance.close();
        }),
    }
  );
  instance.show();
});
