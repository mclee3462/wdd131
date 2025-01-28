document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector(".menu-button");
    const navMenu = document.querySelector("nav ul");

    menuButton.addEventListener("click", () => {
        const isVisible = navMenu.style.display === "block";
        navMenu.style.display = isVisible ? "none" : "block";
    });
});
const menuButton = document.querySelector('.menu-button');
const menuItems = document.querySelector('.menu-items');

menuButton.addEventListener('click', () => {
  menuItems.classList.toggle('hide');
});

function handleResize() {
  if (window.innerWidth > 1000) {
    menuItems.classList.remove('hide');
  } else {
    menuItems.classList.add('hide');
  }
}

window.addEventListener('resize', handleResize);
handleResize();
function viewerTemplate(imagePath, altText) {
    return `
      <div class="viewer">
        <button class="close-viewer">X</button>
        <img src="${imagePath}" alt="${altText}">
      </div>
    `;
  }
  
  function viewHandler(event) {
    const clickedImage = event.target;
    const imagePath = clickedImage.src.split('-')[0] + '-full.jpeg';
    const altText = clickedImage.alt;
  
    document.body.insertAdjacentHTML('afterbegin', viewerTemplate(imagePath, altText));
  
    const closeButton = document.querySelector('.close-viewer');
    closeButton.addEventListener('click', closeViewer);
  }
  
  function closeViewer() {
    const viewer = document.querySelector('.viewer');
    viewer.remove();
  }
  
  const gallery = document.querySelector('.gallery');
  gallery.addEventListener('click', (event) => {
    if (event.target.tagName === 'IMG') {
      viewHandler(event);
    }
  });
  