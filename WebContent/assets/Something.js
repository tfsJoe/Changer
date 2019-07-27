
// -- user code here --

/* --- start generated code --- */

// Generated by  1.5.4 (Phaser v2.6.2)


class Something extends Phaser.Group {
	/**
	 * Something.
	 * @param {Phaser.Game} aGame A reference to the currently running game.
	 * @param {Phaser.Group} aParent The parent Group (or other {@link DisplayObject}) that this group will be added to.    If undefined/unspecified the Group will be added to the {@link Phaser.Game#world Game World}; if null the Group will not be added to any parent.
	 * @param {string} aName A name for this group. Not used internally but useful for debugging.
	 * @param {boolean} aAddToStage If true this group will be added directly to the Game.Stage instead of Game.World.
	 * @param {boolean} aEnableBody If true all Sprites created with {@link #create} or {@link #createMulitple} will have a physics body created on them. Change the body type with {@link #physicsBodyType}.
	 * @param {number} aPhysicsBodyType The physics body type to use when physics bodies are automatically added. See {@link #physicsBodyType} for values.
	 */
	constructor(aGame, aParent, aName, aAddToStage, aEnableBody, aPhysicsBodyType) {
		
		super(aGame, aParent, aName, aAddToStage, aEnableBody, aPhysicsBodyType);
		
		this.game.add.sprite(0.0, 0.0, 'PlayButton', null, this);
		
		
		
	}
	
	/* group-methods-begin */
	// -- user code here --
	/* group-methods-end */
}
/* --- end generated code --- */
// -- user code here --
