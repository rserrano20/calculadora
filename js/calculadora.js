
 function limpiar(){
     document.getElementById('visor').value = '';

 }
 function presionar(valor){
     document.getElementById('visor').value += valor ;
 }

 function calcular(){
     let resultado = 0;
     resultado = document.getElementById('visor').value;
     document.getElementById('visor').value = '';

     document.getElementById('visor').value = eval(resultado);
     
 }