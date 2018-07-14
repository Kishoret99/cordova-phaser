/// <reference path="../../..//dev-assets/phaser.d.ts" />

import "phaser";
import { BootScene } from "./scenes/boot-scene";
import { MainMenuScene } from "./scenes/main-menu-scene";
import { GameScene } from "./scenes/game-scene";

const config: GameConfig = {
  title: "Snake",
  url: "https://github.com/digitsensitive/phaser3-typescript",
  version: "1.1",
  width: 256,
  height: 224,
  zoom: 3,
  type: Phaser.AUTO,
  parent: "game",
  scene: [BootScene, MainMenuScene, GameScene],
  input: {
    keyboard: true,
    mouse: false,
    touch: false,
    gamepad: false
  },
  backgroundColor: "#000000",
  pixelArt: true,
  antialias: false
};

export class Game extends Phaser.Game {
  constructor(config: GameConfig) {
    super(config);
  }
}

window.onload = () => {
  var game = new Game(config);
};