class Obstacle extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.setGravityY(2000);
        this.body.setSize(this.width, this.height, true);
        
        this.obSpeed = 0;
    }

    spawn(x, y){
        // When spawned, activate and set its position
        this.setActive(true);
        this.setVisible(true);
        this.setPosition(x, y);
    }

    update(){

        // If the obstacle goes out of bounds, deactivate 
        if (this.x >= game.config.width + 60){
            this.setActive(false);
            this.setVisible(false);
        }

        // Accelerate Obstacle to the right
        this.body.setVelocityX(this.obSpeed * (scrollSpeed/5));
    }

    chooseCar(num){

        // Here we choose what car will be spawned
        switch(num){
            case 0:
                console.log("zero");
                this.setTexture('spcar');
                this.obSpeed = 500;
                break;
            case 1:
                console.log("one");
                this.setTexture('car');
                this.obSpeed = 500;
                
                break;
            default:
                console.log("no car specified")
        }
        
        this.body.setSize(this.width/2, this.height - 30);
    }

}

