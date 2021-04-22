class Play extends Phaser.Scene{
    constructor() {
        super("playScene");
    }

    preload(){
        // load the images/tile sprites
        // this.load.image('rocket', './assets/rocket.png');
        // this.load.image('spaceship', './assets/spaceship.png');
        // this.load.image('starfield', './assets/starfield.png');

        // load a spritesheet
        // this.load.spritesheet('explosion', './assets/explosion.png', {
        //     frameWidth: 64,
        //     frameHeight: 32,
        //     startFrame: 0,
        //     endFrame: 9
        // })
    }

    create() {
        // //this.add.text(20,20, "Rocket Patrol Menu Play");

        // // place starfield
        // this.starfield = this.add.tileSprite(0, 0, game.config.width, game.config.height,
        //      'starfield').setOrigin(0,0);

        // // green UI background
        // this.add.rectangle(0, borderUISize + borderPadding, game.config.width,
        //     borderUISize * 2, 0x00FF00).setOrigin(0,0);

        // // white borders
        // this.add.rectangle(0, 0, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0,0);
        // this.add.rectangle(0, game.config.height - borderUISize, game.config.width,
        //     borderUISize, 0xFFFFFF).setOrigin(0,0);
        // this.add.rectangle(0, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0,0);
        // this.add.rectangle(game.config.width - borderUISize, 0, borderUISize, game.config.height,
        //     0xFFFFFF).setOrigin(0,0);

        // //add rocket (player 1)
        // this.p1Rocket = new Rocket(this, game.config.width/2, game.config.height - borderUISize -
        //     borderPadding, 'rocket').setOrigin(0.5, 0);

        // // add spaceship (x3)
        // this.ship01 = new Spaceship(this, game.config.width + borderUISize*6, borderUISize*4,
        //     'spaceship', 0, 30).setOrigin(0, 0);
        // this.ship02 = new Spaceship(this, game.config.width + borderUISize*3, borderUISize*5 +
        //     borderPadding+2,'spaceship', 0, 20).setOrigin(0, 0);
        // this.ship03 = new Spaceship(this, game.config.width, borderUISize*6 + borderPadding*4,
        //     'spaceship', 0, 10).setOrigin(0, 0);
            

        // // define keys for rocket p1
        // keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        // keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        // keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        // keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

        // // animation config
        // this.anims.create({
        //     key: 'explode',
        //     frames: this.anims.generateFrameNumbers('explosion', {
        //         start: 0,
        //         end: 9,
        //         first: 0
        //     }),
        //     frameRate: 30
        // });

        // // initialize score
        // this.p1Score = 0;

        // // display score
        // let scoreConfig = {
        //     fontFamily: 'Courier',
        //     fontSize: '28px',
        //     backgroundColor: '#F3B141',
        //     color: '#843605',
        //     align: 'right',
        //     padding:{
        //         top: 5,
        //         bottom: 5,
        //     },
        //     fixedWidth: 100
        // }
        // this.scoreLeft = this.add.text(borderUISize + borderPadding, borderUISize + borderPadding*2, this.p1Score, scoreConfig);
        
        // // GAME OVER flag
        // this.gameOver = false;

        // // 60-second play clock
        // scoreConfig.fixedWidth = 0;
        // this.clock = this.time.delayedCall(game.settings.gameTimer, () => {
        //     this.add.text(game.config.width/2, game.config.height/2, 'GAME OVER', scoreConfig).setOrigin(0.5);
        //     this.add.text(game.config.width/2, game.config.height/2 + 64, 'Press (R) to Restart or ← for Menu', scoreConfig).setOrigin(0.5);
        //     this.gameOver = true;
        // }, null, this);
    }

    update() {
        // // check key input for restart
        // if(this.gameOver && Phaser.Input.Keyboard.JustDown(keyR)) {
        //     this.scene.restart();
        // }

        // if (this.gameOver && Phaser.Input.Keyboard.JustDown(keyLEFT)) {
        //     this.scene.start("menuScene");
        // }

        // // background movement
        // this.starfield.tilePositionX -= starSpeed;

        // if(!this.gameOver){
        //     // update rocket
        //     this.p1Rocket.update();
        //     // update spaceships
        //     this.ship01.update();
        //     this.ship02.update();
        //     this.ship03.update();
        // }

        // // check collisions 
        // if(this.checkCollision(this.p1Rocket, this.ship03)){
        //     this.p1Rocket.reset();
        //     this.shipExplode(this.ship03);
        // }
        // if(this.checkCollision(this.p1Rocket, this.ship02)){
        //     this.p1Rocket.reset();
        //     this.shipExplode(this.ship02);
        // }
        // if(this.checkCollision(this.p1Rocket, this.ship01)){
        //     this.p1Rocket.reset();
        //     this.shipExplode(this.ship01);
        // }
    }

    checkCollision(obj1, obj2){
        // simple AABB checking
        if(obj1.x < obj2.x + obj2.width &&
            obj1.x + obj1.width > obj2.x &&
            obj1.y < obj2.y + obj2.height &&
            obj1.y + obj1.height > obj2.y){
                return true;
        } else{ return false;} 
    }

    shipExplode(ship) {
        // // temporarily hide ship
        // ship.alpha = 0;
        // // create explosion sprite at ship's position
        // let boom = this.add.sprite(ship.x, ship.y, 'explosion').setOrigin(0, 0);
        // // play explode animation
        // boom.anims.play('explode');
        // // callback after anim completes
        // boom.on('animationcomplete', () => {    
        //     ship.reset();                         // reset ship position
        //     ship.alpha = 1;                       // make ship visible again
        //     boom.destroy();                       // remove explosion sprite
        // });
        // // score and repaint
        // this.p1Score += ship.points;
        // this.scoreLeft.text = this.p1Score;
        // this.sound.play('sfx_explosion'); 
    }
}