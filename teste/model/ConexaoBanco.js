var mysql = require('mysql');

function ConexaoBanco(){

  this.connection = mysql.createConnection({
    host  : 'localhost',
    user  : 'root',
    password  : "",
    database  : 'tutorialelectron'
  });

  this.connected = function(){
    this.connection.connect();
    return this.connection;
  };

}
