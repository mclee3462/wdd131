import recipes from './recipies.mjs';

// Function to generate a random number within a range
function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

// Function to get a random recipe from the list
function getRandomRecipe(recipes) {
    const index = getRandomNumber(recipes.length);
    return recipes[index];
}

// Function to generate HTML for recipe tags
function tagsTemplate(tags) {
    return `
        <ul class="recipe__tags">
            ${tags.map(tag => `<li>${tag}</li>`).join('')}
        </ul>
    `;
}

// Function to generate HTML for star ratings
function ratingTemplate(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        stars += i <= rating
            ? '<span class="icon-star">⭐</span>'
            : '<span class="icon-star-empty">☆</span>';
    }
    return `
        <span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">
            ${stars}
        </span>
    `;
}

// Function to generate the HTML for a recipe
function recipeTemplate(recipe) {
    return `
        <figure class="recipe">
            <img src="${recipe.image}" alt="Image of ${recipe.name}" />
            <figcaption>
                ${tagsTemplate(recipe.tags)}
                <h2><a href="#">${recipe.name}</a></h2>
                <p class="recipe__ratings">
                    ${ratingTemplate(recipe.rating)}
                </p>
                <p class="recipe__description">
                    ${recipe.description}
                </p>
            </figcaption>
        </figure>
    `;
}

// Function to render recipes in the DOM
function renderRecipes(recipeList) {
    const outputElement = document.querySelector('.recipes');
    outputElement.innerHTML = recipeList.length > 0
        ? recipeList.map(recipeTemplate).join('')
        : "<p>No recipes found. Try a different search.</p>";
}

// Function to initialize and load a random recipe on page load
function init() {
    const randomRecipe = getRandomRecipe(recipes);
    renderRecipes([randomRecipe]);
}

// Function to filter recipes based on search input
function filterRecipes(query) {
    return recipes.filter(recipe => {
        const lowerQuery = query.toLowerCase();
        return (
            recipe.name.toLowerCase().includes(lowerQuery) ||
            recipe.description.toLowerCase().includes(lowerQuery) ||
            recipe.tags.some(tag => tag.toLowerCase().includes(lowerQuery)) ||
            recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(lowerQuery))
        );
    }).sort((a, b) => a.name.localeCompare(b.name));
}

// Function to handle search input
function searchHandler(event) {
    event.preventDefault();
    const query = document.querySelector('#search-input').value.trim();
    const filteredRecipes = filterRecipes(query);
    renderRecipes(filteredRecipes);
}

// Attach event listener for the search functionality
document.querySelector('#search-form').addEventListener('submit', searchHandler);

// Run the init function on page load
init();
