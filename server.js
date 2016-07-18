var express = require('express');

var app =  express();
var port = 3000;
// app.get('/',function (req,res) {
//     res.send('Hello Express!!!!!!!!!!');
// });

var middleware = {
    requireAuth : function(req,res,next) {
        console.log("Private route hit!!!");
        next();
    },
    logger : function (req,res,next) {
        console.log('Request : '+req.method + ' ' + req.originalUrl+' '+ new Date().toString());
        next();
    }
}
app.use(middleware.logger);
app.get('/about',middleware.requireAuth,function (req,res) {
    res.send('About Us');
});

app.use(express.static(__dirname + '/public'));
//console.log(__dirname);
app.listen(port, function() {
    console.log('Express Server Started at port - '+port);
});