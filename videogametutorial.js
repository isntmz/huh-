let player

// measurement variables
let w = window.innerWidth
let h = window.innerHeight

let bx = w / 2
let by = h / 2

let boxx = w 

let gay

function returnhome() {
    window.location.href = "videogamehome.html"
}

function preload() {
    gay = loadImage("berrybobjones.png")
    apple = loadImage("apple.png")
}

function setup() {
    createCanvas(w, h)
    player = new figure()
}

function goal() {
    image(apple,bx*1.2,by*0.5,100,100)
}

function figure() {
    //starting point of the player
    this.x = bx
    this.y = by

    //function to setup the initial player position
    this.show = function () {
        //determine what it will look like
        image(gay,this.x,this.y,50,50)
    }
}

function draw() {
    clear()
    w = window.innerWidth
    h = window.innerHeight
    createCanvas(w,h)
    player.show()
    goal()
    let speed = 5

    //conditional statement, if the x of the ball goes =0 or <0, the conditional wont run
    if (player.x > 0) {
        if (keyIsDown(LEFT_ARROW)) {
            player.x -= speed
        }
    }
    //conditional statement, if the x of the ball goes =0 or <0, the conditional wont run
    if (player.x <= w*0.97) {
        if (keyIsDown(RIGHT_ARROW)) {
            player.x += speed
        }
    }

    if (player.y > 0) {
        if (keyIsDown(UP_ARROW)) {
            player.y -= speed
        }
    }

    if (player.y <= h*0.81) {
        if (keyIsDown(DOWN_ARROW)) {
            player.y += speed
        }
    }
}

function box() {
    rect(boxx,boxy)
}