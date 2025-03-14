import recipes from './recipes.mjs';

// Function to generate a random number from 0 to num-1
function getRandomNumber(num) {
    return Math.floor(Math.random() * num);
}

// Function to get a random entry from an array
function getRandomListEntry(arr) {
    return arr[getRandomNumber(arr.length)];
}

// Function to generate rating stars HTML
function ratingTemplate(rating) {
    let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
    for (let i = 1; i <= 5; i++) {
        html += i <= rating 
            ? `<span aria-hidden="true" class="icon-star">⭐</span>` 
            : `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
    }
    html += `</span>`;
    return html;
}

// Function to generate tags HTML
function tagsTemplate(tags) {
    return tags.map(tag => `<li>${tag}</li>`).join('');
}

// Function to generate HTML for a recipe
function recipeTemplate(recipe) {
    return `
    <figure class="recipe">
        <img src="${recipe.image}" alt="Image of ${recipe.name}" />
        <figcaption>
            <ul class="recipe__tags">${tagsTemplate(recipe.tags)}</ul>
            <h2>${recipe.name}</h2>
            <p class="recipe__ratings">${ratingTemplate(recipe.rating)}</p>
            <p class="recipe__description">${recipe.description}</p>
        </figcaption>
    </figure>`;
}

// Function to render a list of recipes
function renderRecipes(recipeList) {
    const outputElement = document.querySelector("#recipes-container");
    outputElement.innerHTML = recipeList.map(recipeTemplate).join('');
}

// Initialize the page with a random recipe
function init() {
    const recipe = getRandomListEntry(recipes);
    renderRecipes([recipe]);
}

// Function to filter recipes based on user input
function filterRecipes(query) {
    const filtered = recipes.filter(recipe => 
        recipe.name.toLowerCase().includes(query) ||
        recipe.description.toLowerCase().includes(query) ||
        recipe.tags.some(tag => tag.toLowerCase().includes(query)) ||
        recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(query))
    );
    return filtered.sort((a, b) => a.name.localeCompare(b.name));
}

// Search event handler
function searchHandler(e) {
    e.preventDefault();
    const searchInput = document.querySelector("#search-input").value.trim().toLowerCase();
    const results = filterRecipes(searchInput);
    renderRecipes(results);
}

// Attach event listener to the search form
document.querySelector("#search-form").addEventListener("submit", searchHandler);

// Run the init function on page load
init();
