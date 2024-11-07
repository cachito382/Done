let captura1 = document.getElementById ('captura1')
let captura2 = document.getElementById ('captura2')
let logo = document.getElementById ('logo')
let degradado = document.getElementById ('degradado')
let locura = document.getElementById('locura')

window.addEventListener ('scroll',() => {
    let value = window.scrollY;
    locura.style.paddingTop = value * 0.4 + 'px'; 
    captura2.style.top = value * 0.5 + 'px';
    captura1.style.top = value * 0.4 + 'px';
    logo.style.top = value * -1.5 + 'px';
    degradado.style.top = value * 0.4 + 'px';
});