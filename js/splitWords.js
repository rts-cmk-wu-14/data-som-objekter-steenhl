function splitWord(wordsArray) {
    return wordsArray.split(" ").map((word) => `<span>${word}</span>`).join()
}

// const wrapped = hero.headline
//     .split(" ")
//     .map(w => `<span>${w}</span>`)
//     .join(" ")