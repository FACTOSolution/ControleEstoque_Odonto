
function UsuarioDAO(){
  var connection = new ConexaoBanco();

  this.save = function(user,callback){
    var c = connection.connected();
    c.query('INSERT INTO usuario SET ?', [user], function(err,result){
      if(err){
        console.log("[ERROR] " + err.message);
        callback(false);
      }
      else
        callback(true);
      c.end();
    });
  }

  this.search = function(name,callback){
    var c = connection.connected();
    var query = "SELECT * from usuario WHERE login ='" + name + "';";
    console.log(query)
    c.query(query,function(err,result){
    //  alert('aqui')
      if(err){
        console.log(err.message)
        console.log("[ERROR] " + err.message);
        callback(false);
      }
      else{
        console.log(result[0].nome)
        callback(true);

      }
      c.end();
      return result[0];
    });

  }
}
