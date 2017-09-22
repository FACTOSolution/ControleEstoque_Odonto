


function cadastroController(){
  var uDAO = new UsuarioDAO();
  this.saveUsuario = function (nome,email,login,senha,callback){
    var usuario = new Usuario(nome,email,login,senha);
    return uDAO.save(usuario,callback);
  };
}
