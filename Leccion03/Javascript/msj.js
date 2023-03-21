
/*const Inputs = document.querySelectorAll('input');
document.getElementById('enviar').addEventListener('click', () => {
    let form = [...Inputs].map(item => {
    return {id:item.id, value:item.value};
  });
    window.localStorage.setItem('form', JSON.stringify(form));
  window.location.href = "Formulario.html";
});

function miFuncion(a, b){
 
  console.log("suma: " + (a+b));
}
miFuncion(2, 3);
console.log(miFuncion);

let x = function(a, b){
  console.log(arguments.length);
  return a+b};

resultado = x(1, 2);
console.log(resultado);

const sumarFunctionTipoFlecha = (a,b) => a+b;
resultado = sumarFunctionTipoFlecha(3,5);
console.log(resultado);*/

let resultado = sumarTodo(5, 4, 13, 10, 9);
console.log(resultado);

function sumarTodo(){
let suma = 0;
for(let i= 0; i< arguments.length; i++){
  suma+=arguments[i];
}
return suma;
}