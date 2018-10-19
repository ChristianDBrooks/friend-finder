var express = require('express');

var apiRoutes = require('./app/routing/apiRoutes.js')
var htmlRoutes = require('./app/routing/htmlRoutes.js')

var PORT = process.env.PORT || 8000;

var app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// CALLING IMPORTED HTML ROUTES
apiRoutes(app);
htmlRoutes(app);

app.listen(PORT, function() {
    console.log("App listening on port: " + PORT);
})