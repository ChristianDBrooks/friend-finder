var path = require('path');
var friends = require('../data/friends.js');

function apiRoutes(app) {
    app.get("/api/friends", function(req, res) {
        res.json({friends});
    })
    
    app.post("/api/friends", function(req, res) {
        var newFriend = req.body;
        var sum = 0;
        for (let i = 0; i < newFriend.scores.length; i ++) {
            sum += parseInt(newFriend.scores[i]);
        }
        newFriend.total = sum;
        var closestMatch;
        var difference = null;
        for (let i = 0; i < friends.length; i++) {
            var result = newFriend.total - friends[i].total;
            if (result < difference || difference === null) {
                difference = result;
                closestMatch = friends[i].name;
            }
        }
        
        friends.push(newFriend);
        res.send('Your closest match is ' + closestMatch);
        console.log('Your closest match is ' + closestMatch);
    })
}

module.exports = apiRoutes;