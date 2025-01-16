const themeSelector = document.querySelector('select'); 
const body = document.body; 
const logo = document.querySelector('.logo img'); 

function changeTheme() {
    if (themeSelector.value === 'dark') {
        body.classList.add('dark'); 
        logo.src = 'images/byui-logo_white.png'; 
    } else {
        body.classList.remove('dark'); 
        logo.src = 'images/byui-logo_blue.png'; 
    }
}


themeSelector.addEventListener('change', changeTheme);
