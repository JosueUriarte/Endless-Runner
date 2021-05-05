class Credits extends Phaser.Scene {
    constructor() {
        super("creditsScene");
    }

    create() {

        // keys to interact
        keyB = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.B);

        console.log("In credits scene");
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
        this.add.text(game.config.width/2, 30, "Credits", creditTextConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2, "To return to Menu Press B",
        creditTextConfig).setOrigin(0, 0);

        // select sound
        this.soundSFX = this.sound.add('sfx_select');

        // Add credits
        this.backgroundImage = this.add.image(0, 0, 'credits').setOrigin(0,0);

    }

    update() {
        // If press B send back to menu
        if (Phaser.Input.Keyboard.JustDown(keyB)) {
            this.soundSFX.play();
            this.scene.start('menuScene');
        }
    }
}