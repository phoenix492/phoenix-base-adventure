let blacklist = [
	'tetra:holosphere'
]
ServerEvents.tags('block', event => {

	blacklist.forEach(id => {
		event.add('bagofyurting:blacklist', id)
	})
	
})
