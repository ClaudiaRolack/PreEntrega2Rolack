class Productos {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

let producto1 = new Productos("Wild Orange", 14666)
let producto2 = new Productos("Tumeric", 40000)
let producto3 = new Productos("Copaiba", 49334)
let producto4 = new Productos("Lemon", 17334)
let producto5 = new Productos("Clary Sage", 52000)
let producto6 = new Productos("Cypress", 23334)
let producto7 = new Productos("Fennel", 22000)
let producto8 = new Productos("Frankincense", 100000)
let producto9 = new Productos("Geranium", 57334)
let producto10 = new Productos("Lavender", 34000)
let producto11 = new Productos("Oregano", 33334)
let producto12 = new Productos("Perppermint", 32000)
let producto13 = new Productos("Rosemary", 24000)
let producto14 = new Productos("Spearmint", 37332)
let producto15 = new Productos("Tea Tree", 30666)

let lista = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11, producto12, producto13, producto14, producto15]
const precios = []
let autenticado = false

function autenticador() {
    let usuario = prompt("Ingresa tu usuario:")

    if (usuario === null || usuario === undefined) {
        alert("El usuario está vacío")
    }
    if (usuario === "claudia rolack" && intentos <= 3) {
        alert("Bienvenida " + usuario)
        autenticado = true
    } else {
        alert("No se reconoce al usuario: " + usuario)
        intentos++
        if (intentos > 3) {
            alert("Vuelve a intentarlo luego de 24 horas")
            identificar = false
            intentos = 1
        }
    }
}

function sumar(precios_carrito) {
    precios_con_iva = precios_carrito.map(e => {
        return e * 1.19
    })
    console.log(precios_con_iva)
    const total = precios_con_iva.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    return total
}



function comprar(precio) {

    let comprar = confirm("¿Quieres comprarlo?")

    if (comprar === true) {
        precios.push(precio)
        alert("Agregaste el producto")
    } else {
        alert("Gracias por tu visita, nos vemos pronto")
    }

}

function menu() {
    let aceiteEsencial = prompt('¿Qué Aceite ensencial deseas comprar?\n0. ver total\n1. Wild Orange\n2. Tumeric\n3. Copaiba\n4. Lemon\n5. Clary Sage\n6. Cypress\n7.Fennel\n8. Frankincense\n9. Geranium\n10. Lavender\n11. Oregano\n12. Peppermint\n13. Rosemary\n14. Spearmint\n15. Tea tree')

    switch (aceiteEsencial) {
        case 'ver total':
            let total = sumar(precios)
            alert("El total de tu compra es: " + total + ". ¡Gracias por tu compra!")
            autenticado = false
            break
        case lista[0].nombre:
            alert("Escogiste el Aceite esencial " + aceiteEsencial)
            comprar(14666)
            break
        case lista[1].nombre:
            alert("Escogiste el Aceite esencial " + aceiteEsencial)
            comprar(40000)
            break
        case lista[2].nombre:
            alert("Escogiste el Aceite esencial " + aceiteEsencial)
            comprar(49334)
            break
        case lista[3].nombre:
            alert("Escogiste el Aceite esencial " + aceiteEsencial)
            comprar(17334)
            break
        case lista[4].nombre:
            alert("Escogiste el Aceite esencial " + aceiteEsencial)
            comprar(52000)
            break
        case lista[5].nombre:
            alert("Escogiste el Aceite esencial " + aceiteEsencial)
            comprar(23334)
            break
        case lista[6].nombre:
            alert("Escogiste el Aceite esencial " + aceiteEsencial)
            comprar(22000)
            break
        case lista[7].nombre:
            alert("Escogiste el Aceite esencial " + aceiteEsencial)
            comprar(100000)
            break
        case lista[8].nombre:
            alert("Escogiste el Aceite esencial " + aceiteEsencial)
            comprar(57334)
            break
        case lista[9].nombre:
            alert("Escogiste el Aceite esencial " + aceiteEsencial)
            comprar(34000)
            break
        case lista[10].nombre:
            alert("Escogiste el Aceite esencial " + aceiteEsencial)
            comprar(33334)
            break
        case lista[11].nombre:
            alert("Escogiste el Aceite esencial " + aceiteEsencial)
            comprar(32000)
            break
        case lista[12].nombre:
            alert("Escogiste el Aceite esencial " + aceiteEsencial)
            comprar(24000)
            break
        case lista[13].nombre:
            alert("Escogiste el Aceite esencial " + aceiteEsencial)
            comprar(37332)
            break
        case lista[14].nombre:
            alert("Escogiste el Aceite esencial " + aceiteEsencial)
            comprar(30666)
            break
        default:
            alert("Escribe bien")
            break
    }
}



let intentos = 1
let identificar = true

alert("¡Bienvenido a Áurea Esencias!")

autenticador();
while (autenticado) {
    menu();
}