// selects an element and makes it a variable
let shake = document.querySelector('a:nth-of-type(1)') // selects the 1st a tag WORKS
let alarm = document.querySelector('a:nth-of-type(2)') // selects the 2nd a tag WORKS
let bikelight = document.querySelector('a:nth-of-type(3)') // selects the 3rd a tag WORKS
let luffy = document.querySelector('a:nth-of-type(4)') // selects the 4th a tag WORKS
let trip = document.querySelector('a:nth-of-type(5)') // selects the 5th a tag WORKS
let bounce = document.querySelector('a:nth-of-type(6)') // selects the 6th a tag WORKS
let floom = document.querySelector('a:nth-of-type(7)') // selects the 7th a tag WORKS
let woosh = document.querySelector('a:nth-of-type(8)') // selects the 8th a tag WORKS
let bye = document.querySelector('a:nth-of-type(9)') // selects the 9th a tag WORKS
let heya = document.querySelector('a:nth-of-type(10)') // selects the 10th a tag WORKS
let abducted = document.querySelector('a:nth-of-type(11)') // selects the 11th a tag WORKS
let interaction = document.querySelector('a:nth-of-type(12)') // selects the 12th a tag WORKS
let roll = document.querySelector('a:nth-of-type(13)') // selects the 13th a tag WORKS
let zoom = document.querySelector('a:nth-of-type(14)') // selects the 14th a tag WORKS
let weee = document.querySelector('a:nth-of-type(15)') // selects the 15th a tag WORKS
let grappler = document.querySelector('a:nth-of-type(16)') // selects the 16th a tag WORKS
let switchteam = document.querySelector('a:nth-of-type(17)') // selects the 17th a tag WORKS
let carti = document.querySelector('a:nth-of-type(18)') // selects the 18th a tag WORKS
let travis = document.querySelector('a:nth-of-type(19)') // selects the 19th a tag WORKS
let blubber = document.querySelector('a:nth-of-type(20)') // selects the 20th a tag WORKS
let dbl = document.querySelector('a:nth-of-type(1)') // selects the 1st a tag WORKS
let buttons = document.querySelectorAll('a'); // selects all a tags WORKS

// listens for click
shake.addEventListener('click', shaker) 
alarm.addEventListener('click', wobbler)  
bikelight.addEventListener('click', blinker) 
luffy.addEventListener('click', gomugomu)  
trip.addEventListener('click', lowbattery)
bounce.addEventListener('click', bouncer)
floom.addEventListener('click', rotate)
woosh.addEventListener('click', disappear)
bye.addEventListener('click', blurredout)
heya.addEventListener('click', hello)
abducted.addEventListener('click', rideOut)
interaction.addEventListener('click', jumpHandler)
roll.addEventListener('click', barrelroll)
zoom.addEventListener('click', wave)
weee.addEventListener('click', swirl)
grappler.addEventListener('click', pulled)
switchteam.addEventListener('click', michaeljackson)
carti.addEventListener('click', what)
travis.addEventListener('click', who)
blubber.addEventListener('click', yuh)

// listens for animation end
alarm.addEventListener('animationend', wobbler) 
shake.addEventListener('animationend', shaker)
bikelight.addEventListener('animationend', blinker)
luffy.addEventListener('animationend', gomugomu)
trip.addEventListener('animationend', lowbattery)
bounce.addEventListener('animationend', bouncer)
floom.addEventListener('animationend', rotate)
woosh.addEventListener('animationend', disappear)
bye.addEventListener('animationend', blurredout)
heya.addEventListener('animationend', hello)
abducted.addEventListener('animationend', rideOut)
interaction.addEventListener('animationend', jumpHandler)
roll.addEventListener('animationend', barrelroll)
zoom.addEventListener('animationend', wave)
weee.addEventListener('animationend', swirl)
grappler.addEventListener('animationend', pulled)
switchteam.addEventListener('animationend', michaeljackson)
carti.addEventListener('animationend', what)
travis.addEventListener('animationend', who)
blubber.addEventListener('animationend', yuh)

// listens for double click
dbl.addEventListener('dblclick', colored)

//listens for key press
window.addEventListener('keydown', function(event) {
    if (event.key === '1') { //if key '1' is pressed
        buttons.forEach(function(button) { //for each button in the array
            button.classList.add('colors'); //toggles class on and off after keydown
        });
    }
});

window.addEventListener('keydown', function(event) {
    if (event.key === '3') { 
        buttons.forEach(function(button) { 
            button.classList.add('colored'); 
        });
    }
});

window.addEventListener('keydown', function(event) {
    if (event.key === '2') {  //if key '3' is pressed
        buttons.forEach(function(button) {  
            button.classList.remove('colors'); //removes class after keydown
        });
    }
});

window.addEventListener('keydown', function(event) {
    if (event.key === '4') { 
        buttons.forEach(function(button) { 
            button.classList.remove('colored'); 
        });
    }
});

//Functions that toggle the class on and off for the animations
//click function
function shaker() { shake.classList.toggle('shaker') }
function wobbler() { alarm.classList.toggle('wobbler') } 
function blinker() { bikelight.classList.toggle('blinker') } 
function gomugomu() { luffy.classList.toggle('gomugomu') }
function lowbattery() { trip.classList.toggle('lowbattery') }
function bouncer() { bounce.classList.toggle('bouncer') }
function rotate() { floom.classList.toggle('rotate') }
function disappear() { woosh.classList.toggle('disappear') }
function blurredout() { bye.classList.toggle('blurredout') }
function hello() { heya.classList.toggle('hello') }
function rideOut() {abducted.classList.toggle('rideOut') }
function jumpHandler() { interaction.classList.toggle('jump') }
function barrelroll() { roll.classList.toggle('barrelroll') }
function wave() { zoom.classList.toggle('wave') }
function swirl() { weee.classList.toggle('swirl') }
function pulled() { grappler.classList.toggle('pulled')  }
function michaeljackson() { switchteam.classList.toggle('michaeljackson') }
function what() { carti.classList.toggle('what') }
function who() { travis.classList.toggle('who') }
function yuh() { blubber.classList.toggle('yuh') }

//dblclick function
function colored() { dbl.classList.toggle('colored') }

//Shows in console if it picks the element up
console.log(shake) // SHOWS
console.log(alarm)  // SHOWS
console.log(bikelight) // SHOWS
console.log(luffy) // SHOWS
console.log(trip) // SHOWS
console.log(bounce) // SHOWS
console.log(floom) // SHOWS
console.log(woosh) // SHOWS
console.log(bye) // SHOWS
console.log(heya) // SHOWS
console.log(abducted) // SHOWS
console.log(interaction) // SHOWS
console.log(roll) // SHOWS
console.log(zoom) // SHOWS
console.log(weee) // SHOWS
console.log(grappler) // SHOWS
console.log(switchteam) // SHOWS
console.log(carti) // SHOWS
console.log(travis) // SHOWS
console.log(blubber) // SHOWS
console.log(dbl) // SHOWS
console.log(buttons) // SHOWS