var http = require('http');
var fs = require('fs');
var url = require('url');
const { query } = require('express');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var QueryData = url.parse(_url, true).query;
    console.log(_url);
    console.log(QueryData.id)

    if(_url == '/'){
        _url = '/views/index.html';
    }

    if(_url == "/favicon.ico"){
        return response.writeHead(404);
    }
    response.writeHead(200);
    response.end(QueryData.id);


});

app.listen(3000);
