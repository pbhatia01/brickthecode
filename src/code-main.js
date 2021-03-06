require.config({
	baseUrl : "/brickthecode/src",
	paths : {
		"jquery" : "./code-app/jquery",
		"content" : "./code-app/content",
		"events" : "./code-app/events",
		"load" : "./code-app/load",
		"app" : "./code-app/app"
	}
})

require(['load','app'], function (load, app) {

	load.initialize();
	app.run();
	
})
