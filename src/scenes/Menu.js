//const { Phaser } = require("../../lib/phaser");

class Menu extends Phaser.Scene{
    constructor() {
        super("menuScene");
    }

    preload() {

        // load images
        this.load.image('background', './assets/titleScreen.png');

        // load audio
        //this.load.audio('sfx_select', './assets/blip_select12.wav');
        //this.load.audio('sfx_explosion', './assets/explosion38.wav');
        //this.load.audio('sfx_rocket', './assets/rocket_shot.wav');
        this.load.audio('sfx_jump', './assets/audio/jumpSFX.wav');
        this.load.audio('sfx_jump_2', './assets/audio/jumpSFX_2.wav');
        this.load.audio('sfx_explosion', './assets/audio/explosionSFX.wav');
        this.load.audio('chillWaveMusic', './assets/audio/chillwaveMUSIC.wav');
        this.load.audio('sfx_select', './assets/audio/selectSFX.wav');
        this.load.audio('sfx_select_2', './assets/audio/selectSFX_2.wav');
        this.load.audio('sfx_synth', './assets/audio/synthSFX.wav');
    }

    create() {

        // add title screen
        this.backgroundImage = this.add.image(0, 0, 'background').setOrigin(0,0);

        //lets change scenes
        //this.scene.start("playScene");

        // menu text configuration
        // let menuConfig = {
        //     fontFamily: 'Courier',
        //     fontSize: '28px',
        //     backgroundColor: '#F3B141',
        //     color: '#843605',
        //     align: 'right',
        //     padding:{
        //         top: 5,
        //         bottom: 5,
        //     },
        //     fixedWidth: 0
        // }

        // show menu text
        // this.add.text(game.config.width/2, game.config.height/2 - borderUISize -
        // borderPadding, 'ROCKET PATROL', menuConfig).setOrigin(0.5);
        // this.add.text(game.config.width/2, game.config.height/2, 'Use <- -> arrows to move & (F) to fire', menuConfig).setOrigin(0.5);
        // menuConfig.backgroundColor = '#00FF00';
        // menuConfig.color = '#000';
        // this.add.text(game.config.width/2, game.config.height/2 + borderUISize + 
        // borderPadding, 'Press <- for Novice or -> for Expert', menuConfig).setOrigin(0.5);

        // define keys
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        keyC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);
        keyI = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.I);
        // keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        // keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    update() {

        if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
        //     // easy mode
             game.settings = {
                    spaceshipSpeed: 3,
                    gameTimer: 60000
             }
            this.sound.play('sfx_select_2');
            this.scene.start('playScene'); 
        }

        // Go to credits scene
        if (Phaser.Input.Keyboard.JustDown(keyC)) {
            this.sound.play('sfx_select_2');
            this.scene.start('creditsScene');
        }

        // Go to info scene
        if(Phaser.Input.Keyboard.JustDown(keyI)) {
            this.sound.play('sfx_select_2');
            this.scene.start('informationScene');
        }

        // if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
        //     // hard mode
        //     game.settings = {
        //         spaceshipSpeed: 4,
        //         gameTimer: 45000
        //     }
        //     this.sound.play('sfx_select');
        //     this.scene.start('playScene');
        // }
      }

        
}