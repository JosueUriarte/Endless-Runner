// Endless Runner Project

// global variables
let cursors;

// Game configuration
let config = {
    type: Phaser.CANVAS,
    width: 960,
    height: 540,

    physics: {
        default: 'arcade',
        arcade: {
            //debug: true,
            gravity: {
                x: 0,
                y: 0
            }
        }
    },
    autoCenter: true,
    pixelArt: true,
    scene: [Menu, Play, Credits, Information]
}

let game = new Phaser.Game(config);

// set the UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// set speed for background
let scrollSpeed = 3;

// reserve keyboard bindings
let keyR, keySPACE, keyC, keyB, keyM, keyI;