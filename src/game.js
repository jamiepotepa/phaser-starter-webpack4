import BootState from './phaser/states/Boot';
import PreloadState from './phaser/states/Preload';

class Game extends Phaser.Game {

    constructor(location = null) {

        const gameWrapper = document.getElementById(location);
        const width = 200;
        const height = 200;

        super(width, height, Phaser.CANVAS, gameWrapper, null);

        this.state.add('Boot', BootState);
        this.state.add('Preload', PreloadState);

        this.state.start('Boot');
    }
}

window.onload = () => {
    
    const MyGame = new Game('game-wrapper');

    MyGame.state.onStateChange.add((newState, previousState) => {
        console.log(`${newState} state has loaded`);
    });

}