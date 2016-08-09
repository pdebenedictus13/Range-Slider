<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
 	<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">
	<title></title>
	<link href='http://fonts.googleapis.com/css?family=Exo:400,300,600,700,800' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" type="text/css" href="css/onboard.css">
	<script src="http://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script>
</head>
<body>
	<div class="header">
		<img src="img/onboard.png">
	</div>
	<div class="section-header">
		<p></p>
		<p>Slide the range slider to where you feel the statement most represents you from 0 to 100.</p>
	</div>
	<ol>
		<div class="sliders">
			<form>
				<li>
	  				<label>
	  					<p class="question-style">When it comes to solutions:</p>
	  				</label>
	  				<div class="statement-slider">
		  				<label>The answers are often in the details</label>
		  				<input id='rSlider1' type="range" min="0" max="100" value="0" onchange="rQ1.value=value;">
		  				<output id='rQ1'>0</output>
		  			</div>
		  			<div class="statement-slider">
		  				<label>Hard work and dedication pay off</label>
		  				<input id='dSlider1' type="range" min="0" max="100" value="0" onchange="dQ1.value=value">
		  				<output id='dQ1'>0</output>
		  			</div>
		  			<div class="statement-slider">
		  				<label>Camaraderie among team members can make or break the outcome</label>
		  				<input id='eSlider1' type="range" min="0" max="100" value="0" onchange="eQ1.value=value">
		  				<output id='eQ1'>0</output>
		  			</div>
		  			<div class="statement-slider">
		  				<label>The process is equally important as the outcome</label>
		  				<input id='lSlider1' type="range" min="0" max="100" value="0" onchange="lQ1.value=value">
		  				<output id='lQ1'>0</output>
		  			</div>
		  			<div class="statement-slider">
		  				<label>Considering the needs of others will help create buy-in and loyalty</label>
		  				<input id='hSlider1' type="range" min="0" max="100" value="0" onchange="hQ1.value=value">
		  				<output id='hQ1'>0</output>
		  			</div>
		  			<div class="statement-slider">
		  				<label>Thorough brainstorming will yield the most options and possible solutions</label>
		  				<input id='iSlider1' type="range" min="0" max="100" value="0" onchange="iQ1.value=value">
		  				<output id='iQ1'>0</output>
		  			</div>
		  			<div class="statement-slider">
		  				<label>Risks are often necessary when proposing new ideas and initiating change</label>
		  				<input id='oSlider1' type="range" min="0" max="100" value="0" onchange="oQ1.value=value">
		  				<output id='oQ1'>0</output>
		  			</div>
		  			<div class="statement-slider">
		  				<label>Using good judgment and critical thinking are key </label>
		  				<input id='aSlider1' type="range" min="0" max="100" value="0" onchange="aQ1.value=value">
		  				<output id='aQ1'>0</output>
		  			</div>
				</li>
				<li>
	  				<label>
	  					<p class="question-style">After hearing a surprise announcement that we have a long weekend and do not have to come to work on Monday, I:</p>
	  				</label>
	  				<div class="statement-slider">
		  				<label>Wish I had more time to make plans</label>
		  				<input id='rSlider2' type="range" min="0" max="100" value="0" onchange="rQ2.value=value">
		  				<output id='rQ2'>0</output>
		  			</div>
		  			<div class="statement-slider">
		  				<label>Will take advantage of the extra time and catch up on my “to do” list</label>
		  				<input id='dSlider2' type="range" min="0" max="100" value="0" onchange="dQ2.value=value">
		  				<output id='dQ2'>0</output>
		  			</div>
		  			<div class="statement-slider">
		  				<label>Am super excited for more fun with friends!</label>
		  				<input id='eSlider2' type="range" min="0" max="100" value="0" onchange="eQ2.value=value">
		  				<output id='eQ2'>0</output>
		  			</div>
		  			<div class="statement-slider">
		  				<label>Think this is a great strategy to increase work satisfaction</label>
		  				<input id='lSlider2' type="range" min="0" max="100" value="0" onchange="lQ2.value=value">
		  				<output id='lQ2'>0</output>
		  			</div>
		  			<div class="statement-slider">
		  				<label>Hope everyone will enjoy the time off to relax and recharge</label>
		  				<input id='hSlider2' type="range" min="0" max="100" value="0" onchange="hQ2.value=value">
		  				<output id='hQ2'>0</output>
		  			</div>
		  			<div class="statement-slider">
		  				<label>Have so many ideas of how I could spend my time</label>
		  				<input id='iSlider2' type="range" min="0" max="100" value="0" onchange="iQ2.value=value">
		  				<output id='iQ2'>0</output>
		  			</div>
		  			<div class="statement-slider">
		  				<label>Am going to try out the new camping gear and hike a new trail</label>
		  				<input id='oSlider2' type="range" min="0" max="100" value="0" onchange="oQ2.value=value">
		  				<output id='oQ2'>0</output>
		  			</div>
		  			<div class="statement-slider">
		  				<label>Wonder what motivated the sudden schedule change</label>
		  				<input id='aSlider2' type="range" min="0" max="100" value="0" onchange="aQ2.value=value">
		  				<output id='aQ2'>0</output>
		  			</div>
				</li>
				<li>
	  				<label>
	  					<p class="question-style">I am on the fence about searching for a new employer, but I reconsider when:</p>
	  				</label>
	  				<div class="statement-slider">
		  				<label>I get a raise</label>
		  				<input id='rSlider3' type="range" min="0" max="100" value="0" onchange="rQ3.value=value">
		  				<output id='rQ3'>0</output>
		  			</div>
		  			<div class="statement-slider">
		  				<label>I am offered a promotion based on my ability to surpass goals and get things done</label>
		  				<input id='dSlider3' type="range" min="0" max="100" value="0" onchange="dQ3.value=value">
		  				<output id='dQ3'>0</output>
		  			</div>
		  			<div class="statement-slider">
		  				<label>Paid vacation time is increased</label>
		  				<input id='eSlider3' type="range" min="0" max="100" value="0" onchange="eQ3.value=value">
		  				<output id='eQ3'>0</output>
		  			</div>
		  			<div class="statement-slider">
		  				<label>I am invited to serve on the steering committee</label>
		  				<input id='lSlider3' type="range" min="0" max="100" value="0" onchange="lQ3.value=value">
		  				<output id='lQ3'>0</output>
		  			</div>
		  			<div class="statement-slider">
		  				<label>My boss tells me we would not have gotten the deal without my efforts and honors me with employee of the month</label>
		  				<input id='hSlider3' type="range" min="0" max="100" value="0" onchange="hQ3.value=value">
		  				<output id='hQ3'>0</output>
		  			</div>
		  			<div class="statement-slider">
		  				<label>My boss invites me to lunch to listen to my concerns and thoughts about the company and pledges to consider my ideas</label>
		  				<input id='iSlider3' type="range" min="0" max="100" value="0" onchange="iQ3.value=value">
		  				<output id='iQ3'>0</output>
		  			</div>
		  			<div class="statement-slider">
		  				<label>I am offered a newly created position to lead the company into a new territory</label>
		  				<input id='oSlider3' type="range" min="0" max="100" value="0" onchange="oQ3.value=value">
		  				<output id='oQ3'>0</output>
		  			</div>
		  			<div class="statement-slider">
		  				<label>Under performing employees are let go</label>
		  				<input id='aSlider3' type="range" min="0" max="100" value="0" onchange="aQ3.value=value">
		  				<output id='aQ3'>0</output>
		  			</div>
				</li>
				<li>
	  				<label>
	  					<p class="question-style">After a full day’s work, several co-workers discuss plans for the team to meet for dinner. I:</p>
	  				</label>
	  				<div class="statement-slider">
		  				<label>Check reviews and nightly specials to determine the right place</label>
		  				<input id='rSlider4' type="range" min="0" max="100" value="0" onchange="rQ4.value=value">
		  				<output id='rQ4'>0</output>
		  			</div>
		  			<div class="statement-slider">
		  				<label>Order take-out so I can finish my proposal due tomorrow</label>
		  				<input id='dSlider4' type="range" min="0" max="100" value="0" onchange="dQ4.value=value">
		  				<output id='dQ4'>0</output>
		  			</div>
		  			<div class="statement-slider">
		  				<label>Hope I get an invitation to join them</label>
		  				<input id='eSlider4' type="range" min="0" max="100" value="0" onchange="eQ4.value=value">
		  				<output id='eQ4'>0</output>
		  			</div>
		  			<div class="statement-slider">
		  				<label>Think it is a great way to build camaraderie</label>
		  				<input id='lSlider4' type="range" min="0" max="100" value="0" onchange="lQ4.value=value">
		  				<output id='lQ4'>0</output>
		  			</div>
		  			<div class="statement-slider">
		  				<label>Offer to carpool for others</label>
		  				<input id='hSlider4' type="range" min="0" max="100" value="0" onchange="hQ4.value=value">
		  				<output id='hQ4'>0</output>
		  			</div>
		  			<div class="statement-slider">
		  				<label>Wonder if I can meet for dinner and still get my workout in for the day</label>
		  				<input id='iSlider4' type="range" min="0" max="100" value="0" onchange="iQ4.value=value">
		  				<output id='iQ4'>0</output>
		  			</div>
		  			<div class="statement-slider">
		  				<label>Suggest trying a new restaurant</label>
		  				<input id='oSlider4' type="range" min="0" max="100" value="0" onchange="oQ4.value=value">
		  				<output id='oQ4'>0</output>
		  			</div>
		  			<div class="statement-slider">
		  				<label>Can’t wait to get home, recharge, and chill</label>
		  				<input id='aSlider4' type="range" min="0" max="100" value="0" onchange="aQ4.value=value">
		  				<output id='aQ4'>0</output>
		  			</div>
				</li>
				<li>
	  				<label>
	  					<p class="question-style">When walking through an amusement park, I might be inclined to:</p>
	  				</label>
	  				<div class="statement-slider">
		  				<label>Inquire about the maintenance records of the roller coasters</label>
		  				<input id='rSlider5' type="range" min="0" max="100" value="0" onchange="rQ5.value=value">
		  				<output id='rQ5'>0</output>
		  			</div>
		  			<div class="statement-slider">
		  				<label>Make sure I have my plan of attack in order to maximize the day</label>
		  				<input id='dSlider5' type="range" min="0" max="100" value="0" onchange="dQ5.value=value">
		  				<output id='dQ5'>0</output>
		  			</div>
		  			<div class="statement-slider">
		  				<label>Volunteer to go on stage during a show</label>
		  				<input id='eSlider5' type="range" min="0" max="100" value="0" onchange="eQ5.value=value">
		  				<output id='eQ5'>0</output>
		  			</div>
		  			<div class="statement-slider">
		  				<label>Make sure everyone is having fun, while looking to what we do next</label>
		  				<input id='lSlider5' type="range" min="0" max="100" value="0" onchange="lQ5.value=value">
		  				<output id='lQ5'>0</output>
		  			</div>
		  			<div class="statement-slider">
		  				<label>Stop and help someone look for their keys that fell out of their pocket while on a ride.</label>
		  				<input id='hSlider5' type="range" min="0" max="100" value="0" onchange="hQ5.value=value">
		  				<output id='hQ5'>0</output>
		  			</div>
		  			<div class="statement-slider">
		  				<label>Imagine creating a new and exciting ride for the park</label>
		  				<input id='iSlider5' type="range" min="0" max="100" value="0" onchange="iQ5.value=value">
		  				<output id='iQ5'>0</output>
		  			</div>
		  			<div class="statement-slider">
		  				<label>Convince others to try something</label>
		  				<input id='oSlider5' type="range" min="0" max="100" value="0" onchange="oQ5.value=value">
		  				<output id='oQ5'>0</output>
		  			</div>
		  			<div class="statement-slider">
		  				<label>Question if people prefer shows, games, or rides as their top entertainment.</label>
		  				<input id='aSlider5' type="range" min="0" max="100" value="0" onchange="aQ5.value=value">
		  				<output id='aQ5'>0</output>
		  			</div>
				</li>
				<li>
	  				<label>
	  					<p class="question-style">Detours are:</p>
	  				</label>
	  				<div class="statement-slider">
		  				<label>Preventable if you follow directions accurately</label>
		  				<input id='rSlider6' type="range" min="0" max="100" value="0" onchange="rQ6.value=value">
		  				<output id='rQ6'>0</output>
		  			</div>
		  			<div class="statement-slider">
		  				<label>A waste of time</label>
		  				<input id='dSlider6' type="range" min="0" max="100" value="0" onchange="dQ6.value=value">
		  				<output id='dQ6'>0</output>
		  			</div>
		  			<div class="statement-slider">
		  				<label>Exciting</label>
		  				<input id='eSlider6' type="range" min="0" max="100" value="0" onchange="eQ6.value=value">
		  				<output id='eQ6'>0</output>
		  			</div>
		  			<div class="statement-slider">
		  				<label>A great way to grow and learn</label>
		  				<input id='lSlider6' type="range" min="0" max="100" value="0" onchange="lQ6.value=value">
		  				<output id='lQ6'>0</output>
		  			</div>
		  			<div class="statement-slider">
		  				<label>Are implemented to help people find the safest route</label>
		  				<input id='hSlider6' type="range" min="0" max="100" value="0" onchange="hQ6.value=value">
		  				<output id='hQ6'>0</output>
		  			</div>
		  			<div class="statement-slider">
		  				<label>For discovering new things</label>
		  				<input id='iSlider6' type="range" min="0" max="100" value="0" onchange="iQ6.value=value">
		  				<output id='iQ6'>0</output>
		  			</div>
		  			<div class="statement-slider">
		  				<label>Sometimes necessary when going somewhere new</label>
		  				<input id='oSlider6' type="range" min="0" max="100" value="0" onchange="oQ6.value=value">
		  				<output id='oQ6'>0</output>
		  			</div>
		  			<div class="statement-slider">
		  				<label>Better than complete road blocks</label>
		  				<input id='aSlider6' type="range" min="0" max="100" value="0" onchange="aQ6.value=value">
		  				<output id='aQ6'>0</output>
		  			</div>
				</li>
				<li>
	  				<label>
	  					<p class="question-style">As the captain of a leisure fishing tour, I am faced with a potential storm way off in the distance, I:</p>
	  				</label>
	  				<div class="statement-slider">
		  				<label>Check the radar, calculate estimated arrival, and choose the right course of action</label>
		  				<input id='rSlider7' type="range" min="0" max="100" value="0" onchange="rQ7.value=value">
		  				<output id='rQ7'>0</output>
		  			</div>
		  			<div class="statement-slider">
		  				<label>Do whatever it takes to make sure we get a chance to safely catch our quota before turning back.</label>
		  				<input id='dSlider7' type="range" min="0" max="100" value="0" onchange="dQ7.value=value">
		  				<output id='dQ7'>0</output>
		  			</div>
		  			<div class="statement-slider">
		  				<label>Am thrilled to host a group of people and will enjoy the sunshine while I can</label>
		  				<input id='eSlider7' type="range" min="0" max="100" value="0" onchange="eQ7.value=value">
		  				<output id='eQ7'>0</output>
		  			</div>
		  			<div class="statement-slider">
		  				<label>Will assure the group of a fantastic day and I will make the best of the situation as it unfolds</label>
		  				<input id='lSlider7' type="range" min="0" max="100" value="0" onchange="lQ7.value=value">
		  				<output id='lQ7'>0</output>
		  			</div>
		  			<div class="statement-slider">
		  				<label>Ask the others aboard what they would like to do and go with the majority</label>
		  				<input id='hSlider7' type="range" min="0" max="100" value="0" onchange="hQ7.value=value">
		  				<output id='hQ7'>0</output>
		  			</div>
		  			<div class="statement-slider">
		  				<label>Think that it is probably far enough away and the possibility of it posing a threat is unlikely</label>
		  				<input id='iSlider7' type="range" min="0" max="100" value="0" onchange="iQ7.value=value">
		  				<output id='iQ7'>0</output>
		  			</div>
		  			<div class="statement-slider">
		  				<label>Sense the weather will bypass, but will come up with an idea and propose a plan B, if necessary</label>
		  				<input id='oSlider7' type="range" min="0" max="100" value="0" onchange="oQ7.value=value">
		  				<output id='oQ7'>0</output>
		  			</div>
		  			<div class="statement-slider">
		  				<label>Consider the direction of the winds, observe what other boats are doing, think about the pros/cons, and use my best judgment</label>
		  				<input id='aSlider7' type="range" min="0" max="100" value="0" onchange="aQ7.value=value">
		  				<output id='aQ7'>0</output>
		  			</div>
				</li>
				<div id="submitButton"><button type="button">Submit</button></div>
				<div class="answers" style="display:none;">
					<div id="R" class="answer">Researcher<br><span>0.00</span></div>
					<div id="D" class="answer">Driver<br><span>0.00</span></div>
					<div id="E" class="answer">Energizer<br><span>0.00</span></div>
					<div id="L" class="answer">Leader<br><span>0.00</span></div>
					<div id="H" class="answer">Helper<br><span>0.00</span></div>
					<div id="I" class="answer">Innovator<br><span>0.00</span></div>
					<div id="O" class="answer">Originator<br><span>0.00</span></div>
					<div id="A" class="answer">Analyzer<br><span>0.00</span></div>
				</div>
			</form>
		</div>
	</ol>
	
	<!-- <script type="text/javascript" src="http://knockoutjs.com/downloads/knockout-3.2.0.js"></script> -->
	<script type="text/Javascript" src="js/default.js"></script>
	<script type="text/javascript" src="js/view-modal.js"></script>
	
	<script src="//cdnjs.cloudflare.com/ajax/libs/json2/20110223/json2.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.8.0/jquery.min.js"></script>
	<script src="https://rawgit.com/andris9/jStorage/master/jstorage.js"></script>
	<script type="text/javascript" src="js/purl.js"></script>
	<script> /* $.jStorage is now available */ </script>
</body>
</html>

