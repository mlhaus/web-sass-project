/**
 * @param spanEl: Represents the HTML span element to write text
 * @param speed: An integer in milliseconds, small (fast), high (slow)
 * @param words: An array of string to type
 */
const TypeWriter = function(spanEl, words) {
    this.spanEl = spanEl;
    this.words = words;
    this.speed = 200;
    this.index = 0;
    this.word = "";
    this.isDeleting = false;

    this.type();
}

TypeWriter.prototype.type = function() {
    const fullWord = this.words[this.index % this.words.length];
    if(this.isDeleting) {
        this.word = fullWord.substring(0, this.word.length - 1);
    } else {
        this.word = fullWord.substring(0, this.word.length + 1);
    }
    this.spanEl.innerHTML = `<span class="txt">${this.word}</span>`;

    if(this.word === fullWord) {
        setTimeout(() => {
            this.isDeleting = true;
            this.speed = 100;
        }, 2000);
    } else if(this.word === "") {
        this.isDeleting = false;
        this.index++;
        this.speed = 200;
    }


    setTimeout(() => this.type(), this.speed);
}

function init() {
    const spanEl = document.querySelector(".txt-type");
    const words = JSON.parse(spanEl.getAttribute("data-words"));
    new TypeWriter(spanEl, words);
}

document.addEventListener("DOMContentLoaded", init);