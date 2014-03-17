

define([

		'./jquery', 
		'./content', 
		'./events'

	], function ($, c, events) {



	/*
	* app()
	* main app function
	*/
	var app = function () {

		appInit();

		$('button#exit-error').click(function () {
			$('#note-frame').addClass('off');
		});

	}


	/**
	* functions from events.js
	* loading of basic app functions
	*/
	//app initialization function
	appInit = events.appInit;

	//app current lesson process
	appCurr = events.appCurr;

	//app current lesson read event
	readEvent = events.readEvent;

	//app current lesson code event
	codeEvent = events.codeEvent;

	//code run form activator
	activateInput = events.activateInput;

	//code run form deactivator
	deactivateInput = events.deactivateInput;

	//core level tracker
	lessonTracker = events.lessonTracker;





	
	// return "app" as "run" for call from code-main.js
	return { run : app };

})