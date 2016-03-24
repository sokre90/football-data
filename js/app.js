//function showPlayerInfo(data) {
//    
//    var result = $('.player-stats .player-info').clone();
//	
//    for (var i=0; i<=data.players.length; i++) {
//		
//		var playerName = result.find('.player-name');
//		playerName.text(data.players[i].name);
//
//		var dob = result.find('.dob');
//		dob.text(data.players[i].dateOfBirth);
//
//		var nationality = result.find('.nationality');
//		nationality.text(data.players[i].nationality);
//
//		var team = result.find('.team');
//		team.text(data.players[i].team);
//
//		var jerseyNum = result.find('.jerseyNum');
//		jerseyNum.text(data.players[i].jerseyNumber);
//
//		var position = result.find('.player-position');
//		position.text(data.players[i].position);
//
//		var marketValue = result.find('.market-value');
//		marketValue.text(data.players[i].marketValue);
//
//		var contractExp = result.find('.contract-exp');
//		contractExp.text(data.players[i].contractUntil);
//	
//	}
//	return result;
//}
 
function getData() {
	
	var playerNames = [];
				var playerDobs = [];
				var playerNations = [];
				var playerTeams = [];
				var playerNums = [];
				var playerPositions = [];
				var playerMarketVal = [];
				var playerContExp = [];
	
	var playerSearch = $('input[name="player"]').val();
    $.ajax({
      headers: { 'X-Auth-Token': 'a4ea8fa8ea164fc3b9b2d82cc86f2816' },
      url: 'http://api.football-data.org/alpha/teams/66/players?',
      dataType: 'json',
      type: 'GET',
    }).done(function(data) {
		
		
//		if (playerSearch === data.players[i].name) {
//			$.each(data.players, function(i, item) {
		for (var i=0; i<=data.players.length; i++) {
				
				console.log(data.players[i].name);
				playerDobs.push(data.players[i].dateOfBirth);
				playerNations.push(data.players[i].nationality);
//				playerTeams.push(data.players[i].team);
				playerNums.push(data.players[i].jerseyNumber);
				playerPositions.push(data.players[i].position);
				playerMarketVal.push(data.players[i].marketValue);
				playerContExp.push(data.players[i].contractUntil);

		};
//		};	
    }); 
}

$(document).ready(function() {
    $('#search').submit(function(event) {
        event.preventDefault();
        
		
        
//        showPlayerInfo();
			
    });			
});