(()=> {

const  lightbox = document.querySelector('.lightbox'),
closeLightbox = document.querySelector('.close-lightbox');

lightbox.classList.add('show-lightbox');

function closeLBox() {
    lightbox.classList.remove('show-lightbox');
    vidPlayer.pause();
    vidPlayer.currentTime = 0;
  }

  closeLightbox.addEventListener('click', closeLBox);


})();