console.time('sqlite3');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('db/test.db');

db.serialize(function () {

    db.each("SELECT * FROM people", function (err, row) {
        console.log(row.id + ": " + row.name + " " + row.surname);
    });
});

db.close();
console.timeEnd('sqlite3');