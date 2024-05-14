document.addEventListener("DOMContentLoaded", function() {
    const newsContainer = document.querySelector(".box");

    const apiKey = '0ddc73a1e777475fb4772ac4fd84ced3'; // Your API key
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.status === 'ok') {
                const articles = data.articles;
                articles.forEach(article => {
                    const { title, description, url, urlToImage } = article;
                    const newsItem = document.createElement('div');
                    newsItem.classList.add('content');
                    newsItem.innerHTML = `
                        <img src="${urlToImage}" class="ss" alt="image">
                        <a href="${url}" target="_blank">${title}</a>
                        <p>${description}</p>
                    `;
                    newsContainer.appendChild(newsItem);
                });
            } else {
                newsContainer.innerHTML = "<p>Failed to fetch news. Please try again later.</p>";
            }
        })
        .catch(error => {
            console.error('Error fetching news:', error);
            newsContainer.innerHTML = "<p>Failed to fetch news. Please check your internet connection.</p>";
        });
});
