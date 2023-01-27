'use strict'

// Hacer un simulador que tenga objetos, arrays y métodos. Utilizar funcion constructora, class. (LISTO)
// Tener un método de recorrido como forEach o forOf, (LISTO)
// uno de búsqueda find o filter. (LISTO)
// Y un ordenamiento con un sort o un map, reduce

// Programa para realizar reservas en un complejo de cabañas

/*
Iniciar preguntando en qué cabaña de las 4 y que mes el usuario quiere su estadía, de septiembre a febrero. No se puede de marzo a agosto. Está fuera de temporada

Luego que elija del día 10 al 30 del mes que eligió. Los primeros 10 días de los meses de temporada ya están todos reservados. 

Finalmente puede incluir el desayuno a su estadía. 

Costo por día: $10
Costo desayuno/día: $5
*/ 

// Primero declarar la clase constructora, luego el Array y luego todas las funciones

// Clase CONSTRUCTORA

//class constructora
class Huesped { 
    constructor(id, nombre, edad, telefono, mail){

        this.id = id,
        this.nombre = nombre,
        this.edad = edad,
        this.telefono = telefono,
        this.mail = mail
    }
    //métodos
    mostrarHuespedes(){
        console.log(`El huesped es ${this.nombre} de edad ${this.edad}, el número es ${this.telefono}, su mail es ${this.mail}`)
    }
}

//Instanciación de objetos -- respetamos orden y cantidad de atributos

const huesped1 = new Huesped(1,"Alexia Laca",26, 3547000000, "alexia@gmail.com")

const huesped2 = new Huesped(2,"Gaston Brandt",28, 351000000000, "gaston@gmail.com")

const huesped3 = new Huesped(3,"Juan Brandt", 63, 3547111111, "juan@gmail.com")

const huesped4 = new Huesped(4,"Nancy",54, 351111111111, "nancy@gmail.com")

const huesped5 = new Huesped(5,"Martin Brandt", 27, 412222222222, 'martin@gmail.com')

const huesped6 = new Huesped(6, "Franco Cantarini", 34, 23745852522, 'franco_canta@gmail.com')

// ***********************************************

class Reservas {
    constructor (id, cabana, mes, fechaIng, fechaSal){

        this.id = id,
        this.cabana = cabana,
        this.mes = mes,
        this.fechaIng = fechaIng,
        this.fechaSal = fechaSal
    }
    // Método
    // mostrarReserva(){
    //     console.log(`La reserva se realiza en la cabaña ${this.cabana}, en el mes ${this.mes}, entre las fechas ${fechaIng} y ${this.fechaSal}`)
    // }
}

const reserva1 = new Reservas(1, 1, 'septiembre', 15, 20)

const reserva2 = new Reservas(2, 2, 'octubre', 1, 10)

const reserva3 = new Reservas(3, 3, 'noviembre', 1 , 10)

const reserva4 = new Reservas(4, 1, 'diciembre', 15, 20)

const reserva5 = new Reservas(5, 2, 'enero', 15, 20)

const reserva6 = new Reservas(6, 3, 'febrero', 15, 20)

// ********************************************************

const reservasRealizadas = []
reservasRealizadas.push(reserva1, reserva2, reserva3, reserva4, reserva5, reserva6)

// console.log(reservasRealizadas)

//2 formas de cargar un array:
//con método push
const huespedes = []
huespedes.push(huesped1, huesped2, huesped3, huesped4, huesped5, huesped6)

/* Tareas:  1 - Consultar si el cliente ya existe
            2 - Agregar un huesped nuevo
            3 - Mostrar los usuarios
*/
// FUNCIONES

function mostrarReservas(arr) {
    for (let hospe of arr){
        console.log(`La reserva número ${hospe.id}, en la cabaña N°${hospe.cabana}, en el mes de ${hospe.mes}. 
        fecha de ingreso: ${hospe.fechaIng},
        fecha de salida: ${hospe.fechaSal}`)
    }
}

function agregarHuesped(array){
    let nombreHuesped = prompt("Ingrese su nombre y apellido:")
    let edadHuesped = parseInt(prompt("Ingrese su edad:"))
    let telefonoHuesped = parseInt(prompt("Ingrese su número de contacto:"))
    let mailHuesped = prompt("Ingrese su e-mail:")
    
    //hacerlo con la function constructora
    const nuevoHuesped = new Huesped(array.length+1, nombreHuesped, edadHuesped, telefonoHuesped, mailHuesped)
    console.log(nuevoHuesped)
 
    //pushearlo o sumarlo al array
    array.push(nuevoHuesped)
    mostrarHuesped(array)
 }
 
 function mostrarHuesped(array){
     console.log("Los Huespedes son:")
     for(let elemento of array){
         console.log(elemento.id, elemento.nombre, elemento.telefono, elemento.mail)
         //opción utilizar for in
     }
 }

