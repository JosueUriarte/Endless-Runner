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
        this.load.image('ground', "./assets/ground.png");
        this.load.image('test_player', "./assets/test_player.png");

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

        // variables and settings
        this.ACCELERATION = 1500;
        this.MAX_X_VEL = 500;
        this.MAX_Y_VEL = 5000; 
        this.MAX_JUMPS = 2;
        this.JUMP_VELOCITY = -700;
        this.DRAG = 600;
        this.physics.world.gravity.y = 2600;

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

        // Ground
        this.ground = this.physics.add.sprite(0, game.config.height - 70,
        'ground').setOrigin(0, 0);
        this.ground.body.immovable = true;
        this.ground.body.allowGravity = false;
        this.ground.setScrollFactor(0, 0);

        // Test player
        this.test_player = this.physics.add.sprite(game.config.width/2, game.config.height/2,
        'test_player').setOrigin(0, 0);
        this.test_player.setCollideWorldBounds(true);
        this.test_player.setScrollFactor(0, 0);
        //this.test_player.body.setScrollFactor(0, 0);
        
        // setup cursor key input
        cursors = this.input.keyboard.createCursorKeys(); 

        // setup collider
        this.physics.add.collider(this.test_player, this.ground);
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
        
        // check keyboard input
        //if(cursors.left.isDown) {}
        if(cursors.left.isDown) {
            this.test_player.body.setAccelerationX(-this.ACCELERATION);
            this.test_player.setFlip(true, false);
        } else if(cursors.right.isDown) {
            this.test_player.body.setAccelerationX(this.ACCELERATION);
            this.test_player.resetFlip();
        } else {
            // set acceleration to 0 so DRAG will take over
            this.test_player.body.setAccelerationX(0);
            this.test_player.body.setDragX(this.DRAG);
        }
    
        // check if player is on the ground
        this.test_player.isGrounded = this.test_player.body.touching.down;

        if(this.test_player.isGrounded) {
            this.jumps = this.MAX_JUMPS;
            this.jumping = false;
        } else {
            // play jumping animation
        }

        // allows for steady change up to a certain key down duration
        if (this.jumps > 0 && Phaser.Input.Keyboard.DownDuration(cursors.up, 150)) {
            this.test_player.body.velocity.y = this.JUMP_VELOCITY;
            this.jumping = true;
        }

        // letting go of the up key subtracts a jump
        if (this.jumping && Phaser.Input.Keyboard.UpDuration(cursors.up)) {
            this.jumps--;
            this.jumping = false;
        }
       
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