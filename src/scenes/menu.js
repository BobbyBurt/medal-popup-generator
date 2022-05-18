import eventsCenter from "../eventsCenter.js";

export default class menu extends Phaser.Scene
{
    constructor()
    {
        super('menu'); // defining unique key
    }

    // configure scene
    init()
    {
        
    }

    // queue assets to load
    preload()
    {
        this.load.image('popup', 'assets/250x70.png');
        this.load.audio('appear', 'assets/popup-appear.wav');
        this.load.spine('medal', 'assets/skeleton.json', 'assets/skeleton.atlas');
    }

    create()
    {   
        this.scene.launch('newgroundsio');
        
        this.medal = this.add.spine(835, 505, 'medal', 'animation');

        this.graphic1 = this.add.graphics({ x: 0, y: 0});
        this.graphic1.fillStyle(0x999999, 1);
        this.graphic1.fillRect(0, 0, 710, 540);
        this.graphic1.fillRect(0, 0, 960, 470);

        this.appear = this.sound.add('appear');

        // this.add.image(300, 300, 'popup').setMask(this.mask).setOrigin(0, 0);

        this.input.keyboard.on('keydown-Z', () => {
            this.medal.setAnimation(0, 'animation', false);
            this.appear.play();
        });

        this.input.keyboard.on('keydown-X', () => {
            this.medal.setAnimation(0, 'animation-2', false);
            this.appear.play();
        });
    }

    update()
    {
        
    }
}