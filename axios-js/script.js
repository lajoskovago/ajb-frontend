const createLi = (article) => {
    const li = document.createElement('li');
    // add user details to `li`
    li.textContent = `${article.id}: ${article.title} ${aritcle.subtitle} ${article.content}`;
    return li;
};

const appendToDOM = (articles) => {
    const ul = document.querySelector('ul');
    //iterate over all users
    articles.map(article => {
        ul.appendChild(createLi(article));
    });
};

const fetchArticles = () => {
    axios.get('http://api.ajbbihor.ro/api/article/list')
        .then(response => {
            const articles = response.data.data;
            console.log(`GET list articles`, articles);
            // append to DOM
            appendToDOM(articles);
        })
        .catch(error => console.error(error));
};

fetchArticles();