
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

//* Send post assistance

const contactForm = document.getElementById('contactForm');
const registro = document.getElementById('registro');
const exito = document.getElementById('exito');
const error = document.getElementById('error');


contactForm.addEventListener('submit', async (e) => {

    e.preventDefault();

    try {
        // throw new Error('Formulario enviado');
        await fetch('https://sheet.best/api/sheets/b6ecd83e-0cf2-453d-9ba4-b8c5b97bdae2', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "Nombre": contactForm.name.value,
                "Apellido": contactForm.lastname.value,
                "Asiste": "Si Asiste"
            })
        });
        registro.classList.remove('activo');
        exito.classList.add('activo');
    } catch (Error) {
        console.log(Error);
        error.message = error.message;
        registro.classList.remove('activo');
        error.classList.add('activo');
    }
});
