// Hero TEXT
let heroText = hero.headline
let heroArray = heroText.split(" ")
let part1 = heroArray.slice(0, 4)
let part2 = heroArray.slice(5, 8)
let part3 = heroArray.slice(8, heroArray.length)

let part1Text = part1.map((e) => e).join(" ")
let part2Text = part2.map((e) => e).join(" ")
let part3Text = part3.map((e) => e).join(" ")

let heroString =/*html*/ `
    <figure class="hero-fig">
    
        <img src="${hero.image}" alt="${hero.headline}">
        <figcaption>
            <h2>
                <span>${part1Text}</span>
                <span class="hero-text-part2">${part2Text}</span>
                <span>${part3Text}</span>
            </h2>
            <p class="hero-paragaf">${hero.copy}</p>
        </figcaption>
        
    </figure>
`
heroDom.insertAdjacentHTML("afterbegin", heroString)

