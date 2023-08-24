const selectEstado = document.querySelector('#estado');

if(selectEstado.value == 'nuevo'){
    selectEstado.classList.add('nuevo')
}

if(selectEstado.value == 'viejo'){
    selectEstado.classList.add('viejo')
}

selectEstado.addEventListener('change',e=>{
    e.preventDefault();

    if(e.target.value == 'nuevo'){

        if(e.target.classList.contains('viejo')){
            e.target.classList.remove('viejo')
        }

        e.target.classList.add('nuevo')
    }
    
    if(e.target.value == 'viejo'){

        if(e.target.classList.contains('nuevo')){
            e.target.classList.remove('nuevo')
        }

        e.target.classList.add('viejo')
    }

})