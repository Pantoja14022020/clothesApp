const btns = document.querySelectorAll('.checkbox');

btns.forEach(btn => {
    btn.addEventListener('click',e=>{
        e.preventDefault();
        if(e.target.classList.contains('fa-solid')){
            e.target.parentElement.classList.toggle('active')
        }else{
            e.target.classList.toggle('active')
        }
    })
});