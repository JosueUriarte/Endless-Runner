class Parallax extends Phaser.GameObjects.TileSprite {
    constructor(scene, x, y, width, height, texture, frame){
        super(scene, x, y, width, height, texture, frame);

        // add object to the exsisting scene
        scene.add.existing(this);

        // more object 
        // this.parallax_base = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'parallax_0').setOrigin(0,0);
        // this.parallax_base.setScrollFactor(0);
        // this.parallax_base.displayWidth = game.config.width*3.5;
        // this.parallax_base.scaleY = this.parallax_base.scaleX;
    }
}