class Runner extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        scene.physics.add.existing(this);
        
        // Physics Properties
        this.setCollideWorldBounds(true);
        this.body.setSize(this.width, this.height, true);
        this.setGravityY(2000);
        
        // jump sound
        this.sfx_jump = scene.sound.add('sfx_jump');

        // Physics Variables
        this.ACCELERATION = 1000;
        this.MAX_X_VEL = 100;
        this.MAX_Y_VEL = 100; 
        this.MAX_JUMPS = 2;
        this.JUMP_VELOCITY = -500;
        this.DRAG = 500;
    }

    update(scene){

        //this.body.setVelocityX(100);
        // Check keyboard input
        //if(cursors.left.isDown) {}
        // if(scene.cursors.left.isDown && !scene.cursors.right.isDown) {
        //     this.body.setAccelerationX(-this.ACCELERATION);
        //     this.setFlip(true, false);
        // } 
        // else if(scene.cursors.right.isDown && !scene.cursors.left.isDown) {
        //     this.body.setAccelerationX(this.ACCELERATION);
        //     this.resetFlip();
        // } 
        // else {
        //     // set acceleration to 0 so DRAG will take over
        //     this.body.setAccelerationX(0);
        //     this.body.setDragX(this.DRAG);
        // }
    
        // // check if player is on the ground
        this.isGrounded = this.body.touching.down;

        if(this.isGrounded) {
            this.jumps = this.MAX_JUMPS;
            this.jumping = false;
        } else {
            // play jumping animation
        }

        // allows for steady change up to a certain key down duration
        if (this.jumps > 0 && Phaser.Input.Keyboard.DownDuration(scene.cursors.up, 150)) {
            this.body.velocity.y = this.JUMP_VELOCITY;
            //this.sfx_jump.play();
            this.jumping = true;
        }

        // letting go of the up key subtracts a jump
        if (this.jumping && Phaser.Input.Keyboard.UpDuration(scene.cursors.up)) {
            this.jumps--;
            this.jumping = false;
        }
        
        // if character jumps play jump sound
        if (Phaser.Input.Keyboard.JustDown(scene.cursors.up) && this.jumps > 0) {
            this.sfx_jump.play();
        }
    }
}