export default function heroModul(heroDom) {

    const heroArray = hero.headline.split(" ")
    let part1Text = heroArray.slice(0, 4).join(" ")
    let part2Text = heroArray.slice(5, 8).join(" ")
    let part3Text = heroArray.slice(8).join(" ")

    const heroString = /*html*/`
 <figure>
    <img src="${hero.image}" alt="${hero.headline}">
    <figcaption>
        <h1>
            <span>${part1Text}</span>
            <span class="hero-text-part2">${part2Text}</span>
            <span>${part3Text}</span> </h1>
        <p>${hero.copy}</p>
        <button>
            <figure><img src="${hero.icon}"></figure>
            <span>Explore</span>
        </button>
    </figcaption>
</figure>`

    heroDom.insertAdjacentHTML("afterbegin", heroString)

}