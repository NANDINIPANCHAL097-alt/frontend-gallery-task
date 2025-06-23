// script.js

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const galleryItems = document.querySelectorAll(".gallery-item img");
const closeBtn = document.querySelector(".close");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

let currentIndex = 0;

// Open lightbox when image is clicked
galleryItems.forEach((img, index) => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
    currentIndex = index;
  });
});

// Close lightbox
closeBtn.onclick = () => (lightbox.style.display = "none");

// Next image
nextBtn.onclick = () => {
  currentIndex = (currentIndex + 1) % galleryItems.length;
  lightboxImg.src = galleryItems[currentIndex].src;
};

// Previous image
prevBtn.onclick = () => {
  currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
  lightboxImg.src = galleryItems[currentIndex].src;
};

// Filter gallery by category
function filterGallery(category) {
  const items = document.querySelectorAll(".gallery-item");
  items.forEach((item) => {
    const match =
      item.getAttribute("data-category") === category || category === "all";
    item.style.display = match ? "block" : "none";
  });
}

// Close lightbox on outside click
window.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});
