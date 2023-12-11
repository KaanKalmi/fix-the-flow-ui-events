let interaction = document.querySelector('a:nth-of-type(12)') // selects the 12th a tag

console.log(interaction)  // shows in console

interaction.addEventListener('click', jumpHandler) // listens for click
interaction.addEventListener('animationend', jumpHandler) // listens for animation end

function jumpHandler() { 
  interaction.classList.toggle('jump') // toggles the class jump
}

let shake = document.querySelector('a:nth-of-type(1)') // selects the 1st a tag

console.log(shake) // shows in console

shake.addEventListener('click', shaker) // listens for click
shake.addEventListener('animationend', shaker) // listens for animation end

function shaker() {
  shake.classList.toggle('shaker') // toggles the class shaker
} 

let wobble = document.querySelector('a:nth-of-type(2)') // selects the 2nd a tag

console.log(wobble)  // shows in console

wobble.addEventListener('click', wobbler)  // listens for click
wobble.addEventListener('animationend', wobbler) // listens for animation end

function wobbler() {
  wobble.classList.toggle('wobbler') // toggles the class wobbler
} 

let blink = document.querySelector('a:nth-of-type(3)') // selects the 3rd a tag
 
console.log(blink) // shows in console

blink.addEventListener('click', blinker)  // listens for click
blink.addEventListener('animationend', blinker) // listens for animation end

function blinker() {
  blink.classList.toggle('blinker') // toggles the class blinker
} 

let rubberband = document.querySelector('a:nth-of-type(4)') // selects the 4th a tag

console.log(rubberband) // shows in console

rubberband.addEventListener('click', rubberbanding)  // listens for click
rubberband.addEventListener('animationend', rubberbanding) // listens for animation end

function rubberbanding() {
  rubberband.classList.toggle('rubberbanding') // toggles the class rubberbanding
}

let trip = document.querySelector('a:nth-of-type(5)') // selects the 5th a tag

console.log(trip) // shows in console

trip.addEventListener('click', tripping) // listens for click
trip.addEventListener('animationend', tripping) // listens for animation end

function tripping() {
  trip.classList.toggle('tripping') // toggles the class tripping
}

let bounce = document.querySelector('a:nth-of-type(6)') // selects the 6th a tag

console.log(bounce) // shows in console

bounce.addEventListener('click', bouncer) // listens for click
bounce.addEventListener('animationend', bouncer) // listens for animation end

function bouncer() {
  bounce.classList.toggle('bouncer')  // toggles the class bouncer
}

let floom = document.querySelector('a:nth-of-type(7)') // selects the 7th a tag

console.log(floom) // shows in console

floom.addEventListener('click', rotate) // listens for click
floom.addEventListener('animationend', rotate) // listens for animation end

function rotate() { 
  floom.classList.toggle('rotate') // toggles the class rotate
} 

let woosh = document.querySelector('a:nth-of-type(8)') // selects the 8th a tag

console.log(woosh) // shows in console

woosh.addEventListener('click', disappear) // listens for click
woosh.addEventListener('animationend', disappear) // listens for animation end

function disappear() {
  woosh.classList.toggle('disappear') // toggles the class disappear
}
