const themeSelector = document.querySelector('select'); 
const body = document.body; 
const logo = document.querySelector('.logo img'); 

function changeTheme() {
    if (themeSelector.value === 'dark') {
        body.classList.add('dark'); 
        logo.src = 'path/to/white-logo.png'; 
    } else {
        body.classList.remove('dark'); 
        logo.src = 'path/to/blue-logo.png'; 
    }
}


themeSelector.addEventListener('change', changeTheme);
