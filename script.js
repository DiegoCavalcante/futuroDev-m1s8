const title = document.getElementById("title")
const btnEx1 = document.getElementById('btn-ex1')
const btnEx2 = document.getElementById('btn-ex2')
const elements = document.getElementsByClassName('text')


btnEx1.addEventListener('click',() => {
    title.style.backgroundColor = "blue"
})

btnEx2.addEventListener('click', () => {
    for(let i = 0; i<elements.length;i++){
        elements[i].innerHTML = 'Texto modificado'
    }
   
})
