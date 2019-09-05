

const sqlite3 = require('sqlite3').verbose();
 
// open the database
/*
let db = new sqlite3.Database('DB_M_musculus.sqlite', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the chinook database.');
});
*/


const path = require('path')
const dbPath = path.resolve(__dirname, 'DB_M_musculus.sqlite')
const db = new sqlite3.Database(dbPath)
 /*
db.serialize(() => {
  db.each(`SELECT PlaylistId as id,
                  Name as name
           FROM playlists`, (err, row) => {
    if (err) {
      console.error(err.message);
    }
    console.log(row.id + "\t" + row.name);
  });
});

db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Close the database connection.');


}); */

exports.db=db;