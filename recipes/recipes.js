document.addEventListener("DOMContentLoaded", () => {
    const recipeContainer = document.querySelector(".recipe");
    const searchForm = document.querySelector(".search-form");

    // Example recipe data
    const recipes = [
        {
            title: "Spaghetti Carbonara",
            image: "images/spaghetti.jpg",
            rating: 4,
            description: "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper."
        },
        {
            title: "Chicken Alfredo",
            image: "images/chicken-alfredo.jpg",
            rating: 5,
            description: "Creamy Alfredo sauce with grilled chicken over fettuccine pasta."
        }
    ];

    function displayRecipe(recipe) {
        recipeContainer.innerHTML = `
            <h2>${recipe.title}</h2>
            <img src="${recipe.image}" alt="${recipe.title}">
            <div class="rating" role="img" aria-label="Rating: ${recipe.rating} out of 5 stars">
                ${generateStars(recipe.rating)}
            </div>
            <p class="description">${recipe.description}</p>
        `;
    }

    function generateStars(rating) {
        let stars = "";
        for (let i = 1; i <= 5; i++) {
            stars += `<span aria-hidden="true" class="${i <= rating ? 'icon-star' : 'icon-star-empty'}">⭐</span>`;
        }
        return stars;
    }

    searchForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const query = event.target.querySelector("input").value.toLowerCase();
        const foundRecipe = recipes.find(recipe => recipe.title.toLowerCase().includes(query));

        if (foundRecipe) {
            displayRecipe(foundRecipe);
        } else {
            recipeContainer.innerHTML = "<p>No recipes found.</p>";
        }
    });

    // Display the first recipe by default
    displayRecipe(recipes[0]);
});