//  función para buscar un huesped

function buscarHuesped(array){
    let nombreBuscado = prompt("Ingrese el nombre del huesped que desea buscar")
    let nombreEncontrado = array.find( 
        // (host) => {return host.nombre == "gaston brandt"}
        (host) => host.nombre.toLowerCase() == nombreBuscado.toLowerCase() 
    )
    if(nombreEncontrado == undefined){
        console.log(`${nombreBuscado} no se encuentra en nuestra base de huespedes`)
    }else{
        console.log(nombreEncontrado)
        console.log(array[nombreEncontrado])
    }
}

// Funcion para ordenar los huespedes por orden alfabético


function ordenarHuespedes(arr){
    const ordenadoAlfabeticamente = [].concat(arr)
    //ordenar algo que tiene un dato string
    //forma de la a-z ascendente
    ordenadoAlfabeticamente.sort((a, b) => {
        if (a.nombre > b.nombre) {
          return 1
        }
        if (a.nombre < b.nombre) {
          return -1
        }
        // a es igual b
        return 0
      })
      mostrarHuesped(ordenadoAlfabeticamente)
}

 function seleccionarDias() {
    alert('Para seleccionar los días de su estadía, tenga en cuenta que puede ingresar desde el 11 hasta la fecha final del mes que seleccionó, los primeros 10 dias de cada mes de temporada ya están alquilados.')
    let dia = Number(prompt(`por favor ${nombre}, ingrese su día de llegada`))

    while(isNaN(dia) || dia <= 11 || dia >= 32){
        dia = Number(prompt(`por favor ${nombre}, ingrese un número válido entre 11 y 31.`))
    }
    if(dia <=20){
        alert(`Excelente ${nombre}, te esperamos a mediados del mes`)
    }else if (dia >= 21){
        alert(`Excelente ${nombre}, te esperamos a finales del mes`)
    }else {
        alert(`El número que ingreso no es válido`)
    }
}

function estadia() {
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


let reserva = true;
let nombre = prompt('Por favor, ingrese su nombre')
while(nombre == "" || !isNaN(nombre)){
    nombre = prompt('Por favor, ingrese su nombre')
}

function consulta() {
    let pregunta = `Hola ${nombre}, le gustaría hacer una reserva?`;
    if (confirm(pregunta) == true){ 
        do{
            reserva = desplegarMenu(reserva)
        
        }while(!reserva)
    }
        
        function desplegarMenu(salir){
            let opciones = parseInt(prompt(`Por favor ${nombre}, elija una opción:
            1 - Agregar huesped
            2 - Buscar huesped
            3 - Mostrar huesped/es
            4 - seleccionar mes y días de estadía
            5 - Añadir extras
            6 - Mostrar reservas realizadas
            7 - Mostrar huespedes por orden alfabético
            8 - Terminar reserva`))

            switch(opciones){
                case 1:
                    agregarHuesped(huespedes)
                break
                case 2:
                    buscarHuesped(huespedes)
                break
                case 3:
                    mostrarHuesped(huespedes)
                break
                case 4:
                    estadia()
            //     }else if (opciones == 2){
            // }else if (opciones == 3){
            //     reserva = false
            // }else{
            //     console.log('Esta opción no es válida')
            // }
        
            
    //     }while(salir)


                break
                case 5:
                    extras();
                break
                case 6:
                    mostrarReservas(reservasRealizadas);
                break
                case 7:
                    ordenarHuespedes(huespedes)
                break
                case 8:
                    console.log("Gracias por visitarnos!");
                    salir = true
                    return salir
                default:
                    alert("Ingrese una opción correcta")
                break
            }
        }
    //     {
    //             alert('Por favor, ingrese una opción valida')
    //             opciones = parseInt(prompt(`Por favor, elija una opción:
    //             1 - Agregar huesped
    //             2 - Buscar huesped
    //             3 - Mostrar huesped/es
    //             4- seleccionar mes y días de estadía
    //             5- Añadir extras
    //             6- Terminar reserva`))
    //         }
            
    // } else {
    //     console.log("Gracias por visitarnos!");    
    //     }
}

                
consulta();
