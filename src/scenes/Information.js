class Information extends Phaser.Scene {
    constructor () {
        super('informationScene');
    }

    create() {
        keyB = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.B);

        // temp text for credits
        let creditTextConfig = {
            fontFamily: 'Driod Sans', 
            fontSize: '20px',
            backgroundColor: '#000000',
            color: '#FFFFFF',
            align: 'center',
            padding:{
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        this.add.text(game.config.width/2, 30, "Information", creditTextConfig).setOrigin(0, 0);
        this.add.text(game.config.width/2, game.config.height/2, "To return to Menu Press B",
        creditTextConfig).setOrigin(0, 0);

        // select sound
        this.soundSFX = this.sound.add('sfx_select');

        this.backgroundImage = this.add.image(0, 0, 'controls').setOrigin(0,0);
    }

    update() {

        // If press B send back to menu
        if (Phaser.Input.Keyboard.JustDown(keyB)) {
            this.soundSFX.play();
            this.scene.start('menuScene');
        }
    }
}
