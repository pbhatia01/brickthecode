
define([], function () {

	// return the object containing the tutorial content/data
	return {
		
		coreLevel : 1,	/* lesson objects / used to retrieve levelTitle */

		currLevel : 0,	/* sub lessons (arrays) */

		currLessonLen : 0,	/* length of the current sub lesson (array) */

		lessonEnd : false,	/* states the condition to end the lesson or not */

		codeRun : false,	/* states if code run environment needs to be activated or not */

		levelTitle : [
			"Media Functions - Create a Video/Audio Player",
			"Loops",
			"Conditions",
			"Text Functions",
			"Math",
			"Basic Input/Output",
			"Introduction"
		],

		lessonData : {
			init : {
				
				i1 : [
					'<br>Hey Learner!', 
					'<br>Good to see you. <br><br>I\'m your mentor for this learning session! <br><br>I\'m gonna teach you the basics of coding!',
					false
				],
				i2 : [
					'Let\'s understand the interface!', 
					'<br>The menu at extreme left indicates the lessons you will learn here. <br><br>You may jump to any lesson with a single click!',
					false
				],
				i3 : [
					'<br>Next ...',
					'<br>The screen at the left is your <em>Output Screen</em>.<br>In the bar below, you write your code.<br><br>Running the code, will display the result on <em>Output Screen</em>!',
					false
				],
				i4 : [
					'<br>Yes it\'s done!',
					'<br>Now that you\'ve understood the basic structure and functioning of the app,<br><br>we gonna start the session with the BASIC INPUT/OUTPUT!<br><br>You ready?',
					false
				]
			
			},

			io : {

				i1 : [
					'<br>BASIC Input/Output!',
					'<br>Input/Output plays an important role in programming.<br>It helps the program interact with the user.<br><br>Let\'s see what actually it is!',
					false
				],

				i2 : [
					'<br>It\'s Simple !',
					'<br><em>Output</em> is something that will appear on the screen;<br>whereas,<br><em>Input</em> is something that user will enter by use of keyboard or mouse! Just as you do each time you use computer..',
					false
				],

				i3 : [
					'<br>Understanding <em>Output</em>..',
					'<br>For coding Output,<br>i.e. to show something on the screen, we\'ll use <em>print()</em>.<br>Anything written inside bracket in inverted commas prints on the screen.<br><br>Great! So let\'s write it..',
					false
				],

				i4 : [
					'<br>Executing <em>OUTPUT</em> !',
					'<br>We\'ll use <em>print()</em> now. Do remember that a line of code ends with a semicolon ( ; )<br><br>Let\'s say hello to the world.<br><br>Write,<br><span style="color:green;font-family:\'Open Sans\'">print(\'Hello World\');</span><br><br>in the <em>CODE BOX</em> below and hit <em>RUN</em> button.',
					true,
					"print('Hello World');"
				],

				i5 : [
					'<br>Awesome Job!',
					'<br>Well, You just wrote your first computer program..<br><em>Congratulations!</em><br><br>Let\'s move ahead to <em>Input</em>.',
					false
				]

			},

			math : {

				i1 : [
					'<br>',
					'<br>',
					false
				]

			},

			txt : {

				i1 : [
					'<br>',
					'<br>',
					false
				]

			},

			cond : {

				i1 : [
					'<br>',
					'<br>',
					false
				]

			},

			loop : {

				i1 : [
					'<br>',
					'<br>',
					false
				]

			},

			med : {

				i1 : [
					'<br>',
					'<br>',
					false
				]

			}
		}

	};


});