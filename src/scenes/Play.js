class Play extends Phaser.Scene{
    constructor() {
        super("playScene");
    }

    preload(){

        // load the images/tile sprites
        // ------------------BACKGROUND
        this.load.image('parallax_0', './assets/parallax-mountain-bg.png');
        this.load.image('parallax_1', './assets/parallax-mountain-montain-far.png');
        this.load.image('parallax_2', './assets/parallax-mountain-mountains.png');
        this.load.image('parallax_3', './assets/parallax-mountain-trees.png');
        this.load.image('parallax_4', './assets/parallax-mountain-foreground-trees.png');

        // ------------------PLAYER


        // load a spritesheet
        // this.load.spritesheet('explosion', './assets/explosion.png', {
        //     frameWidth: 64,
        //     frameHeight: 32,
        //     startFrame: 0,
        //     endFrame: 9
        // })
    }

    create() {

        // Create and Place Parallax Background
        // ------------------------------------ Placing the base background
        this.parallax_base = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'parallax_0').setOrigin(0,0);
        this.parallax_base.setScrollFactor(0);
        this.parallax_base.displayWidth = game.config.width*3.5; // Fixing scale to fit screen
        this.parallax_base.scaleY = this.parallax_base.scaleX;

        // ------------------------------------ Placing the 1st Layer
        this.parallax_1 = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'parallax_1').setOrigin(0,0);
        this.parallax_1.setScrollFactor(0);
        this.parallax_1.displayWidth = game.config.width*3.5;
        this.parallax_1.scaleY = this.parallax_base.scaleX;

        // ------------------------------------ Placing the 2nd Layer
        this.parallax_2 = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'parallax_2').setOrigin(0,0);
        this.parallax_2.setScrollFactor(0);
        this.parallax_2.displayWidth = game.config.width*3.5;
        this.parallax_2.scaleY = this.parallax_base.scaleX;

        // ------------------------------------ Placing the 3rd Layer
        this.parallax_3 = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'parallax_3').setOrigin(0,0);
        this.parallax_3.setScrollFactor(0);
        this.parallax_3.displayWidth = game.config.width*3.5;
        this.parallax_3.scaleY = this.parallax_base.scaleX;

        // ------------------------------------ Placing the 4th Layer
        this.parallax_4 = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'parallax_4').setOrigin(0,0);
        this.parallax_4.setScrollFactor(0);
        this.parallax_4.displayWidth = game.config.width*3.5;
        this.parallax_4.scaleY = this.parallax_base.scaleX;

        // Create Game Camera
        this.myCam = this.cameras.main;

        // // making the camera follow the player
        // this.myCam.startFollow(this.player);

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

    createParallaxBackground(){
        
    }

    update() {

        // Camera and Parallax Movement
        // ------------------------------------ Scrolling the camera
        this.myCam.scrollX -= 3;
        // ------------------------------------ Changing the scroll speed of each layer
        this.parallax_1.tilePositionX = this.myCam.scrollX * .2;
        this.parallax_2.tilePositionX = this.myCam.scrollX * .4;
        this.parallax_3.tilePositionX = this.myCam.scrollX * .5;
        this.parallax_4.tilePositionX = this.myCam.scrollX;
        
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