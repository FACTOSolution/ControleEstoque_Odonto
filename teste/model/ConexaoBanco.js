var mysql = require('mysql');

function ConexaoBanco(){

  this.connection = mysql.createConnection({
    host  : 'localhost',
    user  : 'root', 
    password  : '33554432',
    database  : 'tutorialelectron',
    socketPath: '/var/run/mysqld/mysqld.sock'
  });

  this.connected = function(){
    this.connection.connect();
    return this.connection;
  };

}
