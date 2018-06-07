let nombreUsuario = ("Juan Martin");
let saldoCuenta = 3600;
let limiteExtraccion = 1000;


iniciarSesion();
actualizarSaldoEnPantalla();
actualizarLimiteEnPantalla();

function sumarDinero(cantidadIngresada) {
         saldoCuenta += cantidadIngresada
}

function restarDinero(cantidadIngresada) {
         saldoCuenta -= cantidadIngresada
}

function depositarDinero() {
    const ingresoDeDinero = parseInt(prompt("Ingresá la cantidad de dinero a depositar"));
        if(validarIngreso(ingresoDeDinero)) {  
        sumarDinero(ingresoDeDinero);
        actualizarSaldoEnPantalla();
        alert('Has depositado ' +ingresoDeDinero +"\n"+ 'Saldo anterior ' +(saldoCuenta-ingresoDeDinero)+"\n"+ 'Saldo actual ' +saldoCuenta);
        
        } else {
            alert("Entrada erronea");
        }
}

function validarIngreso(numeroValidar) {
    if(isNaN(numeroValidar) || typeof(numeroValidar) !== 'number'|| numeroValidar <= 0) {
        return false;
    }
    return true;
}


function extraerDinero() {
    const dineroAextraer = parseInt(prompt("Ingresá la cantidad de dinero a extraer"));

    if(dineroAextraer>saldoCuenta) {
        alert("La cantidad que queres extraer supera el saldo de cuenta disponible");
    } else if (dineroAextraer>limiteExtraccion) {
        alert("La cantidad que queres extraer supera tu limite de extraccion");
    } else if (dineroAextraer%100) { 
        alert("Ingresa un monto a extraer que sea multiplo de 100");
    } else {
        restarDinero(dineroAextraer);
        actualizarSaldoEnPantalla();
        alert('Has extraido ' +dineroAextraer +"\n"+ 'Saldo anterior ' +(saldoCuenta+dineroAextraer)+"\n"+ 'Saldo actual ' +saldoCuenta);
    }
}


function cambiarLimiteDeExtraccion() {
    let ingresoDeNuevoLimite = parseInt(prompt("Ingresá el nuevo límite de extracción"));
    limiteExtraccion = ingresoDeNuevoLimite;
    actualizarLimiteEnPantalla();
    alert("Tu nuevo límite de extracción es "+limiteExtraccion);

}


function pagarServicio() {
    let numeroDeServicio = parseInt (prompt("Ingresá el número que corresponda con el servicio que querés pagar"+"\n"+"1 - Agua"+"\n"+"2 - Luz"+"\n"+"3 - Internet"+"\n"+"4 - Teléfono"));
    
    switch (numeroDeServicio) { 
            case 1:
                if (350 < saldoCuenta) {
                    restarDinero(350);
                    actualizarSaldoEnPantalla();
                    alert("Has abonado correctamente tu servicio de agua"+"\n"+"Saldo anterior: "+(saldoCuenta+350)+"\n"+"Dinero descontado: "+350+"\n"+"Saldo actual: "+saldoCuenta);
                } else {
                    return alert("Tu saldo es insuficiente para abonar el servicio.");
                }                
                break;
            case 2:
            if (425 < saldoCuenta) {
                restarDinero(425);
                actualizarSaldoEnPantalla();
                alert("Has abonado correctamente tu servicio de teléfono"+"\n"+"Saldo anterior: "+(saldoCuenta+425)+"\n"+"Dinero descontado: "+425+"\n"+"Saldo actual: "+saldoCuenta);
            } else {
                return alert("Tu saldo es insuficiente para abonar el servicio.");
            }                          
            break;
            case 3:
            if (210 < saldoCuenta) {
                restarDinero(210);
                actualizarSaldoEnPantalla();
                alert("Has abonado correctamente tu servicio de luz"+"\n"+"Saldo anterior: "+(saldoCuenta+210)+"\n"+"Dinero descontado: "+210+"\n"+"Saldo actual: "+saldoCuenta);
            } else {
                return alert("Tu saldo es insuficiente para abonar el servicio.");
            }       
            break;
            case 4:
            if (570 < saldoCuenta) {
                restarDinero(570);
                actualizarSaldoEnPantalla();
                alert("Has abonado correctamente tu servicio de internet"+"\n"+"Saldo anterior: "+(saldoCuenta+570)+"\n"+"Dinero descontado: "+570+"\n"+"Saldo actual: "+saldoCuenta);
            } else {
                return alert("Tu saldo es insuficiente para abonar el servicio.");
            }       
            break;
            default:
                alert("No existe el servicio que has seleccionado.");
    } 
}


function transferirDinero() {
    const cuentaAmiga1 = 1234567;
    const cuentaAmiga2 = 7654321;
    let montoAtransferir = parseInt(prompt("Ingresá el monto que querés transferir"));
    
    if(montoAtransferir > saldoCuenta) {
        alert("El monto a transferir supera tu saldo disponible");
    } else {
        let numeroDeCuenta = parseInt(prompt("Ingresá el número de cuenta al que querés transferir ese monto"));
        
        if (numeroDeCuenta === cuentaAmiga1 || numeroDeCuenta === cuentaAmiga2 ) {
            restarDinero(montoAtransferir);
            actualizarSaldoEnPantalla();
            alert("Se han transferido: "+"$"+montoAtransferir+"\n"+"Cuenta destino: "+numeroDeCuenta);

        } else {
            alert("La cuenta ingresada no se encuentra registrada como amiga");
            return false;
        }
    }
}


function iniciarSesion() {
    const codigoSeguridad = 2018;
    let passwordIngresado = parseInt(prompt("Ingresá tu código de seguridad"));

    if(passwordIngresado === codigoSeguridad) {
        alert("Bienvenido/a "+nombreUsuario+" ya podés comenzar a realizar operaciones.")
        cargarNombreEnPantalla();
    } else {
        alert("Código incorrecto. Tu saldo fue retenido por cuestiones de seguridad.");
        saldoCuenta = 0;
        actualizarSaldoEnPantalla();
    }
}


function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}