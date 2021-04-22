let config = {
    type: Phaser.CANVAS,
    width: 960,
    height: 540,
    autoCenter: true,
    scene: [Menu, Play ]
}

let game = new Phaser.Game(config);

// set the UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// set speed for background
let starSpeed = 2;

// reserve keyboard bindings
let keyF, keyR, keyLEFT, keyRIGHT, keySPACE;