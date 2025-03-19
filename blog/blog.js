const articles = [
	{
		id: 1,
		title: 'Septimus Heap Book One: Magyk',
		date: 'July 5, 2022',
		description:
			'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
		imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
		ages: '10-14',
		genre: 'Fantasy',
		stars: '****'
	},
	{
		id: 2,
		title: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
		imgSrc:
			'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
		imgAlt: 'Book cover for Magnus Chase 1',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	}
]
document.addEventListener('DOMContentLoaded', () => {
    const articlesContainer = document.getElementById('articles-container');

    articles.forEach(article => {
        const articleElement = document.createElement('article');
        articleElement.classList.add('blog-post');

        articleElement.innerHTML = `
            <div class="post-meta">
                <p class="post-date">${article.date}</p>
            </div>
            <div class="post-content">
                <h2 class="post-title">${article.title}</h2>
                <img src="${article.imgSrc}" alt="${article.imgAlt}" class="post-image">
                <p class="post-description">${article.description}</p>
                <p><strong>Ages:</strong> ${article.ages}</p>
                <p><strong>Genre:</strong> ${article.genre}</p>
                <p><strong>Rating:</strong> ${article.stars}</p>
            </div>
        `;

        articlesContainer.appendChild(articleElement);
    });
});

function generateArticles() {
    const articleContainer = document.querySelector("#article-container");

    if (!articleContainer) {
        console.error("Error: Article container not found!");
        return;
    }

    articles.forEach(article => {
        const newArticle = document.createElement("article");
        newArticle.classList.add("blog-post");

        newArticle.innerHTML = `
            <h2>${article.title}</h2>
            <p><strong>${article.date}</strong></p>
            <img src="${article.imgSrc}" alt="${article.imgAlt}">
            <p>${article.description}</p>
            <p><strong>Genre:</strong> ${article.genre} | <strong>Ages:</strong> ${article.ages}</p>
            <p>${article.stars}</p>
        `;

        articleContainer.appendChild(newArticle);
    });
}

// Run the function after the DOM has loaded
document.addEventListener("DOMContentLoaded", generateArticles);

