const servicesDom = document.querySelector(".services")

let servicesTemplate = /*html*/ `${services.map((service) => {
    return /*html*/ `
    <section>

        <img src="${service.illustration}" />
        <figure>
            <figcaption>
                <h2>${service.headline}</h2>
                <p>${service.text}</p>
                <button>${service.linktext}</button>
            </figcaption>
        </figure>
    </section>`
}).join("")}`

servicesDom.insertAdjacentHTML("afterbegin", servicesTemplate)

