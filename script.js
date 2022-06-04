// Menu Hamburguer

const btnMobile = document.getElementById('btn-mobile')

function toggleMenu(event) {
    if (event.type == 'touchstart') event.preventDefault()
    const nav = document.getElementById('nav')
    nav.classList.toggle('active')
    const active = nav.classList.contains('active')
    event.currentTarget.setAttribute('aria-expanded', active)
    if(active) { event.currentTarget.setAttribute('aria-label', 'Fechar Menu')
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu')
    }
}

btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart', toggleMenu)


// Dark Mode

const darkmode = document.getElementById('switch')
const html = document.getElementById('html')

function toggleMenu2(event2) {
    if (event2.type == 'change') event.preventDefault()
    const html = document.getElementById('html')
    html.classList.toggle('dark')
    const dark = html.classList.contains('dark')
}

darkmode.addEventListener('change', toggleMenu2)
darkmode.addEventListener('click', toggleMenu2)

