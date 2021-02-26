var mysql = require('mysql');

var con = mysql.createConnection({
  host: "45.33.24.184",
  user: "mcerda2",
  password: "Melon2018.!",
  database: "db_melon"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  console.log(req.body)
  var sql = "INSERT INTO reqpar (tiempo, id_conductor, id_camion, id_estado, estado) VALUES ?";
  var values = [
      [now(), 1, camion, id_estado, estado]
  ];

  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record inserted");
  });
});