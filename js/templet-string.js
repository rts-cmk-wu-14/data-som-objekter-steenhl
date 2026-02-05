const data = ["Steen", "Maria", "Ole"];

const html =
/*html*/`
    <ul>
        ${data.map(name => `<li>${name}</li>`).join("")}
    </ul>
`;