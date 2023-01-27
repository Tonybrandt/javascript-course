Este es el enlace al proyecto en vivo https://tonybrandt.github.io/javascript-course/

<!-- Código de clase -->

 

// //splice: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// //IMPORTANTE LEER DOCUMENTACIÓN
// //que sólo elimine para más cosas investigar link
// //parametro 1 posición en la que empieza a trabajar
// //parametro 2 elementos a eliminar




//PROYECTO
//class constructora
class Libro {
    constructor(id, autor, titulo, precio){
        //propiedades o atributos de nuestra clase
        this.id = id,
        this.autor = autor,
        this.titulo = titulo,
        this.precio = precio

    }
    //métodos
    mostrarInfoLibro(){
        console.log(`El titulo es ${this.titulo}, el autor es ${this.autor} y su precio es ${this.precio}`)
    }
}
//Instanciación de objetos -- respetamos orden y cantidad de atributos

const libro1 = new Libro(1,"Jorge Luis Borges","Aleph", 900)

const libro2 = new Libro(2,"Gabriel García Marquez","Cien años de Soledad", 4500)

const libro3 = new Libro(3,"Isabel Allende", "Paula", 2800)

const libro4 = new Libro(4,"Jorge Luis Borges","Ficciones", 1400)

const libro5 = new Libro(5,"Mario Benedetti", "Andamios", 2200)

const libro6 = new Libro(6, "Mario Vargas Llosa", "La ciudad y los perros", 2400)

//crear un array de objetos: 
//2 formas de cargar un array:
//con método push
const estanteria = []
estanteria.push(libro1, libro2, libro3, libro4, libro5, libro6)

//otra forma directa
const biblioteca = [libro1, libro2, libro3]



// libro1.mostrarInfoLibro()
// console.log(libro1)

//recorer el array estanteria
//for of sintaxis simplificada para recorrer un array
//ventaja no tengo aclarar donde empieza i o donde va
// for(let elemento of estanteria){
//     console.log(elemento.id, elemento.titulo, elemento.autor, elemento.precio)
// }


//for in: clase anterior Recorria un OBJETO por dento

//FUNCTIONS proyecto:
//functions para el menú:
function agregarLibro(array){
   let autorIngresado = prompt("Ingrese el nombre del autor")
   let tituloIngresado = prompt("Ingrese el titulo del libro")
   let precioIngresado = parseInt(prompt("Ingrese el precio del libro"))
   
   //hacerlo con la function constructora
   const nuevoLibro = new Libro(array.length+1, autorIngresado, tituloIngresado,precioIngresado)
   console.log(nuevoLibro)

   //pushearlo o sumarlo al array
   array.push(nuevoLibro)
   mostrarCatalogo(array)
}

function mostrarCatalogo(array){
    console.log("Los libros disponibles son:")
    for(let elemento of array){
        console.log(elemento.id, elemento.titulo, elemento.autor, elemento.precio)
        //opción utilizar for in
    }
}

function mostrarCatalogoForEach(arr){
    console.log("Nuestro catalogo es con forEach")
    arr.forEach(
        (libro)=>{
            console.log(`${libro.id} - ${libro.titulo} del autor/a ${libro.autor} que vale ${libro.precio}`)
        }
    )
}

//Método find busca hasta encontrar coincidencia (en caso de no encontrar devuelve undefined y si encuentra nos devuelve el elemento y deja de buscar)

//buscarPorTitulo
function buscarPorTitulo(array){
    let tituloBuscado = prompt("Ingrese el nombre del titulo que desea buscar")
    let tituloEncontrado = array.find(
        //una function arrow si no tiene {} tiene un return implicito
        // (book) => {return book.titulo == "Aleph"} 
        (book) => book.titulo.toLowerCase() == tituloBuscado.toLowerCase() 
    )
    if(tituloEncontrado == undefined){
        console.log(`${tituloBuscado} no se encuentra en nuestro stock`)
    }else{
        console.log(tituloEncontrado)
    }
}

//FILTER retorna un array
//devuelve un array con los elementos filtrados o un array vacio
//recorrer el array de punta a punta
function buscarPorAutor(ar){
    let autorBuscado = prompt("Ingrese el nombre del autor que está buscando")
    let busqueda = ar.filter(
        (libro) => libro.autor.toLowerCase() == autorBuscado.toLowerCase()
    )
    if(busqueda.length == 0){
        console.log(`Para ${autorBuscado} no hay libros en stock`)
    }else{
        mostrarCatalogo(busqueda)
    }
}


