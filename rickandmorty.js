async function rickandmorty() {
    const searchdb = await fetch('https://rickandmortyapi.com/api/character');
    const dbresult = await searchdb.json();

    const ifhtmlhas = document.querySelector('.search-results__display');

    ifhtmlhas.innerHTML = dbresult.results.map((char) =>
        `<div class="result__display">
                <img class="result-img__display" src="${char.image}" alt="">
                <p class="result-name__display">${char.name}</p>
            </div>`).join('');
}

async function searchRick() {
    const searchdb = await fetch('https://rickandmortyapi.com/api/character');
    const dbresult = await searchdb.json();

    const inputValue = document.getElementById('search-input-id').value.toLowerCase();

    const ifhtmlhas = document.querySelector('.search-results__display');

    const filterResults = dbresult.results.filter(char => char.name.toLowerCase().includes(inputValue));

    if (filterResults.length === 0) {
        ifhtmlhas.innerHTML = 
            `<div class="result-noname__df">
            <figure class="result-noname-img__crop">
            <img class="result-noname-img" src="https://wallpapers.com/images/high/yellow-rick-and-morty-iphone-zq5nhipski2q9ax1.webp" alt="">
            </figure>
            <p class="result-noname__display">${inputValue.toUpperCase()}? <br><br> You mean the hypothetical person in this dimension? <br><br> Sorry, pal, you are in the wrong multiverse. Either move along or glue your eyeballs to these terrible jokes scrolling by, they might just tear a hole in reality. Your choice, genius!</p>
            </div>`;
    } else {
        ifhtmlhas.innerHTML = filterResults.map((char) =>
            `<div class="result__display">
            <img class="result-img__display" src="${char.image}" alt="">
            <div class="result-img__overlay">
            <p class="result-overlay__p">Status: ${char.status}</p>
            <p class="result-overlay__p">Species: ${char.species}</p>
            </div>
            <p class="result-name__display">${char.name}</p>
            </div>`).join('');
    }
}

function enterkeylistener() {
    document.getElementById('search-input-id').addEventListener('keydown', function (event) {
        if (event.key === 'Enter') { searchRick() }
    });
}

function searchboxxmarklistener() {
    const searchboxinput = document.getElementById('search-input-id');
    const faxmark = document.querySelector('.nav-search__x');

    searchboxinput.addEventListener('input', function() {
        if (searchboxinput.value.trim() !== '') {
            faxmark.style.display = 'block';
        } else {
            faxmark.style.display = 'none';
        }
    });

    faxmark.addEventListener('click', function() {
        searchboxinput.value = '';
        faxmark.style.display = 'none';
        searchboxinput.focus();
    });
}

rickandmorty();
searchRick();
enterkeylistener();

document.addEventListener('DOMContentLoaded', function() {
    searchboxxmarklistener();
})