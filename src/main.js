// import Phaser from './lib/phaser.js'

    // scenes
import menu from './scenes/menu.js'
import newgroundsio from './scenes/newgroundsio.js'

window.game = new Phaser.Game({
    type: Phaser.WEBGL,
    backgroundColor: '#969fa3',
    title: 'NG Medal Popup Generator',
    url: 'https://www.newgrounds.com/projects/games/1867451/preview',
    // TODO - PRELAUNCH - update this to release url
    version: '0.0 pre alpha',
    pixelArt: false,
    banner: {
        // text: '#ffffff',
        // background: [
        //     '#fff200',
        //     '#38f0e8',
        //     '#00bff3',
        //     '#ff0066'
        // ],
        hidePhaser: false
    },
    parent: 'body',
    dom: {
        createContainer: true
    },
    width: 960,
    height: 540,
    plugins: {
        scene: [
            { key: 'SpinePlugin', plugin: window.SpinePlugin, mapping: 'spine' }
        ]
    },

    scene: [menu, newgroundsio
    ]
    });