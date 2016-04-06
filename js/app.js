 var availableTeams = {"Bayern Munchen": 5, "Borussia Dortmund": 4, "Hertha BSC": 9, "FC Schalke 04": 6, "Borussia Mönchengladbach": 18, "Bayer Leverkusen": 3, "1. FSV Mainz 05": 15, "VfL Wolfsburg": 11, "1. FC Köln": 1, "FC Ingolstadt 04": 31, "VfB Stuttgart": 10, "Hamburger SV": 7, "SV Darmstadt 98": 55, "Werder Bremen": 12, "FC Augsburg": 16, "TSG 1899 Hoffenheim": 2, "Eintracht Frankfurt": 19, "Hannover 96": 8, 
					   
"Paris Saint-Germain": 524, "AS Monaco FC": 548, "OGC Nice": 522, "Olympique Lyonnais": 523, "Stade Rennais FC": 529, "SM Caen": 514, "AS Saint-Étienne": 527, "FC Nantes": 543, "OSC Lille": 521, "Angers SCO": 532, "SC Bastia": 536, "Olympique de Marseille": 516, "FC Lorient": 525, "FC Girondins de Bordeaux": 526, "EA Guingamp": 538, "Montpellier Hérault SC": 518, "Stade de Reims": 547, "Gazélec Ajaccio": 555, "Toulouse FC": 511, "ES Troyes AC": 531,
					   
"Leicester City FC": 338, "Tottenham Hotspur FC": 73, "Arsenal FC": 57, "Manchester City FC": 65, "West Ham United FC": 563, "Manchester United FC": 66, "Southampton FC": 340, "Stoke City FC": 70, "Liverpool FC": 64, "Chelsea FC": 61, "West Bromwich Albion FC": 74, "Everton FC": 62, "AFC Bournemouth": 1044, "Watford FC": 346, "Swansea City FC": 72, "Crystal Palace FC": 354, "Norwich City FC": 68, "Sunderland AFC": 71, "Newcastle United FC": 67, "Aston Villa FC": 58,
					
"FC Barcelona": 81, "Club Atlético de Madrid": 78, "Real Madrid CF": 86, "Villarreal CF": 94, "Sevilla FC": 559, "RC Celta de Vigo": 558, "Athletic Club": 77, "Málaga CF": 84, "SD Eibar": 278, "RC Deportivo La Coruna": 560, "Real Sociedad de Fútbol": 92, "RCD Espanyol": 80, "Valencia CF": 95, "Real Betis": 90, "UD Las Palmas": 275, "Rayo Vallecano de Madrid": 87, "Granada CF": 83, "Getafe CF": 82, "Sporting Gijón": 96, "Levante UD": 88,
					
"Juventus Turin": 109, "SSC Napoli": 113, "AS Roma": 100, "ACF Fiorentina": 99, "FC Internazionale Milano": 108, "AC Milan": 98, "US Sassuolo Calcio": 471, "SS Lazio": 110, "AC Chievo Verona": 106, "Bologna FC": 103, "Empoli FC": 445, "Genoa CFC": 107, "Torino FC": 586, "Atalanta BC": 102, "UC Sampdoria": 584, "Udinese Calcio": 115, "US Cittá di Palermo": 114, "Carpi FC": 713, "Frosinone Calcio": 470, "Hellas Verona FC": 450}

 var myLeagues = {"Bundesliga": 394, "Ligue 1": 396, "Premier League": 398, "Primera Division": 399, "Seria A": 401}	
	
//function getData() {
//	
//		
//	var teamSearch = $('#search-team').val();
//	var teamId = availableTeams[teamSearch];
////	console.log(teamSearch);
//		
//		$.ajax({
//		  headers: { 'X-Auth-Token': 'a4ea8fa8ea164fc3b9b2d82cc86f2816' },
//		  url: 'http://api.football-data.org/alpha/teams/'+teamId+'/players',
//		  dataType: 'json',
//		  type: 'GET',
//		}).done(function(data) {
//
//			
//			console.log(data);
////			$('.results').append('<p>'+data.name+'</p>');
//
//	//		for (var i = 0; i < data.players.length; i++) {
//	//			if (playerSearch == data.players[i].name) {
//	////				console.log(data.players[i].name);
//	//				$('.player-name').text(playerSearch);
//	//				$('.dob').text(data.players[i].dateOfBirth);
//	//				$('.nationality').text(data.players[i].nationality);
//	//				$('.jerseyNum').text(data.players[i].jerseyNumber);
//	//				$('.player-position').text(data.players[i].position);
//	//				$('.market-value').text(data.players[i].marketValue);
//	//				$('.contract-exp').text(data.players[i].contractUntil);
//	//				
//	//			}; 
//
//	//		};
//		});
//	
//};

 // European Championships url: http://api.football-data.org/v1/soccerseasons/424
