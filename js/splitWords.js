function splitWord(wordsArray) {
    return wordsArray.split(" ").map((word) => `<span>${word}</span>`).join()
}

// let words = splitWord(hero.headline)
// console.log(words);
