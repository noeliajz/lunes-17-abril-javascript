const names = ["jose","maria", "julio","mariana"]
console.log(names)
const empty=[]
console.log(empty)
/*para acceder a un elemento del array  */
console.log(names[2])/* entre [posicion del elemento] */
/* para que me diga la cantidad de elementos .length */
console.log(names.length)
/* para saber la posicion de un elemento */
console.log(names.indexOf('jose'))
/* obtener el ultimo elemento del array*/
console.log(names[names.length -1])
/* para mostrar todos elementos en el el desarrollador uso ciclos */
for(let i=0; i<Array.length; i++){
   console.log(names[i]);

}
console.log(names)
/* con while recorro un array*/
let separets = names.map(function(names){
   console.log(`<li>${names}<li>`);
});

/* metodos(): funciones que nos dejan manipular elementos de un array */
const students = ['caro', 'noe', 'iris','maria']

students.push('maxi')/* agrego elemento al ultimo */
console.log(students)
/* elimina el ultimo elemento */
students.pop()
console.log(students)
/* borrar elementos */
students.splice(3,1)/* elimina un elemento(posicion, cant que quiero borrar) */
console.log(students)
students.splice(3)/* elimina de la posicion 3 en adelante todo */ 
console.log(students)
students.splice(0,0,'pepito')/* agrego pepito */
console.log(students)
students.splice(2,0,'pepe')/* agrega en la posicion 2 */

/* ordenar elementos letras y numeros */
students.sort()
console.log(students)
const numbersArray=[1,4,90,2]
numbersArray.sort()
console.log(numbersArray)
/* busca un elemento y me dice si esta o no TRUE O FALSE */
console.log(students.includes("maxi")) 
/* reverse los ordena al reves*/
students.reverse()
console.log(students)
/* concatenar 2 arrays distintos */
const students2=['arturo', 'cristian','estefy']
const allstudentes= students.concat(students2)
console.log(allstudentes)
/* agregar elemento */
allstudentes.push('gonzalo')
console.log(allstudentes)
/* splice */
allstudentes.splice(2,1)
console.log(allstudentes)
/* EJERCICIO DEL TP PUNTO 1 MOSTRAR MESES UNO POR UNO COO UNA LISTA */
const meses = [
    'enero',
    'febrero',
    'marzo',
    'abril'
]
for(i=0; i< meses.length; i++){
    document.write(`<li>${meses[i]}</li>`) /* [posicion] */
}

/* FUNCIONES DECLARATIVAS: BLOQUES DE CODIGO 
PORQUE HAY QUE PONERLE UN NOMBRE CON LA DESVENTAJA
QUE si alguien lo llama = se rompe por eso se usan funciones
no delcaradas o anonimas  */
let nombre='noe'

function saludarPersona(nombreDeUsuario){
    console.log(`Hola ${nombreDeUsuario}`)
}
saludarPersona(nombre) /* la invoco para que se ejecute */

/* ---------- */
let nombre2='julieta'
let apellido='perez'

function saludarPersona(nombreDeUsuario2, apellidoUsuario){ /* estos y la 88 son parametros? preg */
    console.log(`Hola ${nombreDeUsuario2} ${apellidoUsuario}`)
}
saludarPersona(nombre2,apellido) /* la invoco para que se ejecute */


/* FUNCIONES ANONIMAS para ejecutarse debe guardarse
en alguna variable*/

const saludarPersona2=function
(nombreDeUsuario, apellidoUsuario){
    console.log(`Hola esta es una funcion anonima ${nombreDeUsuario}`)
}
saludarPersona2(nombre,apellido)

/* se crea un juego papel tijera */
const juegoPiedraTijera=function(){
    const opciones =['piedra','papel', 'tijera']
    const opcionesCuenca= opciones.length -1
    const randomOpciones=Math.round(Math.random()*opcionesCuenca)
    const resultado = opciones[randomOpciones] 
    if(eleccionUusuario === resultado){
        alert('Empate')
    } else if (eleccionUusuario === 'piedra'
     && resultado === 'tijera'){
        alert('gane')
    }else if ( eleccionUusuario === 'piedra'
     && resultado === 'papel')
       alert('gano')
}
juegoPiedraTijera()


