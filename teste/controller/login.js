var electron = require('electron')

function loginUser(){
  var login = document.getElementById('login').value;
  var pass = document.getElementById('pass').value;
  alert("login: " + login)
  alert("senha: " + pass)

  var uDAO = new UsuarioDAO();
  var user = uDAO.search(login);

}