function getBundesligaTable() { 
		
	$.ajax({
	 headers: { 'X-Auth-Token': 'a4ea8fa8ea164fc3b9b2d82cc86f2816' },
	 url: 'http://api.football-data.org/alpha/soccerseasons/394/leagueTable',
	 dataType: 'json',
	 type: 'GET',
	}).done(function(data) {
		$.each(data.standing, function(i, item) {
			$('.bundes-table').append('<tr><td>'+data.standing[i].position+'.'+'</td>'+
				'<td>'+data.standing[i].teamName+'</td>'+
				'<td>'+data.standing[i].playedGames+'</td>'+
				'<td>'+data.standing[i].points+'</td>'+
				'<td>'+'<span class="plus">+</span>'+data.standing[i].goals+' | '+'<span class="minus">-</span>'+data.standing[i].goalsAgainst+'</td>'+
				'<td>'+data.standing[i].wins+'</td>'+
				'<td>'+data.standing[i].draws+'</td>'+
				'<td>'+data.standing[i].losses+'</td></tr>');
		})
	  });
};

function getLigue1Table() { 
		
	$.ajax({
	 headers: { 'X-Auth-Token': 'a4ea8fa8ea164fc3b9b2d82cc86f2816' },
	 url: 'http://api.football-data.org/alpha/soccerseasons/396/leagueTable',
	 dataType: 'json',
	 type: 'GET',
	}).done(function(data) {
		$.each(data.standing, function(i, item) {
			$('.ligue1-table').append('<tr><td>'+data.standing[i].position+'.'+'</td>'+
				'<td>'+data.standing[i].teamName+'</td>'+
				'<td>'+data.standing[i].playedGames+'</td>'+
				'<td>'+data.standing[i].points+'</td>'+
				'<td>'+'<span class="plus">+</span>'+data.standing[i].goals+' | '+'<span class="minus">-</span>'+data.standing[i].goalsAgainst+'</td>'+
				'<td>'+data.standing[i].wins+'</td>'+
				'<td>'+data.standing[i].draws+'</td>'+
				'<td>'+data.standing[i].losses+'</td></tr>');
		})
	  });
};

function getEplTable() { 
		
	$.ajax({
	 headers: { 'X-Auth-Token': 'a4ea8fa8ea164fc3b9b2d82cc86f2816' },
	 url: 'http://api.football-data.org/alpha/soccerseasons/398/leagueTable',
	 dataType: 'json',
	 type: 'GET',
	}).done(function(data) {
		$.each(data.standing, function(i, item) {
			$('.epl-table').append('<tr><td>'+data.standing[i].position+'.'+'</td>'+
				'<td>'+data.standing[i].teamName+'</td>'+
				'<td>'+data.standing[i].playedGames+'</td>'+
				'<td>'+data.standing[i].points+'</td>'+
				'<td>'+'<span class="plus">+</span>'+data.standing[i].goals+' | '+'<span class="minus">-</span>'+data.standing[i].goalsAgainst+'</td>'+
				'<td>'+data.standing[i].wins+'</td>'+
				'<td>'+data.standing[i].draws+'</td>'+
				'<td>'+data.standing[i].losses+'</td></tr>');
		})
	  });
};


