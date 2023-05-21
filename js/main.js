const container=document.querySelector('.container')
const btn1=document.querySelector('.btn1')
const btn2=document.querySelector('.btn2')
const box=document.querySelector('.box')
const sign_in=document.querySelector('.sign-in')
const sign_up=document.querySelector('.sign-up')

btn1.addEventListener("click", ()=>{
    container.classList.add('container2')
    box.style.left="0px"
    sign_in.classList.add("in")
    sign_up.classList.add("up")
})

btn2.addEventListener("click", ()=>{
    container.classList.remove('container2')
    box.style.left="400px"
    sign_up.classList.remove("up")
    sign_in.classList.remove("in")
})