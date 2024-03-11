let player

// measurement variables
let w = window.innerWidth
let h = window.innerHeight

let bx = w/2
let by = h/2

function setup() {
    createCanvas(w, h)
    player = new figure()
}

function figure() {
    //velocty of the player
    this.velocity = 0
    //starting point of the player
    this.x = bx
    this.y = 0
    //the rate at which the player will fall due to gravity (not standing on a platform)
    this.gravity = 0.5
    //the rate at which, upon pressing space, the player will go up
    this.lift = -10

    //function to setup the initial player position
    this.show = function () {
        //determine what it will look like
        fill('red')
        circle(this.x, this.y, 50)
    }

    //function to loop on repeat within the draw function
    this.update = function () {
        if (this.y < h) {
            //add current velocity to gravity
            this.velocity += this.gravity
            //what direction does the player travel in
            this.y += this.velocity
            //resistance to falling
            this.velocity *= 0.9
        }
    }

    //upon key press, list
    this.up = function () {
        if (keyIsDown(32)) {
            this.y += this.lift
        }
    }
}

function draw() {
    clear()
    player.show()
    player.update()
    player.up()
    let speed = 5

    //conditional statement, if the x of the ball goes =0 or <0, the conditional wont run
    if (player.x > 0) {
        if (keyIsDown(LEFT_ARROW)) {
            player.x -= speed
        }
    }
    //conditional statement, if the x of the ball goes =0 or <0, the conditional wont run
    if (player.x <= w) {
        if (keyIsDown(RIGHT_ARROW)) {
            player.x += speed
        }
    }
}
