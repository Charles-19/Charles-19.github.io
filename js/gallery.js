function activateGallery() {
  let thumbnails = document.querySelector("#gallery-thumbs")
                           .querySelectorAll("img");

  // // EXERCISE
  // let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");

  let mainImage = document.querySelector("#gallery-photo > img");

  thumbnails.forEach((thumbnail) => {
    // Preload large images.
    let newImageSrc = thumbnail.dataset.largeVersion;
    let largeVersion = new Image();
    largeVersion.src = newImageSrc;
    thumbnail.addEventListener("click", function() {
      // Set clicked image as main image
      mainImage.setAttribute("src", newImageSrc);
      // // Works kind of the same, but it is not the best option
      // mainImage.setAttribute("src", thumbnail.src);
      mainImage.setAttribute("alt", thumbnail.alt);

      // Change which image is current.
      let currentClass = "current";
      document.querySelector(".current").classList.remove(currentClass);
      thumbnail.parentNode.classList.add(currentClass);

      // Update image info.
      let galleryInfo = document.querySelector("#gallery-info");
      let title       = galleryInfo.querySelector(".title");
      let description = galleryInfo.querySelector(".description");
      title.innerHTML       = thumbnail.dataset.title;
      description.innerHTML = thumbnail.dataset.description;
    });
  });
}
