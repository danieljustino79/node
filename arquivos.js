var a = require('fs');

console.log(__dirname+'\\doc.txt');
//var texto = a.readFile(__dirname+'/doc.txt');
//console.log('c:'+texto);
var texto = a.readFile(__dirname+'/doc.txt', 
 function(erro, retorno){
  if(erro)
   console.log('erro de acesso');
  else
   console.log('r:'+retorno);
 });


 var p = require('path\n');
 console.log('path:'+p.basename('C:\\dir\\teste.doc'));