let player

// measurement variables
let w = window.innerWidth
let h = window.innerHeight

let bx = w / 2
let by = h / 2

let itemx = bx * 1.6
let itemy = by * 0.3
let tutorialcompletion = false

let boxx = w

let bobjones
let apple

//button to return home
function returnhome() {
    window.location.href = "index.html"
}

//preload two images; bob and the apple
function preload() {
    bobjones = loadImage("berrybobjones.png")
    apple = loadImage("apple.png")
}

function setup() {
    createCanvas(w, h)
    //uh oh time, bob becomes an interactable object
    player = new figure()
}

//create an image of the apple using the designated properties
function goal() {
    image(apple, itemx, itemy, 100, 100)
}

function figure() {
    //starting point of the player
    this.x = bx
    this.y = by

    //function to setup the initial player position
    this.show = function () {
        //determine what it will look like
        image(bobjones, this.x, this.y, 50, 50)
    }
}

//collision
let hit = false
let points = 0

function draw() {
    clear()
    w = window.innerWidth
    h = window.innerHeight
    createCanvas(w, h)
    player.show()
    goal()
    //detects whether true; if bob collides with the apple
    hit = collideRectCircle(player.x, player.y, 50, 50, itemx + 50, itemy + 50, 100, 100)
    let speed = 5

    //conditional statement, if the x of the ball goes =0 or <0, the conditional wont run
    if (player.x > 0) {
        if (keyIsDown(LEFT_ARROW)) {
            player.x -= speed
        }
    }
    //conditional statement, if the x of the ball goes =0 or <0, the conditional wont run
    if (player.x <= w * 0.97) {
        if (keyIsDown(RIGHT_ARROW)) {
            player.x += speed
        }
    }

    if (player.y > 0) {
        if (keyIsDown(UP_ARROW)) {
            player.y -= speed
        }
    }

    //specific, so it could match my screen lmfaoao
    if (player.y <= h * 0.81) {
        if (keyIsDown(DOWN_ARROW)) {
            player.y += speed
        }
    }

    //collision detected
    if (hit == true) {
        //give directions
        document.getElementById('directions').innerText = 'spacebar to interact'
        print('collision!', hit);
        //presses spacebar
        if (keyIsDown(32)) {
            //test
            print('spacebar working')
            //yeet the apple out of existence
            itemx = -100
            itemy = -100
            //tutorial completion
            document.getElementById('directions').innerText = "tutorial complete!"
            tutorialcompletion = true
            localStorage.getItem('tutorial')
            localStorage.setItem('tutorial', tutorialcompletion)
            print('tutorial! complete')
        }
    }
    else if (hit == false) {
        print('collision!', hit)
        if (tutorialcompletion == false) {
            document.getElementById('directions').innerText = 'arrow keys to move'
        }
    }

}

