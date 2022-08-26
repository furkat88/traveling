const burger = document.querySelector('.burger')
const bar1 = document.querySelector('.bar1')
const bar2 = document.querySelector('.bar2')
const bar3 = document.querySelector('.bar3')

burger.addEventListener('click', () => {
    bar1.classList.toggle('change')
    bar2.classList.toggle('change')
    bar3.classList.toggle('change')
})