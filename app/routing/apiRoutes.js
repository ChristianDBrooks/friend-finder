app.get("/api/friends", function(req, res) {
    res.json(friends);
})

app.post("/api/friends", function(req, res) {
    var newFriend = req.body

    friends.push(newFriend);

    res.send("New friend added to JSON!");
})