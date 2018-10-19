var path = require('path');
var friends = require('../data/friends.js');

function apiRoutes(app) {
    app.get("/api/friends", function(req, res) {
        res.json({friends});
    })
    
    app.post("/api/friends", function(req, res) {
        var newFriend = req.body;

        // FOR EACH FRIEND IN THE OBJECT
        var closestMatch;
        for (i = 0; i < friends.length; i++) {
            var friendDifference = 0;
            console.log("Console log difference: " + friendDifference);
            // FOR EACH SCORE IN SCORES ARRAY
            for (j = 0; j < friends[i].scores.length; j++) {
                var result = friends[i].scores[j] - newFriend.scores[j]
                friendDifference += (Math.abs(result));
                console.log("Console log result: " + result);
            }
            if (closestMatch === undefined) {
                console.log("Creating closestMatch");
                closestMatch = {
                    friendName: friends[i].name, 
                    difference: friendDifference
                    }
                console.log('New match is: ' + closestMatch);
            } else if (friendDifference < closestMatch.difference) {
                console.log("Updating closestMatch");
                closestMatch = {
                    friendName: friends[i].name, 
                    difference: friendDifference
                }
                console.log('Updated match is: ' + JSON.stringify(closestMatch));
            }
        }

        friends.push(newFriend);
        res.send('Your closest match is ' + closestMatch.friendName);
    })
}

module.exports = apiRoutes;