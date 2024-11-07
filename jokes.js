let alternateJokes = true;

async function dadjokes() {
    const jokesFromDad = await fetch("https://icanhazdadjoke.com/", {
        method: 'GET',
        headers: { 'Accept': 'application/json' }
    })

    const selectJoke = document.querySelector(".jokes-marquee");
    const jokesFromDaddata = await jokesFromDad.json();
    return selectJoke.innerHTML = `<p class="jokes-marquee__p">${jokesFromDaddata.joke}</p>`
}

async function chuckNorrisJokes() {
    const jokesFromNorris = await fetch("https://api.chucknorris.io/jokes/random");
    const jokesFromNorrisData = await jokesFromNorris.json();
    const selectJoke = document.querySelector(".jokes-marquee");
    return selectJoke.innerHTML = `<p class="jokes-marquee__p">${jokesFromNorrisData.value}</p>`
}

async function jokesDisplay() {
    if (alternateJokes) {
        await dadjokes();
    } else {
        await chuckNorrisJokes();
    }
    alternateJokes = !alternateJokes;

}

jokesDisplay();
setInterval(jokesDisplay, 20000);