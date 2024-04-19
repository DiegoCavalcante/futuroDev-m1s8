const title = document.getElementById("title")
const elements = document.getElementsByClassName('text')

const btnEx1 = document.getElementById('btn-ex1')
const btnEx2 = document.getElementById('btn-ex2')
const btnEx3 = document.getElementById('btn-ex3')
const btnEx4 = document.getElementById('btn-ex4')
const btnEx5 = document.getElementById('btn-ex5')
const btnEx6 = document.getElementById('btn-ex6')
const btnEx7 = document.getElementById('btn-ex7')
const btnEx8 = document.getElementById('btn-ex8')

btnEx1.addEventListener('click',() => {
    title.style.backgroundColor = "blue"
})

btnEx2.addEventListener('click', () => {
    for(let i = 0; i<elements.length;i++){
        elements[i].innerHTML = 'Texto modificado'
    }   
})

btnEx3.addEventListener('click', () => {
    let newElement = document.createElement('h1')
    newElement.innerHTML = 'Elemento adicionado'
    document.body.appendChild(newElement)
})

btnEx4.addEventListener('click', ()=>{
    const div4 = document.querySelector('div:nth-child(4)')
    const h1 = document.querySelector('div:nth-child(4) h1')

    div4.removeChild(h1)
})

btnEx5.addEventListener('click', ()=>{
    for(let i = 0; i<elements.length;i++){
        elements[i].style.backgroundColor = 'green'
    }   
})

btnEx6.addEventListener('click', ()=>{
    const h1 = document.querySelector('div:nth-child(6) h1')
    h1.classList.add('regular')
})

btnEx7.addEventListener('click', ()=>{
    const h1 = document.querySelector('div:nth-child(7) h1')
    h1.classList.remove('regular')
})

btnEx8.addEventListener('click', ()=>{
    const btn = document.querySelector('div:nth-child(8) h1')
    btn.setAttribute('style', 'background-color: red; color: white')
})