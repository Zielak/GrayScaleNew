import Phaser from 'phaser'

const Scene = Phaser.Scene

/**
 * Factory to create a player?
 * 
 * @export
 * @param {Scene} scene 
 */
export default function Player(scene, x = 0, y = 0) {
  
  const player = scene.add.image(x, y, 'player')
  
  return player
  
}
