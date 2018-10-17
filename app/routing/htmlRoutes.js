app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "survery.html"));
})

app.get("/:anything", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
})