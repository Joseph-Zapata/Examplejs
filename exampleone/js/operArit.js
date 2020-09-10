function sumar(){
    //recibir los datos 
     let numeroU = parseInt(document.getElementById("nUno").value)
     let numeroD = parseInt(document.getElementById("nDos").value)
    //procesar los datos 
     let resultado = parseInt(numeroU + numeroD )
    //Entrega los resultrados 
     document.getElementById("resulOperacion").innerHTML = resultado
}
  //multiplicacion 
function multi(){
    //recibir los datos 
     let numeroU = parseInt(document.getElementById("nUno").value)
     let numeroD = parseInt(document.getElementById("nDos").value)
    //procesar los datos 
     let resultado = parseInt(numeroU * numeroD)
    //Entrega los resultrados 
     document.getElementById("resulOperacion").innerHTML = resultado
}

  //area del triangulo 
  function areat(){
    //recibir los datos 
     let  baset= parseInt(document.getElementById("base").value)
     let alturat = parseInt(document.getElementById("altura").value)
    //procesar los datos 
     let resultado = parseInt(baset * alturat)/2;
    //Entrega los resultrados 
     document.getElementById("resulOperacion").innerHTML = resultado
}  
   //area circulo 
   function areat(){
    //recibir los datos 
     let  baset= parseInt(document.getElementById("base").value)
     let alturat = parseInt(document.getElementById("altura").value)
    //procesar los datos 
     let resultado = parseInt(baset * alturat)/2;
    //Entrega los resultrados 
     document.getElementById("resulOperacion").innerHTML = resultado
}  
