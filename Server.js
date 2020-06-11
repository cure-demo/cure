const express = require('express');
const app = express();
const publicPath = path.join(__dirname, ‘...’,’public’);
// Run the app by serving the static files
// in the dist directory
const port= process.env.PORT || 3000
app.use(express.static(publicPath));
// Start the app by listening on the default
// Heroku port
// app.listen(process.env.PORT || 8080);


//app.use(express.static(__dirname + '/dist'));
app.get('*', function(req, res){
res.sendFile(path.join(publicPath,’index.html’);
});

