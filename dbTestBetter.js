// const sqlite3 = require('sqlite3').verbose();
console.time('better-sqlite3');
const db = require('better-sqlite3')('db/test.db', options);

db.serialize(function () {

    db.each("SELECT * FROM people", function (err, row) {
        console.log(row.id + ": " + row.name + " " + row.surname);
    });
});

db.close();
console.timeEnd('better-sqlite3');