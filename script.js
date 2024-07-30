const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

function navToggle() {
    // Toggles a different class for Hamburger button
    btn.classList.toggle('open')
    nav.classList.toggle('hidden')
    document.body.classList.toggle('no-scroll')
}

btn.addEventListener('click', navToggle)