const scoreList = document.getElementById('score-list');

fetch('./assets/data/data.json')
    .then(res => res.json())
    .then((data) => {
        displayResults(data);
    })
    .catch(err => console.error(`There was an error: ${err}`));

const displayResults = (results) => {
    results.forEach(({ category, score, icon }) => {
        let categoryToLowerCase = category.toLowerCase();
        scoreList.innerHTML += `
        <li class="results-summary__object results-summary__object--${categoryToLowerCase}">
            <h6 class="results-summary__object-title">
                <img src="${icon}" width="20" height="20"> Reaction
            </h6>
            <p class="results-summary__score-result"><span class="results-summary__score-result--taken">${score}</span><span class="results-summary__score-result--total"> / 100</span></p>
        </li>
        `;
    });
}
