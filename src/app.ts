/// <reference path="../dev-assets/phaser.d.ts"/>
const config: GameConfig  = {

}

export class App extends Phaser.Scene{


    public game:  Phaser.Game;
    public sprite: SpriteSheetConfig;

    constructor() {
        super(){
            
        }
        this.game = new Phaser.Game();
    }

    preload() {
        this.load.image('arrow', './assets/imgs/vector.png');
    }
    
    create() {
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.stage.backgroundColor = '#0072bc';

        this.sprite = this.game.add.sprite(400, 300, 'arrow');
        this.sprite.anchor.setTo(0.5, 0.5);

        this.game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
        this.sprite.body.allowRotation = false;
    }

    update() {
        this.sprite.rotation = this.game.physics.arcade.moveToPointer(this.sprite, 60, this.game.input.activePointer, 500)
    }

    render() {
        this.game.debug.spriteInfo(this.sprite, 32, 32)
    }


}

window.onload = () => {

    var game = new App();

};