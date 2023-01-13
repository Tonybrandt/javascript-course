'use strict'

// Programa para realizar reservas en un complejo de cabañas

/*
Iniciar preguntando en qué cabaña de las 4 y que mes el usuario quiere su estadía, de septiembre a febrero. No se puede de marzo a agosto. Está fuera de temporada

Luego que elija del día 10 al 30 del mes que eligió. Los primeros 10 días de los meses de temporada ya están todos reservados. 

Finalmente puede incluir el desayuno a su estadía. 

Costo por día: $10
Costo desayuno/día: $5
*/ 
let reserva = true;
let nombre = prompt('Por favor, ingrese su nombre')
function seleccionarDias() {
    alert('Para seleccionar los días de su estadía, tenga en cuenta que puede ingresar desde el 11 hasta la fecha final del mes que seleccionó, los primeros 10 dias de cada mes de temporada ya están alquilados.')
    let dia = Number(prompt(`por favor ${nombre}, ingrese su día de llegada`))

    while(isNaN(dia)){
        dia = Number(prompt(`por favor ${nombre}, ingrese un número válido entre 11 y 31.`))
    }
    if(dia >= 11 || dia <=20){
        alert(`Excelente ${nombre}, te esperamos a mediados del mes`)
    }else if (dia >= 21 || dia <= 31){
        alert(`Excelente ${nombre}, te esperamos a finales del mes`)
    }else {
        alert(`El número que ingreso no es válido`)
    }
}

function extras(){
    alert(`Hola ${nombre}, Quieres tener tu desayuno cada día? Genial :), te recordamos que el costo es de $5`)
    let diasDesayuno = Number(prompt(`Bueno ${nombre}, ingresa la cantidad de días de tu estadía`))

    while(isNaN(diasDesayuno)){
        diasDesayuno = Number(prompt(`Por favor ${nombre}, ingresa el número de días de tu estadía`))
    }
    
    alert(`Ok ${nombre}, el costo de tu estadía es de: ${diasDesayuno * 10},
    el costo de tus desayunos es de: ${diasDesayuno * 5}` )


}

function consulta() {
    let pregunta = `Hola ${nombre}, le gustaría hacer una reserva?`;
    if (confirm(pregunta) == true) {
        do{
            let opciones = parseInt(prompt(`Por favor ${nombre}, elija una opción:
            1- seleccionar mes y días
            2- Añadir extras
            3- Terminar reserva`))
        
            while(isNaN(opciones)){
                alert('Por favor, ingrese una opción valida')
                opciones = parseInt(prompt(`Por favor, elija una opción:
                1- seleccionar mes y días
                2- Añadir extras
                3- Terminar reserva`))
            }

            if(opciones == 1){
                alert(`Excelente ${nombre}, elijamos un mes! Recuerda que los meses de temporada son:
                septiembre 
                octubre 
                noviembre 
                diciembre 
                enero y
                febrero`)
                let mes = prompt('Introduzca el mes de su estadía:')
                if(mes.toLowerCase() == "septiembre" ||  mes.toLowerCase() == "octubre" ||  mes.toLowerCase() == "noviembre" ||  mes.toLowerCase() == "diciembre" ||  mes.toLowerCase() == "enero" ||  mes.toLowerCase() == "febrero"){
                    alert(`Muchas gracias ${nombre}, usted ha seleccionado ${mes}, ahora proceda a seleccionar los días`)
                    seleccionarDias()
                }else {
                    alert('Este mes está fuera de la temporada o lo que ingresó no es válido')
                }
            }else if (opciones == 2){
                extras();
            }else if (opciones == 3){
                reserva = false
            }else{
                console.log('Esta opción no es válida')
            }
        
            
        }while(reserva)

    } else {
       console.log("Gracias por visitarnos!");
    }
}
consulta();