function getPrimeraTable() { 
		
	$.ajax({
	 headers: { 'X-Auth-Token': 'a4ea8fa8ea164fc3b9b2d82cc86f2816' },
	 url: 'http://api.football-data.org/alpha/soccerseasons/399/leagueTable',
	 dataType: 'json',
	 type: 'GET',
	}).done(function(data) {
		$.each(data.standing, function(i, item) {
			$('.primera-table').append('<tr><td>'+data.standing[i].position+'.'+'</td>'+
				'<td>'+data.standing[i].teamName+'</td>'+
				'<td>'+data.standing[i].playedGames+'</td>'+
				'<td>'+data.standing[i].points+'</td>'+
				'<td>'+'<span class="plus">+</span>'+data.standing[i].goals+' | '+'<span class="minus">-</span>'+data.standing[i].goalsAgainst+'</td>'+
				'<td>'+data.standing[i].wins+'</td>'+
				'<td>'+data.standing[i].draws+'</td>'+
				'<td>'+data.standing[i].losses+'</td></tr>');
		})
	  });
};

function getSeriaATable() { 
		
	$.ajax({
	 headers: { 'X-Auth-Token': 'a4ea8fa8ea164fc3b9b2d82cc86f2816' },
	 url: 'http://api.football-data.org/alpha/soccerseasons/401/leagueTable',
	 dataType: 'json',
	 type: 'GET',
	}).done(function(data) {
		$.each(data.standing, function(i, item) {
			$('.seriaa-table').append('<tr><td>'+data.standing[i].position+'.'+'</td>'+
				'<td>'+data.standing[i].teamName+'</td>'+
				'<td>'+data.standing[i].playedGames+'</td>'+
				'<td>'+data.standing[i].points+'</td>'+
				'<td>'+'<span class="plus">+</span>'+data.standing[i].goals+' | '+'<span class="minus">-</span>'+data.standing[i].goalsAgainst+'</td>'+
				'<td>'+data.standing[i].wins+'</td>'+
				'<td>'+data.standing[i].draws+'</td>'+
				'<td>'+data.standing[i].losses+'</td></tr>');
		})
	  });
};


$(document).ready(function() { 
	 
    $( "#search-team" ).autocomplete({
      source: Object.keys(availableTeams)
		
    });
//	 $('#search').submit(function(event) {
//        event.preventDefault();
//        $('.templates').show();
//		getData();
//	});	
	
//	$('a').on('click', function(){
//		$('ul.menu').find('a.active').removeClass('active');
//		$(this).addClass('active');
//	});
	
	// Bundesliga table appears
	$('.b-link').click(function(event) {
		event.preventDefault();
		
		$('.league-content').show();
		
		$('.bundes-table').empty();
		$('.ligue1-table').empty();
		$('.epl-table').empty();
		$('.primera-table').empty();
		$('.seriaa-table').empty();
		
		$('.table-header').css({'background-color': 'black', 'color': 'yellow'});
		
		getBundesligaTable();	
		
	})
	
	// Ligue 1 table appears
	$('.l-link').click(function(event) {
		event.preventDefault();
		
		$('.league-content').show();
		
		$('.bundes-table').empty();
		$('.ligue1-table').empty();
		$('.epl-table').empty();
		$('.primera-table').empty();
		$('.seriaa-table').empty();
		
		$('.table-header').css({'background-color': 'darkblue', 'color': 'white'});
		
		getLigue1Table();
	}) 
	
	// EPL table appears	
	$('.epl-link').click(function(event) {
		event.preventDefault();
		
		$('.league-content').show();
		
		$('.bundes-table').empty();
		$('.ligue1-table').empty();
		$('.epl-table').empty();
		$('.primera-table').empty();
		$('.seriaa-table').empty();
		
		$('.table-header').css({'background-color': '#ED1A1A', 'color': 'white'});
		
		getEplTable();
	}) 
	
	// Primera Division table appears
	$('.primera-link').click(function(event) {
		event.preventDefault();
		
		$('.league-content').show();
		
		$('.bundes-table').empty();
		$('.ligue1-table').empty();
		$('.epl-table').empty();
		$('.primera-table').empty();
		$('.seriaa-table').empty();
		
		$('.table-header').css({'background-color': 'rgb(198, 11, 30)', 'color': 'yellow'});
		
		getPrimeraTable();
	}) 
	
	// Seria A table appears	
	$('.seriaa-link').click(function(event) {
		event.preventDefault();
		
		$('.league-content').show();
		
		$('.bundes-table').empty();
		$('.ligue1-table').empty();
		$('.epl-table').empty();
		$('.primera-table').empty();
		$('.seriaa-table').empty();
		
		$('.table-header').css({'background-color': 'green', 'color': 'white'});
		
		getSeriaATable();
	}) 
		

	
});