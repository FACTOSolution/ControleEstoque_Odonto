const remote = require('electron').remote
const main = remote.require('./index.js')

var button = document.createElement('button')
button.textContent = 'Open Window'
button.addEventListener('click', ()=> {
  var window = remote.getCurrentWindow()
  //window.openDevTools()
  main.openWindow('main')

  window.close()
}, false)
document.body.appendChild(button)
