export default class Boot extends Phaser.State {

    init() {

        this.stage.backgroundColor = '#213942';

        this.scale.scaleMode               = Phaser.ScaleManager.SHOW_ALL;
        // this.scale.pageAlignHorizontally = true;
        // this.scale.pageAlignVertically = true;
        this.scale.pageAlignVertically     = false;
        this.scale.pageAlignHorizontally   = true;
        this.stage.disableVisibilityChange = true;

        this.scale.setMinMax(0, 0, 200, 200);

    }

    preload() {
    }

    create() {

        this.state.start('Preload');

    }

}
