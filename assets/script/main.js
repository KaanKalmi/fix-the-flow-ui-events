let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}

let shake = document.querySelector('a:nth-of-type(1)')

shake.addEventListener('click', shaker)
shake.addEventListener('animationend', shaker)

function shaker() {
  shake.classList.toggle('shaker')
} 

let wobble = document.querySelector('a:nth-of-type(2)')

wobble.addEventListener('click', wobbler)
wobble.addEventListener('animationend', wobbler)

function wobbler() {
  wobble.classList.toggle('wobbler')
} 

let blink = document.querySelector('a:nth-of-type(3)')

blink.addEventListener('click', blinker)
blink.addEventListener('animationend', blinker)

function blinker() {
  blink.classList.toggle('blinker')
} 