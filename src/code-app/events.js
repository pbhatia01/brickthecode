

define(['./jquery', './content'], function($, c) {



	return {


		/**
		* appInit()
		* Initiates the learning from "introduction" level
		*/
		appInit : function () {

			var title = c.levelTitle[ 7 - c.coreLevel ];


			/**
			* setting title for the lesson
			*/
			$('#titleBar').html(title);

			/**
			* calling appCurr()
			*/
			appCurr(true);

		},





        /**
        * appCurr()
        * Handles current level tutorial for application
        * @param {boolean} lessonStart
        */
		appCurr : function (lessonStart) {

			/**
			* assigning lesson
			*/
			var lesson = lessonTracker();

			if (lessonStart === true) {

				c.currLessonLen = Object.keys(lesson).length;

			}



			/**
			* retrieving name of sub lesson
			*/
			var subLesson = Object.keys(lesson)[c.currLevel];


			/**
			* retrieving tutorial bubble data from sub lesson arrays
			*/
			var tut_ = lesson[subLesson][0], // first bubble data
				tut__ = lesson[subLesson][1]; // second bubble data

			$('#tut_').html(tut_);
			$('#tut__').html(tut__);


			/**
			* detecting end of lesson and assigning boolean to var 'lessonEnd'
			*/
			if (c.currLevel+1 == c.currLessonLen)
				c.lessonEnd = true;
			else c.lessonEnd = false;



			/**
			* button setup condition (read/run)
			*/
			if (lesson[subLesson][2] === true)
				c.codeRun = true;
			else c.codeRun = false;


			/** 
			* attach onclick event handler to user interface button
			* true/false retrieved from sub lesson (array)
			* to '#run_' if '#run' is disabled
			* to '#run' if '#run_' is disabled
			*/
			if (c.codeRun === true) {

				$('button#_run').addClass('off');
				activateInput();
				editor.setValue('');
				
				document.getElementById('run').addEventListener("click", codeEvent, false);

			} else {

				$('button#_run').removeClass('off');
				deactivateInput();
				editor.setValue('');
				
				document.getElementById('_run').addEventListener("click", readEvent, false);

			}

			
		},



		/**
		* readEvent()
		* app processing on reading tutorial (button#_run click event)
		*/
		readEvent : function () {
			

			if (c.lessonEnd === true) {
				
				c.coreLevel += 1; // setting Lesson Level to one up
				c.currLevel = 0;
				c.currLessonLen = 0;
				c.lessonEnd = false;
				c.codeRun = false;

				document.getElementById('_run').removeEventListener("click", readEvent, false);
				
				appInit();

			} else {

				c.currLevel += 1;

				document.getElementById('_run').removeEventListener("click", readEvent, false);

				appCurr(false);

			}

		},

		/**
		* codeEvent()
		* app processing on running code (button#run click event)
		*/
		codeEvent : function () {
			var userInput = window.editor.getValue(),
				lesson = lessonTracker(),
				subLesson = Object.keys(lesson)[c.currLevel];

			if(userInput != lesson[subLesson][3]) {
			
				$('#note-frame').removeClass('off');
			
			} else {

				$('textarea#code').val(userInput);
				$('form#coderun').submit();
				c.currLevel += 1;

				document.getElementById('run').removeEventListener("click", codeEvent, false);

				appCurr(false);

			}

		},

		/**
		*
		*
		*/
		lessonTracker : function () {

			var lev = c.coreLevel, lesson;
			switch (lev) {

				case 1 :
					lesson = c.lessonData.init;
					break;

				case 2 :
					lesson = c.lessonData.io;
					break;

				case 3 :
					lesson = c.lessonData.math;
					break;

				case 4 :
					lesson = c.lessonData.txt;
					break;

				case 5 :
					lesson = c.lessonData.cond;
					break;

				case 6 :
					lesson = c.lessonData.loop;
					break;

				case 7 :
					lesson = c.lessonData.med;
					break;

				default :
					lesson = c.lessonData.init;
					break;

			}

			return lesson;

		},

		/**
		* activateInput()
		* Helps activate the input functioning
		*/
		activateInput : function () {

			$('div#cmdWin, button#run').removeClass('dead');
			document.getElementById('cmdWin').disabled = false;
			document.getElementById('run').disabled = false;

		},

		/**
		* activateInput()
		* Helps deactivate the input functioning
		*/
		deactivateInput : function () {

			$('div#cmdWin, button#run').addClass('dead');
			document.getElementById('cmdWin').disabled = true;
			document.getElementById('run').disabled = true;

		}

	};

});