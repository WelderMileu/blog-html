(function () {
    'use strict';

    const itemsMenu = document.querySelectorAll(["li"]);
    const position = {
        home: 0,
        sobre: 743,
        sociais: 1408,
        contato: 3454
    }


    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY

        // Home
        if(scrollPosition === position.home || scrollPosition > position.home && scrollPosition < position.sobre) {
            itemsMenu[0].classList.add('font-semibold')
            itemsMenu[0].childNodes[3].classList.remove('hidden')
        } else {
            itemsMenu[0].classList.remove('font-semibold')
            itemsMenu[0].childNodes[3].classList.add('hidden')
        }

        // Sobre
        if(scrollPosition === position.sobre || scrollPosition > position.sobre && scrollPosition < position.sociais) {
            itemsMenu[1].classList.add('font-semibold')
            itemsMenu[1].childNodes[3].classList.remove('hidden')
        } else {
            itemsMenu[1].classList.remove('font-semibold')
            itemsMenu[1].childNodes[3].classList.add('hidden')
        }

        //Sociais
        if(scrollPosition === position.sociais || scrollPosition > position.sociais && scrollPosition < position.contato) {
            itemsMenu[2].classList.add('font-semibold')
            itemsMenu[2].childNodes[3].classList.remove('hidden')
        } else {
            itemsMenu[2].classList.remove('font-semibold')
            itemsMenu[2].childNodes[3].classList.add('hidden')
        }

        //Contato
        if(scrollPosition > position.contato) {
            itemsMenu[3].classList.add('font-semibold')
            itemsMenu[3].childNodes[3].classList.remove('hidden')
        } else {
            itemsMenu[3].classList.remove('font-semibold')
            itemsMenu[3].childNodes[3].classList.add('hidden')
        }
    })

})();