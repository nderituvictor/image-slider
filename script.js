const images = [
  "img/1.jpg",
  "img/2.jpg",
  "img/3.jpg",
  "img/4.jpg",
  "img/5.jpg",
  "img/6.jpg",
  "img/7.jpg",
]
const imageEl = document.querySelector('.images')
const button = document.querySelector('.button')
const button2 = document.querySelector('.button2')
let random

button.addEventListener('click', () => {
 random = Math.floor(Math.random()* images.length)
 imageEl.innerHTML = `<img src="${images[random]}" alt="" width="700">`
})
button2.addEventListener('click', () => {
 random = Math.floor(Math.random()* images.length)
 imageEl.innerHTML = `<img src="${images[random]}" alt="" width="700">`
})
