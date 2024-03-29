// Enemies our Player must avoid
function Enemy(x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if (this.x < 505) {

        this.x += (100 * dt);
    }

    else {
        this.x = -80;
    }
    // console.log(player.x, this.x);
    // console.log(player.y, this.y);
    if (player.x < this.x + 60 && player.x + 60 >
        this.x && player.y < this.y + 60 && 60 + player.y > this.y) {
        player.x = 200;
        player.y = 400;
    };
};
// create Player
let player = new Player(200, 400);
// create Enemies and add thier locations
const allEnemies = [new Enemy(-90, 50), new Enemy(-360, 140), new Enemy(-170, 230)];

function Player(x, y) {
    this.x = x;
    this.y = y;
    //pic
    this.sprite = 'images/char-princess-girl.png';
}
Player.prototype.update = function () {

    if (this.y < 0) {
        massage()
    }
};

Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
function massage() {
    modal.style.display = "block";
}

Player.prototype.handleInput = function (direction) {

    if (direction == 'left' && this.x > 0) {
        this.x -= 100;
    }

    if (direction == 'right' && this.x < 400) {
        this.x += 100;
    }

    if (direction == 'up' && this.y > 0) {
        this.y -= 90;
    }

    if (direction == 'down' && this.y < 400) {
        this.y += 90;
    }

};
var modal = document.getElementById("modal");

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the Player object in a variable called Player


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
