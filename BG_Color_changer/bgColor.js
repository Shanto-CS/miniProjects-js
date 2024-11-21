const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");
const reset = document.querySelector('button')


buttons.forEach((button)=>{
    button.addEventListener('click', (e)=>{
       body.style.background = e.target.id
        
    })
})

reset.addEventListener('click', ()=>{
    body.style.background = '#1f232a'
})