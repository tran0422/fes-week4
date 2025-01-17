let jokeIndex = 0;

async function dadjokes() {
    const jokesFrom = await fetch("https://icanhazdadjoke.com/", {
        method: 'GET',
        headers: { 'Accept': 'application/json' }
    })

    const selectJoke = document.querySelector(".jokes-marquee");
    const jokesFromData = await jokesFrom.json();
    return selectJoke.innerHTML = `<p class="jokes-marquee__p">${jokesFromData.joke}</p>`
}

async function chuckNorrisJokes() {
    const jokesFrom = await fetch("https://api.chucknorris.io/jokes/random");
    const jokesFromData = await jokesFrom.json();
    const selectJoke = document.querySelector(".jokes-marquee");
    return selectJoke.innerHTML = `<p class="jokes-marquee__p">${jokesFromData.value}</p>`
}

async function geekJokes() {
    const jokesFrom = await fetch("https://geek-jokes.sameerkumar.website/api?format=json");
    const jokesFromData = await jokesFrom.json();
    const selectJoke = document.querySelector(".jokes-marquee");
    return selectJoke.innerHTML = `<p class="jokes-marquee__p">${jokesFromData.joke}</p>`
}

async function techJokes() {
    const jokesFrom = await fetch("https://v2.jokeapi.dev/joke/Any?type=single");
    const jokesFromData = await jokesFrom.json();
    const selectJoke = document.querySelector(".jokes-marquee");
    return selectJoke.innerHTML = `<p class="jokes-marquee__p">${jokesFromData.joke}</p>`
}

async function jokesDisplay() {
    if (jokeIndex === 0) {
        await dadjokes();
    } else if (jokeIndex === 1) {
        await chuckNorrisJokes();
    } else if (jokeIndex === 2) {
        await geekJokes();
    } else {
        await techJokes();
    }
    
    jokeIndex = (jokeIndex + 1) % 4;
}

jokesDisplay();
setInterval(jokesDisplay, 20000);