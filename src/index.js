import Phaser from 'phaser'

import Player from './player'

const config = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 600,
  height: 600,
  scene: {
    preload: preload,
    create: create,
    update: update,
  }
}

const game = new Phaser.Game(config)
let player, cursors

function preload() {
  this.load.image('logo', 'assets/logo.png')
  this.load.image('player', 'assets/player/player.png')
}

function create() {
  
  cursors = this.input.keyboard.createCursorKeys()
  player = new Player(this, 100, 100)
  player.cursors = cursors
  
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

function update(time, delta) {
  player.update(time)
}
