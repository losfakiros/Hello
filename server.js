const express = require('express');
const app = express();
const fs = require('fs');

app.get('/listUsers', function (req, res) {
    fs.readFile("db/users.json", 'utf8', function (err, data) {
        // console.log( data );
        res.end(data);
    });
});

let server = app.listen(8081, function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port);
});