let innerCursor = document.querySelector('.inner-cursor');
let outerCursor = document.querySelector('.outer-cursor');
let hamburger = document.querySelector('.hamburger');

document.addEventListener('mousemove', moveCursor);

function moveCursor(event){
    let x = event.clientX;
    let y = event.clientY;

    innerCursor.style.left = `${x}px`;
    innerCursor.style.top = `${y}px`;

    outerCursor.style.left = `${x}px`;
    outerCursor.style.top = `${y}px`;
}

let links = Array.from(document.querySelectorAll("a"));
console.log(links)

links.forEach(link => {
    link.addEventListener("mouseover", () => {
        innerCursor.classList.add("grow");
    });
    link.addEventListener("mouseleave", () => {
        innerCursor.classList.remove("grow");
    });
})

hamburger.addEventListener("click", () => {
    let navbar = document.querySelector('.nav-link-container')
    navbar.classList.toggle('active')
})