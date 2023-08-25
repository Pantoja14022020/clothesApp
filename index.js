
// Esperar a que se cargue completamente el contenido de la página
window.addEventListener('load', function () {
// Solicitar que el navegador oculte la barra de direcciones
window.scrollTo(0, 1);

// Ocultar la barra de direcciones y elementos similares
window.addEventListener('resize', function () {
    document.body.style.height = window.innerHeight + 'px';
    if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') {
    window.setTimeout(function () {
        document.activeElement.scrollIntoViewIfNeeded();
    }, 0);
    }
});
window.dispatchEvent(new Event('resize'));
});