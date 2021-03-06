/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2018 Digitsensitive
 * @description  Snake: Boot Scene
 * @license      Digitsensitive
 */

export class BootScene extends Phaser.Scene {
    constructor() {
      super({
        key: "BootScene"
      });
    }
  
    update(): void {
      this.scene.start("MainMenuScene");
    }
  }