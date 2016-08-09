$(document).ready(function() {
	var checkval;
	var username;
	var password;
	var questionAnswers1;
	var userInfo = [];
	var cookie;

	function setCookie(cname, cvalue, exdays) {
    	var d = new Date();
    	d.setTime(d.getTime() + (exdays*24*60*60*1000));
    	var expires = "expires="+ d.toUTCString();
    	document.cookie = cname + "=" + cvalue + "; " + expires;
	}

	$("#rSlider1, #rSlider2, #rSlider3, #rSlider4, #rSlider5, #rSlider6, #rSlider7").change(function() {
		var rQ1 = $("#rQ1").val();
		var rQ2 = $("#rQ2").val();
		var rQ3 = $("#rQ3").val();
		var rQ4 = $("#rQ4").val();
		var rQ5 = $("#rQ5").val();
		var rQ6 = $("#rQ6").val();
		var rQ7 = $("#rQ7").val();
		var rAvg = (parseInt(rQ1) + parseInt(rQ2) + parseInt(rQ3) + parseInt(rQ4) + parseInt(rQ5) + parseInt(rQ6) + parseInt(rQ7)) / 7;
		$("#R.answer span").text(rAvg.toFixed(2));
	});

	$("#dSlider1, #dSlider2, #dSlider3, #dSlider4, #dSlider5, #dSlider6, #dSlider7").change(function() {
		var dQ1 = $("#dQ1").val();
		var dQ2 = $("#dQ2").val();
		var dQ3 = $("#dQ3").val();
		var dQ4 = $("#dQ4").val();
		var dQ5 = $("#dQ5").val();
		var dQ6 = $("#dQ6").val();
		var dQ7 = $("#dQ7").val();
		var dAvg = (parseInt(dQ1) + parseInt(dQ2) + parseInt(dQ3) + parseInt(dQ4) + parseInt(dQ5) + parseInt(dQ6) + parseInt(dQ7)) / 7;
		$("#D.answer span").text(dAvg.toFixed(2));
	});

	$("#eSlider1, #eSlider2, #eSlider3, #eSlider4, #eSlider5, #eSlider6, #eSlider7").change(function() {
		var eQ1 = $("#eQ1").val();
		var eQ2 = $("#eQ2").val();
		var eQ3 = $("#eQ3").val();
		var eQ4 = $("#eQ4").val();
		var eQ5 = $("#eQ5").val();
		var eQ6 = $("#eQ6").val();
		var eQ7 = $("#eQ7").val();
		var eAvg = (parseInt(eQ1) + parseInt(eQ2) + parseInt(eQ3) + parseInt(eQ4) + parseInt(eQ5) + parseInt(eQ6) + parseInt(eQ7)) / 7;
		$("#E.answer span").text(eAvg.toFixed(2));
	});

	$("#lSlider1, #lSlider2, #lSlider3, #lSlider4, #lSlider5, #lSlider6, #lSlider7").change(function() {
		var lQ1 = $("#lQ1").val();
		var lQ2 = $("#lQ2").val();
		var lQ3 = $("#lQ3").val();
		var lQ4 = $("#lQ4").val();
		var lQ5 = $("#lQ5").val();
		var lQ6 = $("#lQ6").val();
		var lQ7 = $("#lQ7").val();
		var lAvg = (parseInt(lQ1) + parseInt(lQ2) + parseInt(lQ3) + parseInt(lQ4) + parseInt(lQ5) + parseInt(lQ6) + parseInt(lQ7)) / 7;
		$("#L.answer span").text(lAvg.toFixed(2));
	});

	$("#hSlider1, #hSlider2, #hSlider3, #hSlider4, #hSlider5, #hSlider6, #hSlider7").change(function() {
		var hQ1 = $("#hQ1").val();
		var hQ2 = $("#hQ2").val();
		var hQ3 = $("#hQ3").val();
		var hQ4 = $("#hQ4").val();
		var hQ5 = $("#hQ5").val();
		var hQ6 = $("#hQ6").val();
		var hQ7 = $("#hQ7").val();
		var hAvg = (parseInt(hQ1) + parseInt(hQ2) + parseInt(hQ3) + parseInt(hQ4) + parseInt(hQ5) + parseInt(hQ6) + parseInt(hQ7)) / 7;
		$("#H.answer span").text(hAvg.toFixed(2));
	});

	$("#iSlider1, #iSlider2, #iSlider3, #iSlider4, #iSlider5, #iSlider6, #iSlider7").change(function() {
		var iQ1 = $("#iQ1").val();
		var iQ2 = $("#iQ2").val();
		var iQ3 = $("#iQ3").val();
		var iQ4 = $("#iQ4").val();
		var iQ5 = $("#iQ5").val();
		var iQ6 = $("#iQ6").val();
		var iQ7 = $("#iQ7").val();
		var iAvg = (parseInt(iQ1) + parseInt(iQ2) + parseInt(iQ3) + parseInt(iQ4) + parseInt(iQ5) + parseInt(iQ6) + parseInt(iQ7)) / 7;
		$("#I.answer span").text(iAvg.toFixed(2));
	});

	$("#oSlider1, #oSlider2, #oSlider3, #oSlider4, #oSlider5, #oSlider6, #oSlider7").change(function() {
		var oQ1 = $("#oQ1").val();
		var oQ2 = $("#oQ2").val();
		var oQ3 = $("#oQ3").val();
		var oQ4 = $("#oQ4").val();
		var oQ5 = $("#oQ5").val();
		var oQ6 = $("#oQ6").val();
		var oQ7 = $("#oQ7").val();
		var oAvg = (parseInt(oQ1) + parseInt(oQ2) + parseInt(oQ3) + parseInt(oQ4) + parseInt(oQ5) + parseInt(oQ6) + parseInt(oQ7)) / 7;
		$("#O.answer span").text(oAvg.toFixed(2));
	});

	$("#aSlider1, #aSlider2, #aSlider3, #aSlider4, #aSlider5, #aSlider6, #aSlider7").change(function() {
		var aQ1 = $("#aQ1").val();
		var aQ2 = $("#aQ2").val();
		var aQ3 = $("#aQ3").val();
		var aQ4 = $("#aQ4").val();
		var aQ5 = $("#aQ5").val();
		var aQ6 = $("#aQ6").val();
		var aQ7 = $("#aQ7").val();
		var aAvg = (parseInt(aQ1) + parseInt(aQ2) + parseInt(aQ3) + parseInt(aQ4) + parseInt(aQ5) + parseInt(aQ6) + parseInt(aQ7)) / 7;
		$("#A.answer span").text(aAvg.toFixed(2));
	});

	$("#u1Reset").click(function(){
		$.jStorage.deleteKey('user1');
	})

	$("#u2Reset").click(function(){
		$.jStorage.deleteKey('user2');
	})

	$("#u3Reset").click(function(){
		$.jStorage.deleteKey('user3');
	})

	$("#login").click(function(){
		username = document.getElementById("username").value;
		password = document.getElementById("password").value;
		
		console.log(username);
		console.log(password);

			$.getJSON("loginInfo.json", function(json) {
    		userInfo = json;
    		console.log(userInfo);
    		$.each(json,function(i,obj)
			{
	    		if(obj.username == username && obj.password == password)
	    		{
	        		checkval = true; 
	        		return false;
	    		}
	    		console.log(checkval);
			});

			if(checkval == true)
			{
	   			console.log("login correct");
	   			setCookie("username", username, 365);
	   			console.log(document.cookie);
	   			if (username == 'admin'){
	   				window.location.href = "/Range-Slider/admin.php?user=" + username;
	   			} else {
	   				if ($.jStorage.get(username) != null){
	   					window.location.href = "/Range-Slider/results.php?user=" + username;
	   				} else {
	   					window.location.href = "/Range-Slider/test.php?user=" + username;
	   				}
	   			}
			} else {
	    		console.log("!!!!!-----Incorrect login Details-----!!!!!");
			}
		});
	});

	$("#logout").click(function(){
		window.location.href = "/Range-Slider/login.php";
	});

	$("#submitButton").click(function(){
		r = $("#R span").text();
		d = $("#D span").text();
		e = $("#E span").text();
		l = $("#L span").text();
		h = $("#H span").text();
		i = $("#I span").text();
		o = $("#O span").text();
		a = $("#A span").text();
		userInfo.push(r, d, e, l, h, i, o, a);
		console.log(userInfo)
		
		$.jStorage.set(username, userInfo);
		var rQ = [];
		var dQ = [];
		var eQ = [];
		var lQ = [];
		var hQ = [];
		var iQ = [];
		var oQ = [];
		var aQ = [];

		for (j = 1; j < 8; j++){
			rQ[j] = $("#rQ" + j).text();
			dQ[j] = $("#dQ" + j).text();
			eQ[j] = $("#eQ" + j).text();
			lQ[j] = $("#lQ" + j).text();
			hQ[j] = $("#hQ" + j).text();
			iQ[j] = $("#iQ" + j).text();
			oQ[j] = $("#oQ" + j).text();
			aQ[j] = $("#aQ" + j).text();
		}

		if (username == 'user1'){
			$.jStorage.set('u1rQ', rQ);
			$.jStorage.set('u1dQ', dQ);
			$.jStorage.set('u1eQ', eQ);
			$.jStorage.set('u1lQ', lQ);
			$.jStorage.set('u1hQ', hQ);
			$.jStorage.set('u1iQ', iQ);
			$.jStorage.set('u1oQ', oQ);
			$.jStorage.set('u1aQ', aQ);
			dataSaved = true;
		}

		if (username == 'user2'){
			$.jStorage.set('u2rQ', rQ);
			$.jStorage.set('u2dQ', dQ);
			$.jStorage.set('u2eQ', eQ);
			$.jStorage.set('u2lQ', lQ);
			$.jStorage.set('u2hQ', hQ);
			$.jStorage.set('u2iQ', iQ);
			$.jStorage.set('u2oQ', oQ);
			$.jStorage.set('u2aQ', aQ);
			dataSaved = true;
		}

		if (username == 'user3'){
			$.jStorage.set('u3rQ', rQ);
			$.jStorage.set('u3dQ', dQ);
			$.jStorage.set('u3eQ', eQ);
			$.jStorage.set('u3lQ', lQ);
			$.jStorage.set('u3hQ', hQ);
			$.jStorage.set('u3iQ', iQ);
			$.jStorage.set('u3oQ', oQ);
			$.jStorage.set('u3aQ', aQ);
			dataSaved = true;
		}

		window.location.href = "/Range-Slider/results.php?user=" + encodeURIComponent(username) + "&dataSaved=" + dataSaved;
		
	});
	$(document).ready(function() {
		username = $.url().param('user');
		console.log(username);
		if (username == 'admin'){
			var admin1 = $.jStorage.get('user1');
			var admin2 = $.jStorage.get('user2');
			var admin3 = $.jStorage.get('user3');
			$("#user1Results #rResults").append(admin1[0]);
			$("#user1Results #dResults").append(admin1[1]);
			$("#user1Results #eResults").append(admin1[2]);
			$("#user1Results #lResults").append(admin1[3]);
			$("#user1Results #hResults").append(admin1[4]);
			$("#user1Results #iResults").append(admin1[5]);
			$("#user1Results #oResults").append(admin1[6]);
			$("#user1Results #aResults").append(admin1[7]);

			$("#user2Results #rResults").append(admin2[0]);
			$("#user2Results #dResults").append(admin2[1]);
			$("#user2Results #eResults").append(admin2[2]);
			$("#user2Results #lResults").append(admin2[3]);
			$("#user2Results #hResults").append(admin2[4]);
			$("#user2Results #iResults").append(admin2[5]);
			$("#user2Results #oResults").append(admin2[6]);
			$("#user2Results #aResults").append(admin2[7]);

			$("#user3Results #rResults").append(admin3[0]);
			$("#user3Results #dResults").append(admin3[1]);
			$("#user3Results #eResults").append(admin3[2]);
			$("#user3Results #lResults").append(admin3[3]);
			$("#user3Results #hResults").append(admin3[4]);
			$("#user3Results #iResults").append(admin3[5]);
			$("#user3Results #oResults").append(admin3[6]);
			$("#user3Results #aResults").append(admin3[7]);

		}
		if (username == 'user1'){
			var value1 = $.jStorage.get('user1');
			var rQ1 = $.jStorage.get('u1rQ');
			var dQ1 = $.jStorage.get('u1dQ');
			var eQ1 = $.jStorage.get('u1eQ');
			var lQ1 = $.jStorage.get('u1lQ');
			var hQ1 = $.jStorage.get('u1hQ');
			var iQ1 = $.jStorage.get('u1iQ');
			var oQ1 = $.jStorage.get('u1oQ');
			var aQ1 = $.jStorage.get('u1aQ');
			$("#userResults #rResults").append(value1[0]);
			$("#userResults #dResults").append(value1[1]);
			$("#userResults #eResults").append(value1[2]);
			$("#userResults #lResults").append(value1[3]);
			$("#userResults #hResults").append(value1[4]);
			$("#userResults #iResults").append(value1[5]);
			$("#userResults #oResults").append(value1[6]);
			$("#userResults #aResults").append(value1[7]);

			$(".statement-slider #rSlider1").val(rQ1[1]); $(".statement-slider #rSlider2").val(rQ1[2]); $(".statement-slider #rSlider3").val(rQ1[3]); $(".statement-slider #rSlider4").val(rQ1[4]); $(".statement-slider #rSlider5").val(rQ1[5]); $(".statement-slider #rSlider6").val(rQ1[6]); $(".statement-slider #rSlider7").val(rQ1[7]);
			$(".statement-slider #rQ1").text(rQ1[1]); $(".statement-slider #rQ2").text(rQ1[2]); $(".statement-slider #rQ3").text(rQ1[3]); $(".statement-slider #rQ4").text(rQ1[4]); $(".statement-slider #rQ5").text(rQ1[5]); $(".statement-slider #rQ6").text(rQ1[6]); $(".statement-slider #rQ7").text(rQ1[7]);
			$("#R span").text(value1[0]);

			$(".statement-slider #dSlider1").val(dQ1[1]); $(".statement-slider #dSlider2").val(dQ1[2]); $(".statement-slider #dSlider3").val(dQ1[3]); $(".statement-slider #dSlider4").val(dQ1[4]); $(".statement-slider #dSlider5").val(dQ1[5]); $(".statement-slider #dSlider6").val(dQ1[6]); $(".statement-slider #dSlider7").val(dQ1[7]);
			$(".statement-slider #dQ1").text(dQ1[1]); $(".statement-slider #dQ2").text(dQ1[2]); $(".statement-slider #dQ3").text(dQ1[3]); $(".statement-slider #dQ4").text(dQ1[4]); $(".statement-slider #dQ5").text(dQ1[5]); $(".statement-slider #dQ6").text(dQ1[6]); $(".statement-slider #dQ7").text(dQ1[7]);
			$("#D span").text(value1[1]);

			$(".statement-slider #eSlider1").val(eQ1[1]); $(".statement-slider #eSlider2").val(eQ1[2]); $(".statement-slider #eSlider3").val(eQ1[3]); $(".statement-slider #eSlider4").val(eQ1[4]); $(".statement-slider #eSlider5").val(eQ1[5]); $(".statement-slider #eSlider6").val(eQ1[6]); $(".statement-slider #eSlider7").val(eQ1[7]);
			$(".statement-slider #eQ1").text(eQ1[1]); $(".statement-slider #eQ2").text(eQ1[2]); $(".statement-slider #eQ3").text(eQ1[3]); $(".statement-slider #eQ4").text(eQ1[4]); $(".statement-slider #eQ5").text(eQ1[5]); $(".statement-slider #eQ6").text(eQ1[6]); $(".statement-slider #eQ7").text(eQ1[7]);
			$("#E span").text(value1[2]);

			$(".statement-slider #lSlider1").val(lQ1[1]); $(".statement-slider #lSlider2").val(lQ1[2]); $(".statement-slider #lSlider3").val(rQ1[3]); $(".statement-slider #lSlider4").val(lQ1[4]); $(".statement-slider #lSlider5").val(lQ1[5]); $(".statement-slider #lSlider6").val(lQ1[6]); $(".statement-slider #lSlider7").val(lQ1[7]);
			$(".statement-slider #lQ1").text(lQ1[1]); $(".statement-slider #lQ2").text(lQ1[2]); $(".statement-slider #lQ3").text(lQ1[3]); $(".statement-slider #lQ4").text(lQ1[4]); $(".statement-slider #lQ5").text(lQ1[5]); $(".statement-slider #lQ6").text(lQ1[6]); $(".statement-slider #lQ7").text(lQ1[7]);
			$("#L span").text(value1[3]);

			$(".statement-slider #hSlider1").val(hQ1[1]); $(".statement-slider #hSlider2").val(hQ1[2]); $(".statement-slider #hSlider3").val(hQ1[3]); $(".statement-slider #hSlider4").val(hQ1[4]); $(".statement-slider #hSlider5").val(hQ1[5]); $(".statement-slider #hSlider6").val(hQ1[6]); $(".statement-slider #hSlider7").val(hQ1[7]);
			$(".statement-slider #hQ1").text(hQ1[1]); $(".statement-slider #hQ2").text(hQ1[2]); $(".statement-slider #hQ3").text(hQ1[3]); $(".statement-slider #hQ4").text(hQ1[4]); $(".statement-slider #hQ5").text(hQ1[5]); $(".statement-slider #hQ6").text(hQ1[6]); $(".statement-slider #hQ7").text(hQ1[7]);
			$("#H span").text(value1[4]);

			$(".statement-slider #iSlider1").val(iQ1[1]); $(".statement-slider #iSlider2").val(iQ1[2]); $(".statement-slider #iSlider3").val(iQ1[3]); $(".statement-slider #iSlider4").val(iQ1[4]); $(".statement-slider #iSlider5").val(iQ1[5]); $(".statement-slider #iSlider6").val(iQ1[6]); $(".statement-slider #iSlider7").val(iQ1[7]);
			$(".statement-slider #iQ1").text(iQ1[1]); $(".statement-slider #iQ2").text(iQ1[2]); $(".statement-slider #iQ3").text(iQ1[3]); $(".statement-slider #iQ4").text(iQ1[4]); $(".statement-slider #rQ5").text(iQ1[5]); $(".statement-slider #iQ6").text(iQ1[6]); $(".statement-slider #iQ7").text(iQ1[7]);
			$("#I span").text(value1[5]);

			$(".statement-slider #oSlider1").val(oQ1[1]); $(".statement-slider #oSlider2").val(oQ1[2]); $(".statement-slider #oSlider3").val(oQ1[3]); $(".statement-slider #oSlider4").val(oQ1[4]); $(".statement-slider #oSlider5").val(oQ1[5]); $(".statement-slider #oSlider6").val(oQ1[6]); $(".statement-slider #oSlider7").val(oQ1[7]);
			$(".statement-slider #oQ1").text(oQ1[1]); $(".statement-slider #oQ2").text(oQ1[2]); $(".statement-slider #oQ3").text(oQ1[3]); $(".statement-slider #oQ4").text(oQ1[4]); $(".statement-slider #oQ5").text(oQ1[5]); $(".statement-slider #oQ6").text(oQ1[6]); $(".statement-slider #oQ7").text(oQ1[7]);
			$("#O span").text(value1[6]);

			$(".statement-slider #aSlider1").val(aQ1[1]); $(".statement-slider #aSlider2").val(aQ1[2]); $(".statement-slider #aSlider3").val(aQ1[3]); $(".statement-slider #aSlider4").val(aQ1[4]); $(".statement-slider #aSlider5").val(aQ1[5]); $(".statement-slider #aSlider6").val(aQ1[6]); $(".statement-slider #aSlider7").val(aQ1[7]);
			$(".statement-slider #aQ1").text(aQ1[1]); $(".statement-slider #aQ2").text(aQ1[2]); $(".statement-slider #aQ3").text(aQ1[3]); $(".statement-slider #aQ4").text(aQ1[4]); $(".statement-slider #aQ5").text(aQ1[5]); $(".statement-slider #aQ6").text(aQ1[6]); $(".statement-slider #aQ7").text(aQ1[7]);
			$("#A span").text(value1[7]);
		}
		if (username == 'user2'){
			var value2 = $.jStorage.get('user2');
			$("#userResults #rResults").append(value2[0]);
			$("#userResults #dResults").append(value2[1]);
			$("#userResults #eResults").append(value2[2]);
			$("#userResults #lResults").append(value2[3]);
			$("#userResults #hResults").append(value2[4]);
			$("#userResults #iResults").append(value2[5]);
			$("#userResults #oResults").append(value2[6]);
			$("#userResults #aResults").append(value2[7]);
		}
		if (username == 'user3'){
			var value3 = $.jStorage.get('user3');
			$("#userResults #rResults").append(value3[0]);
			$("#userResults #dResults").append(value3[1]);
			$("#userResults #eResults").append(value3[2]);
			$("#userResults #lResults").append(value3[3]);
			$("#userResults #hResults").append(value3[4]);
			$("#userResults #iResults").append(value3[5]);
			$("#userResults #oResults").append(value3[6]);
			$("#userResults #aResults").append(value3[7]);
		}
	});	
});
