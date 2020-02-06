var data = require("../data.json");

exports.addFriend = function(request, response) {    
	console.log(data);
	response.render('index', {
		'name': request.query.name,
		'description': request.query.description,
		'image': "http://lorempixel.com/500/500/people"
	});
};
