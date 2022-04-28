const hamburgerIcon = document.querySelector('.hamburger-icon')

function toggleMenu() {
    const links = document.querySelector('.mobile-links')
    const icon = document.querySelector('.icon')

    if (links.style.display === "block") {
        links.style.display = "none";
    } else {
        links.style.display = "block";
    }
    if (icon.classList.contains('fa-bars')) {
        icon.classList.remove('fa-bars')
        icon.classList.add('fa-xmark')
    } else if (icon.classList.contains('fa-xmark')) {
        icon.classList.remove('fa-xmark')
        icon.classList.add('fa-bars')
    } else {
        icon.classList.add('fa-bars')
    }
}

hamburgerIcon.addEventListener('click', toggleMenu)