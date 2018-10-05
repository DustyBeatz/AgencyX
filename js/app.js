(()=> {

var  lightbox = document.querySelector('.lightbox');
var closeLightbox = document.querySelector('.close-lightbox');
var lightboximage = document.querySelector(".lbImg");


lightbox.classList.add('show-lightbox');

function closeLBox() {
    lightbox.classList.remove('show-lightbox');
  }

  closeLightbox.addEventListener('click', closeLBox);

  lightbox.addEventListener('click', open-lightbox);
lightboximage.addEventListener('click',open-lightbox);

})();