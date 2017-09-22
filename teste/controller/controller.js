var electron = require('electron')


function realizarCadastro() {
  var nometxt = document.getElementById('InputName').value;
  var emailtxt = document.getElementById('InputEmail').value;
  var logintxt = document.getElementById('InputLogin').value;
  var senhatxt = document.getElementById('InputSenha').value;
  alert('cade')

  var cadCon = new cadastroController();
  cadCon.saveUsuario(
      nometxt,
      emailtxt,
      logintxt,
      senhatxt,
      function(result){
        if(result ===true){
          alert('Cadastro realizado com sucesso"');
          location.href = "./index.html"
        }else{
          alert('Erro no cadastro');
        }

    });

}
