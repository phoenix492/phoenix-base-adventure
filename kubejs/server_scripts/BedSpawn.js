BlockEvents.rightClicked(event => {
	if (event.block.hasTag('minecraft:beds')) {
		if(!throttle(event.player, 60)) { 
			let name = event.player.username + ''
			let pos = Math.floor(event.player.x) + ' ' + Math.floor(event.player.y) + ' ' + Math.floor(event.player.z)
			Utils.server.scheduleInTicks(1, callback => {
				Utils.server.runCommandSilent('execute as ' + name + ' run spawnpoint @s ' + pos)
			Utils.server.runCommandSilent('tellraw ' + name + ' "Spawnpoint will persist even after removing the bed."')
			})
		}
	}
})
