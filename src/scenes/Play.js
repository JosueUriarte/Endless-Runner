class Play extends Phaser.Scene{
    constructor() {
        super("playScene");
        this.c = 0;
    }

    preload(){

        // load the images/tile sprites
        // ------------------BACKGROUND
        this.load.image('parallax_0', './assets/SunsetParallax.png');
        this.load.image('parallax_1', './assets/CloudsParallax.png');
        this.load.image('parallax_2', './assets/MountainsParallax.png');
        this.load.image('parallax_3', './assets/parallax-mountain-trees.png');
        this.load.image('parallax_4', './assets/parallax-mountain-foreground-trees.png');
        this.load.image('ground', "./assets/ground.png");
        this.load.image('frame', "./assets/Frame.png");
        this.load.image('test_player', "./assets/test_player.png");
        this.load.image('car', "./assets/car.png");
        this.load.image('spcar', "./assets/spcar.png");

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

        // Create Game Camera
        this.myCam = this.cameras.main;

        // Assign Keys
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        keyM = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M);
        this.cursors = this.input.keyboard.createCursorKeys();

        // Create and Place Parallax Background
        // ------------------------------------ Placing the base background
        this.parallax_base = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'parallax_0').setOrigin(0,0);
        //this.setParallaxConfig(this.parallax_base);
        // ------------------------------------ Placing the 1st Layer
        this.parallax_1 = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'parallax_1').setOrigin(0,0);
        //this.setParallaxConfig(this.parallax_1);
        // ------------------------------------ Placing the 2nd Layer
        this.parallax_2 = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'parallax_2').setOrigin(0,0);
        //this.setParallaxConfig(this.parallax_2);
        // ------------------------------------ Placing the 3rd Layer
        this.parallax_3 = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'parallax_3').setOrigin(0,0);
        this.setParallaxConfig(this.parallax_3);
        // ------------------------------------ Placing the 4th Layer
        this.parallax_4 = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'parallax_4').setOrigin(0,0);
        this.setParallaxConfig(this.parallax_4);

        // Create Ground Tile Sprite
        this.ground = this.add.tileSprite(50, 510, 0, 0, 'ground').setOrigin(0, 0);
        this.physics.add.existing(this.ground);
        this.ground.body.immovable = true;

        // Create Frame
        this.layer = this.add.layer();
        this.layer.depth = 1;
        this.layer.add(this.add.image(game.config.width, game.config.height, 'frame').setOrigin(1));

        // Set up game over flag
        this.gameOver = false;        

        // Create New Player
        this.test_player = new Runner(this, game.config.width - 280, game.config.height - 100, 'test_player');

        // Create Obstacle
        this.obstacleGroup = this.physics.add.group ({
            classType: Obstacle,
            setDepth: 0,
            maxSize: 1,
            runChildUpdate: true
        });

        // setup collider
        this.physics.add.collider(this.test_player, this.ground);
        this.physics.add.overlap(this.obstacleGroup, this.test_player, this.gameEnd, null, this);
        
        // DEBUG STUFF
        this.info = this.add.text(0, 0, 'objects being used', { fill: '#00ff00' });

        // play music
        this.music = this.sound.add('chillWaveMusic');
        var musicConfig = {
            mute: false,
            volume: 0.5,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: true,
            delay: 0
        }
        this.music.play(musicConfig);
        this.soundSFX = this.sound.add('sfx_select');

        // Making game harder
        this.changeTime = this.time.addEvent({ delay: 8000, callback: this.forwardTime, callbackScope: this, loop: true });

    }

    update() {

        // DEBUG FOR SPAWNER
        this.info.setText([
            'Used: ' + this.obstacleGroup.getTotalUsed(),
            'Free: ' + this.obstacleGroup.getTotalFree()
            //'Obstacle Num: ' + Math.floor(Math.random() * 2)
        ]);
        
        // Do these tasks if game is not over
        if(!this.gameOver) {

            // Spawning Obstacles
            var obstacle = this.obstacleGroup.get();
            if(obstacle){
                var waitDelay = (Math.random() * (7 - 4) + 4) * 1000;
                //console.log(waitDelay);
                this.clock = this.time.addEvent({ delay: 6000, callback: this.spawnObstacle(obstacle), callbackScope: this});
            }

            // Parallax Movement
            // ----------------- Changing the scroll speed of each layer
            this.parallax_1.tilePositionX -= scrollSpeed / 6;
            this.parallax_2.tilePositionX -= scrollSpeed / 3;
            this.parallax_3.tilePositionX -= scrollSpeed / 2;
            this.parallax_4.tilePositionX -= scrollSpeed;

            // Ground Movement
            this.ground.tilePositionX -= scrollSpeed / 2.5;
        
            // Player Update
            this.test_player.update(this);
        }

        // Restart Scene when game is over and key is pressed
        if(this.gameOver && Phaser.Input.Keyboard.JustDown(keyR)) {
            scrollSpeed = 3;
            this.music.stop();
            this.soundSFX.play();
            this.scene.restart();
        }

        // Go to menu scene if game is over and M is pressed
        if(this.gameOver && Phaser.Input.Keyboard.JustDown(keyM)) {
            this.music.stop();
            this.soundSFX.play();
            this.scene.start('menuScene');
        }

    }

    forwardTime(){
        scrollSpeed += 0.5;

        this.c++;

        if(this.c === 30){
            this.changeTime.remove(false);
        }
    }

    spawnObstacle(obstacle){
        //console.log("ay wassyp");
        obstacle.chooseCar(Math.floor(Math.random() * 2));
        obstacle.spawn(this.ground.x - 100, this.ground.y - this.ground.height);
    }
    
    gameEnd(){

        let gameOverConfig = {
            fontFamily: 'Roboto',
            fontSize: '20px',
            //backgroundColor: '#00FFE0',
            color: '#000000',
            align: 'center',
            padding:{
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        this.add.text(game.config.width/2, game.config.height/2, 'GAME OVER', gameOverConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2 + 30, 'Press R to Restart', gameOverConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2 + 60, 'Press M to Return to Menu', gameOverConfig).setOrigin(0.5);
        this.gameOver = true;
    }

    setParallaxConfig(parallaxLayer){
        parallaxLayer.setScrollFactor(0);
        parallaxLayer.displayWidth = game.config.width*3.5; // Fixing scale to fit screen
        parallaxLayer.scaleY = parallaxLayer.scaleX;
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
}