let shake = document.querySelector('a:nth-of-type(1)') // selects the 1st a tag

console.log(shake) // shows in console

shake.addEventListener('click', shaker) // listens for click
shake.addEventListener('animationend', shaker) // listens for animation end

function shaker() {
  shake.classList.toggle('shaker') // toggles the class shaker
} 

let alarm = document.querySelector('a:nth-of-type(2)') // selects the 2nd a tag

console.log(alarm)  // shows in console

alarm.addEventListener('click', wobbler)  // listens for click
alarm.addEventListener('animationend', wobbler) // listens for animation end

function wobbler() {
  alarm.classList.toggle('wobbler') // toggles the class wobbler
} 

let bikelight = document.querySelector('a:nth-of-type(3)') // selects the 3rd a tag
 
console.log(bikelight) // shows in console

bikelight.addEventListener('click', blinker)  // listens for click
bikelight.addEventListener('animationend', blinker) // listens for animation end

function blinker() {
  bikelight.classList.toggle('blinker') // toggles the class blinker
} 

let luffy = document.querySelector('a:nth-of-type(4)') // selects the 4th a tag

console.log(luffy) // shows in console

luffy.addEventListener('click', gomugomu)  // listens for click
luffy.addEventListener('animationend', gomugomu) // listens for animation end

function gomugomu() {
  luffy.classList.toggle('gomugomu') // toggles the class rubberbanding
}

let trip = document.querySelector('a:nth-of-type(5)') // selects the 5th a tag

console.log(trip) // shows in console

trip.addEventListener('click', lowbattery) // listens for click
trip.addEventListener('animationend', lowbattery) // listens for animation end

function lowbattery() {
  trip.classList.toggle('lowbattery') // toggles the class tripping
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

let bye = document.querySelector('a:nth-of-type(9)') // selects the 9th a tag

console.log(bye) // shows in console

bye.addEventListener('click', blurredout) // listens for click
bye.addEventListener('animationend', blurredout) // listens for animation end

function blurredout() {
  bye.classList.toggle('blurredout') // toggles the class blurredout
}

let heya = document.querySelector('a:nth-of-type(10)') // selects the 10th a tag

console.log(heya) // shows in console

heya.addEventListener('click', hello) // listens for click
heya.addEventListener('animationend', hello) // listens for animation end

function hello() {
  heya.classList.toggle('hello') // toggles the class hello
}

let abducted = document.querySelector('a:nth-of-type(11)') // selects the 11th a tag

console.log(abducted) // shows in console

abducted.addEventListener('click', rideOut) // listens for click
abducted.addEventListener('animationend', rideOut) // listens for animation end

function rideOut() {
  abducted.classList.toggle('rideOut') // toggles the class rideOut
}

let interaction = document.querySelector('a:nth-of-type(12)') // selects the 12th a tag

console.log(interaction)  // shows in console

interaction.addEventListener('click', jumpHandler) // listens for click
interaction.addEventListener('animationend', jumpHandler) // listens for animation end

function jumpHandler() { 
  interaction.classList.toggle('jump') // toggles the class jump
}

let roll = document.querySelector('a:nth-of-type(13)') // selects the 13th a tag

console.log(roll) // shows in console

roll.addEventListener('click', barrelroll) // listens for click
roll.addEventListener('animationend', barrelroll) // listens for animation end

function barrelroll() {
  roll.classList.toggle('barrelroll') // toggles the class zoom
}

let zoom = document.querySelector('a:nth-of-type(14)') // selects the 14th a tag

console.log(zoom) // shows in console

zoom.addEventListener('click', wave) // listens for click
zoom.addEventListener('animationend', wave) // listens for animation end

function wave() {
  zoom.classList.toggle('wave') // toggles the class zoom
}

let weee = document.querySelector('a:nth-of-type(15)') // selects the 15th a tag

console.log(weee) // shows in console

weee.addEventListener('click', swirl) // listens for click
weee.addEventListener('animationend', swirl) // listens for animation end

function swirl() {
  weee.classList.toggle('swirl') // toggles the class spin
}
