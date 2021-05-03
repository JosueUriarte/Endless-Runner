class Obstacle extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.setGravityY(2000);
        this.body.setSize(this.width, this.height, true);
        
        this.obSpeed = 0;
    }

    spawn(x, y, speed){
        // When spawned, activate and set its position
        this.setActive(true);
        this.setVisible(true);
        this.setPosition(x, y);
        this.obSpeed = speed;
    }

    update(){

        // If the obstacle goes out of bounds, deactivate
        if (this.x >= game.config.width + 60){
            this.setActive(false);
            this.setVisible(false);
        }

        // Accelerate Obstacle to the right
        this.body.setVelocityX(this.obSpeed);
    }

    chooseTexture(){
        this.setTexture('test_player');
        this.body.setSize(this.width, this.height, true);
    }

    reset(){
        //this.x = game.config.width;
    }
}

