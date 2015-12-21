$(function(){
	console.log("running");
	getMatches();
	var now = moment();
	console.log(now);
	$('#now').html(now.format("dddd, MMMM Do YYYY, h:mm:ss a"));

	$('#search').submit(function(e){
		console.log("default prevented!");
		var params = {};
		params.player_name = $('#name').val();
		params.hero_id = $('#hero').val();
		params.skill = $('#skill').val();
		getSearch(params);
		e.preventDefault();
	});
});

function getMatches(){
	$.get("/matches", function(matches){
		matches = JSON.parse(matches);
		console.log(typeof(matches.result.matches[0].start_time));
		$('#matchesPlaceholder').empty();
		var template = _.template($('#matchesTemplate').html());
		matches.result.matches.forEach(function(match){
			$('#matchesPlaceholder').append(template(match));
		});
	});
}

function getSearch(params){
	$.ajax({
		method: "GET",
		url: "/search",
		data: params
	})
	  .done(function(matches){
	  	console.log(matches);
	  	matches = JSON.parse(matches);
		console.log(matches);
		$('#matchesPlaceholder').empty();
		var template = _.template($('#matchesTemplate').html());
		matches.result.matches.forEach(function(match){
			$('#matchesPlaceholder').append(template(match));
		});
	});
}

