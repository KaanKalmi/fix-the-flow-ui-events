let interaction = document.querySelector('a:nth-of-type(12)')

console.log(interaction) 

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}

let shake = document.querySelector('a:nth-of-type(1)')

console.log(shake)

shake.addEventListener('click', shaker)
shake.addEventListener('animationend', shaker)

function shaker() {
  shake.classList.toggle('shaker')
} 

let wobble = document.querySelector('a:nth-of-type(2)')

console.log(wobble) 

wobble.addEventListener('click', wobbler)
wobble.addEventListener('animationend', wobbler)

function wobbler() {
  wobble.classList.toggle('wobbler')
} 

let blink = document.querySelector('a:nth-of-type(3)')

console.log(blink)

blink.addEventListener('click', blinker)
blink.addEventListener('animationend', blinker)

function blinker() {
  blink.classList.toggle('blinker')
} 

let rubberband = document.querySelector('a:nth-of-type(4)')

console.log(rubberband)

rubberband.addEventListener('click', rubberbanding)
rubberband.addEventListener('animationend', rubberbanding)

function rubberbanding() {
  rubberband.classList.toggle('rubberbanding')
}

let trip = document.querySelector('a:nth-of-type(5)')

console.log(trip)

trip.addEventListener('click', tripping)
trip.addEventListener('animationend', tripping)

function tripping() {
  trip.classList.toggle('tripping')
}

let bounce = document.querySelector('a:nth-of-type(6)')

console.log(bounce)

bounce.addEventListener('click', bouncer)
bounce.addEventListener('animationend', bouncer)

function bouncer() {
  bounce.classList.toggle('bouncer')
}
