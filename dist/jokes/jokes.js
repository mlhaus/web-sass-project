const joke = document.getElementById("joke-container");
const btn = document.getElementById("jokeBtn");

async function getJoke() {
    const config = {
        headers: {
            Accept: "application/json"
        }
    };
    const response = await fetch("https://icanhazdadjoke.com/", config);
    const data = await response.json();

    joke.innerHTML = `<p>${data.joke}</p>`;
}


getJoke();
btn.addEventListener("click", getJoke);