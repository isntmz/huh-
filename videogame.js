function gameStart() {
    console.log("Game Started. Good luck, adventurer.")
    window.alert("your mom is wooden frog.")
}


//measurement variables
let w = window.innerWidth
let h = window.innerHeight

function setup() {
    createCanvas(w,h)
}


//blackscreen; wtf is this
function fadeout() {
    fill(black)
    rect(0, 0, w, h)
}


//
function draw() {
    fadeout()
}