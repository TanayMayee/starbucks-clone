const btn = document.getElementById('menu-btn')

function navToggle() {
    // Toggles a different class for Hamburger button
    btn.classList.toggle('open')
}

btn.addEventListener('click', navToggle)