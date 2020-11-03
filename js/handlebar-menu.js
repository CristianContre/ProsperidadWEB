const source = document.getElementById('menu-template').innerHTML;
const template = Handlebars.compile(source);

const context = {
    menuItem: [
        {
            name: "Inicio",
            linkedPage: './index.html',
        },
        {
            name: "Quienes Somos",
            linkedPage: './aboutus.html',
        },
        {
            name: 'Servicios',
            linkedPage: './services.html',
        },
        {
            name: 'Experiencia',
            linkedPage: './experience.html',
        },
        {
            name: 'Documentos',
            linkedPage: './documents.html',
        },
        {
            name: 'Contacto',
            linkedPage: './contact.html',
        }
    ]
}
document.getElementById('nav-menu').innerHTML = template(context);

const screenHeight = window.innerHeight - 180 + 'px';
document.getElementById('body-main').style.minHeight = screenHeight;

let isDropped = false;
// const mAppItemStyle = document.getElementById('logo-menu').style;
const headerNavStyle = document.getElementById('header-nav').style;

document.getElementById('nav-menu-app').addEventListener('click',dropMenu);

function dropMenu() {
    if (!isDropped) {
        headerNavStyle.overflow = 'visible';
        // mAppItemStyle.backgroundColor = '#1b5769';
    } else {
        headerNavStyle.overflow = 'hidden';
        // mAppItemStyle.backgroundColor = '#7CBBCC';
    }
    isDropped = !isDropped;
}
// function setMenuContainerWidth(widthIn) {
//     const elementos = document.getElementsByClassName('menu-item');
    
//     for (let i = 0; i < elementos.length; i++) {
//         elementos[i].style.width = widthIn;
//     }
// }

// const boxWidth = `${100/context.menuItem.length}%`;

// setMenuContainerWidth(boxWidth);