//SORT -- ATENCIÓN METODO QUE DESTRUYE (AFECTA) AL ARRAY ORIGINAL -- en el after lo seguimos
// //https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// // https://davidyero.medium.com/ordenar-arreglo-de-objetos-por-propiedad-o-atributo-javascript-56f74fc48906

//menor a mayor
//si nuestro array es de objects debo aclarar atributo
function ordenarMenorMayor(array){
    //copia array original, para no modificar estanteria
    const menorMayor = [].concat(array)
    menorMayor.sort((param1, param2)=> param1.precio - param2.precio)
    mostrarCatalogo(menorMayor)
}
// ordenarMenorMayor(estanteria)
function ordenarMayorMenor(array){
    const mayorMenor = [].concat(array)
    //para ordenar de forma descendente debo poner el segundo parametro - el primer parametro
    mayorMenor.sort((a,b)=> b.precio - a.precio)
    mostrarCatalogo(mayorMenor)
    
}
// ordenarMayorMenor(estanteria)
function ordenarAlfabeticamenteTitulo(array){
        const ordenadoAlfabeticamente = [].concat(array)
        //ordenar algo que tiene un dato string
        //forma de la a-z ascendente
        ordenadoAlfabeticamente.sort((a, b) => {
            if (a.titulo > b.titulo) {
              return 1
            }
            if (a.titulo < b.titulo) {
              return -1
            }
            // a es igual b
            return 0
          })
          mostrarCatalogo(ordenadoAlfabeticamente)
}

//ordenar un menu para decidir de qué manera quiere ordenar:
function ordenar(array){
    let opcion = parseInt(prompt(`
    1 - Ordenar de menor a mayor:
    2 - Ordenar de mayor a menor:
    3 - Ordenar alfabeticamente por título:`))
    switch(opcion){
        case 1:
            ordenarMenorMayor(array)
        break
        case 2:
            ordenarMayorMenor(array)
        break
        case 3:
            ordenarAlfabeticamenteTitulo(array)
        break
        default:
        console.log(`${opcion} no es válido para ordenar`)
        break
    }
}

//function borrar libro
function borrarLibro(array){
    console.log(`A partir del cátalogo ingrese el id del libro que desea eliminar:`)
    for(let elem of array){
        console.log(`${elem.id} - ${elem.titulo} del autor/a ${elem.autor}`)
    }
    let idEliminar = parseInt(prompt("Ingrese el id a eliminar"))
    //map: copiar un array con sólo los indices
    let arrayID = array.map(book => book.id)
    //indexOf para averiguar la posición del elemento que queremos
    let indice = arrayID.indexOf(idEliminar)
    //splice para una vez localizado el elemento, borrarlo
    // //splice: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
    // //IMPORTANTE LEER DOCUMENTACIÓN
    // //que sólo elimine para más cosas investigar link
    // //parametro 1 posición en la que empieza a trabajar
    // //parametro 2 elementos a eliminar
    array.splice(indice,1)
    mostrarCatalogo(array)
}

function menu(){
    let salirMenu = false
    do{
        salirMenu = preguntarOpcion(salirMenu)
    }while(!salirMenu)
} 

function preguntarOpcion(salir){
    let opcionIngresada = parseInt(prompt(`Ingrese la opción deseada
           1 - Agregar libro
           2 - Borrar libro
           3 - Consultar catálogo
           4 - Encontrar por titulo:
           5 - Buscar libros de un mismo autor:
           6 - Ordenar libros:
           0 - Salir del menu`))
    
        switch(opcionIngresada){
            case 1:
                agregarLibro(estanteria)
            break
            case 2:
                borrarLibro(estanteria)
            break
            case 3:
                mostrarCatalogo(estanteria)
            break
            case 4:
                buscarPorTitulo(estanteria)
            break
            case 5:
                buscarPorAutor(estanteria)
            break
            case 6:
                ordenar(estanteria)
            break
            case 0:
                console.log("gracias por utilizar nuestra app")
                salir = true
                return salir
            break
            default:
                console.log("Ingrese una opción correcta")
            break
        }
}



//código
menu()

4:33:00 Respuesta a mi pregunta en el video de la clase 4