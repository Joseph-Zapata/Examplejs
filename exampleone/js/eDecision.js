function mostrarMensaje(){
   let edad = parseInt(document.getElementById('edad').value);
   
   if (edad >=18){
       mensaje = "sos mayor de eadad"
    }else{
        mensaje = "sos menor de eadad"
    }

   //if con operador terniario
   
   //let mensaje = (edad >= 18) ? "sos mayor de eadad" : "sos menor de eadad";

    alert(mensaje);
    //alert.write(mensaje)
}

function mostrarMensajeDos() {
   
    let edadp = parseInt(document.getElementById('edadp').value);
    let estaturap = parseploat(document.getElementById('estaturap').value);
    let pesop = parseInt(document.getElementById('pesop').value);

    const parametroEdad = 80
    const parametroEstatura = 1.40
    const parametroPeso = 70
    let mensajeDecision = ""

    
    if (edadp <= parametroEdad) {
        if (estaturap >= parametroEstatura) {
            if (pesop == parametroPeso) {
                mensajeDecision = "Apto para realizar el deporte "    
        } else {
            mensajeDecision = "No apto. peso no valido"
        }
    }else {
        mensajeDecision = "No apto. estatura no valido" 
    }
}else {
    mensajeDecision = "No apto. edad no valido"
}

alert(mensajeDecision)
} 