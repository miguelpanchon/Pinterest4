import './Footer.css';
export function paintFooter() {

    // Get the footer element
    const footerElement = document.getElementById("footer");

    // Create the ul element
    const ul = document.createElement("ul");

    // Create the first li element
    const li1 = document.createElement("li");
    li1.textContent = "by Miguel Panchón, May 2024 ";
    ul.appendChild(li1);

    // Create the second li element
    const li2 = document.createElement("li");
    const a1 = document.createElement("a");
    a1.href = "https://github.com/miguelpanchon/Pinterest/blob/main/README.md";
    a1.textContent = "readme.md";
    li2.appendChild(a1);
    ul.appendChild(li2);

    // Create the third li element
    const li3 = document.createElement("li");
    const a2 = document.createElement("a");
    a2.href = "https://github.com/miguelpanchon/Pinterest";
    a2.textContent = "this code in GitHub";
    li3.appendChild(a2);
    ul.appendChild(li3);

    // Create the fourth li element
    const li4 = document.createElement("li");
    const a3 = document.createElement("a");
    a3.href = "https://miguelpanchon-porfolio.netlify.app/";
    a3.textContent = "My porfolio";
    li4.appendChild(a3);
    ul.appendChild(li4);

    // Create the fifth li element
    const li5 = document.createElement("li");
    const a4 = document.createElement("a");
    a4.href = "https://www.mozilla.org/es-ES/firefox/new/";
    a4.textContent = "Optimized for Firefox";
    li5.appendChild(a4);
    ul.appendChild(li5);

    // Append the ul element to the footer element
    footerElement.appendChild(ul);

}