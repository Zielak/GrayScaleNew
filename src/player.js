import Phaser from 'phaser'

export default new Phaser.Class({
  
  Extends: Phaser.GameObjects.Image,
  
  initialize: function (scene, x = 0, y = 0) {
    Phaser.GameObjects.Image.call(this, scene)
    
    this.setTexture('player')
    this.setPosition(x, y)
    this.setOrigin(0)
    
    this.x = x
    this.y = y
    
    scene.children.add(this)
  },
  
  update: function (time) {
    if (this.cursors) {
      // do something on keypress
    }
  },
  
  cursors: null
})
