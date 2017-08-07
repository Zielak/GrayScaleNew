import Phaser from 'phaser'

import Player from './player'

const config = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 600,
  height: 600,
  scene: {
    preload: preload,
    create: create
  }
}

const game = new Phaser.Game(config)

function preload() {
  this.load.image('logo', 'assets/logo.png')
  this.load.image('player', 'assets/player/player.png')
}

function create() {
  
  var player = Player(this)
  
  var logo = this.add.image(400, 150, 'logo')

  this.tweens.add({
    targets: logo,
    y: 450,
    duration: 2000,
    ease: 'Power2',
    yoyo: true,
    loop: -1
  })

}
