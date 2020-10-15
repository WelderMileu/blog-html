// percorrendo os items do nosso menu
const itemsMenu = document.querySelectorAll(["li"]);

// posicação das telas na pagina no eixo x
const position = {
    home: 0,
    sobre: 743,
    sociais: 1408,
    contato: 3454
}

// eventos de estilo do menu 
const evento = {
    active(number) {
        itemsMenu[number].classList.add('font-semibold')
        itemsMenu[number].childNodes[3].classList.remove('hidden')
    },

    inative(number) {
        itemsMenu[number].classList.remove('font-semibold')
        itemsMenu[number].childNodes[3].classList.add('hidden')
    }
}

// função de animação do menu
function scrollMenu() {
    const scrollPosition = window.scrollY

    // home
    if (scrollPosition === position.home ||
        scrollPosition > position.home &&
        scrollPosition < position.sobre) {

        evento.active(0)
    } else {
        evento.inative(0)
    }

    // sobre
    if (scrollPosition === position.sobre ||
        scrollPosition > position.sobre &&
        scrollPosition < position.sociais) {

        evento.active(1)
    } else {
        evento.inative(1)
    }

    // sociais
    if (scrollPosition === position.sociais ||
        scrollPosition > position.sociais &&
        scrollPosition < position.contato) {

        evento.active(2)
    } else {
        evento.inative(2)
    }

    // contato
    if (scrollPosition > position.contato) {
        evento.active(3)
    } else {
        evento.inative(3)
    }
}

export default scrollMenu;
