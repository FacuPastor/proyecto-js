// mostrar el objeto completo
// console.log(zapatilla1);
// console.log(zapatilla2);
// console.log(zapatilla3);
// console.log(zapatilla4);
// console.log(zapatilla5);

// zapatilla1.mostrarCaract();
// zapatilla2.mostrarCaract();



// console.log(stockTienda.length);
// console.log(stockTienda);
// console.log(stockTienda[4]);

// for (const propiedad in zapatilla5){
//     console.log(zapatilla5[propiedad]);
// }



///// DOM

const contenedorZapatillas = document.getElementById('tienda');
const contenedorCarrito = document.getElementById("carritoContenedor");
const eliminarProdCarrito = document.getElementById('eliminarProd');
const sumaCompra = document.getElementById('compraTotal')
const finalizarCompra= document.getElementById('finalizar-compra')
const vaciarCarrito = document.getElementById('vaciar-carrito');
const searchBar = document.querySelector('#searchBar');
const searchButton = document.querySelector('#searchButton');
let acumulador

/// Array carrito

let Carrito = JSON.parse(localStorage.getItem('carrito')) || [];

console.log(stockTienda);

//// Funciones


contenedorZapatillas.innerHTML = ""
stockTienda.forEach((zapatilla) => {
            const cards = document.createElement('div');
            cards.classList.add ('zapatilla');
            cards.innerHTML = `<div class="card" style="width: 18rem;">
                                <img src="${zapatilla.imagen}" class="card-img-top" alt="${zapatilla.marca} ${zapatilla.modelo}">
                                <div class="card-body">
                                    <h4 class="card-marca">${zapatilla.marca}</h4>
                                    <h5 class="card-modelo">${zapatilla.modelo}</h5>
                                    <p class="card-color">Color: ${zapatilla.color}</p>
                                    <p class="card-precio">$${zapatilla.precio}</p>
                                    <button id="agregar${zapatilla.id}" class=" btn-agregar">Agregar al carrito <i class="fas fa-shopping-cart"></i></button>
                                </div>
                            </div>`

            contenedorZapatillas.appendChild(cards)

        const boton = document.getElementById(`agregar${zapatilla.id}`)
        console.log(boton);
        boton.addEventListener("click", ()=> {mostrarCompra(zapatilla)})
        
    })



function mostrarCompra (zapatilla){
    console.log(`Usted compro ${zapatilla.marca} ${zapatilla.modelo} a ${zapatilla.precio}`);    

    let zapatillaAgregada = Carrito.find((elemento) => (elemento.id == zapatilla.id))
    console.log(zapatillaAgregada);
    console.log(Carrito);
    // Carrito.push(zapatilla);
    // 


    if (zapatillaAgregada == undefined){
        Carrito.push(zapatilla)
        console.log(Carrito);
        localStorage.setItem("carrito", JSON.stringify(Carrito))
        Swal.fire({
            title: "Ha agregado el producto",
            text: ` ${zapatilla.marca} ${zapatilla.modelo} ha sido agregado al carrito`,
            icon: "success",
            timer: 2000,
            showConfirmButton: false,
            confirmButtonText:"Entendido",
        })
    }else{
        console.log(`La zapatilla ${zapatilla.marca} ${zapatilla.modelo} ya se encuentra en el carrito`)
        Swal.fire({
                    title: "Producto ya agregado",
                    text: `${zapatilla.marca} ${zapatilla.modelo} ya se encuentra en el carrito`,
                    icon: "info",
                    timer:2000,
                    confirmButtonText:"Aceptar",
                    confirmButtonColor: 'green',
                    
                })
    }
    comprasCarrito()
}


function comprasCarrito (compras){
    contenedorCarrito.innerHTML= ""
    Carrito.forEach((zapatillaCarrito)=>{
        // const div =document.createElement('div')
        // div.className = ('productoEnCarrito card border-Dark mb-3" id ="zapatillaCarrito${zapatillaCarrito.id}" style="max-width: 300px')
        contenedorCarrito.innerHTML += `
                        <div class="productoEnCarrito card border-Dark mb-3" id ="zapatillaCarrito${zapatillaCarrito.id}" style="max-width: 400px">
                        <img class="imgCarrito" src="${zapatillaCarrito.imagen}" class="card-img-top" alt="${zapatillaCarrito.marca} ${zapatillaCarrito.modelo}">
                        <p class='zapaCarrito'>${zapatillaCarrito.marca} ${zapatillaCarrito.modelo}</p>
                        <p class='precioCarrito'>Precio: $${zapatillaCarrito.precio}</p>
                        <button class= "btn btn-danger" id="btnEliminar${zapatillaCarrito.id}"><i class="fas fa-trash-alt"></i></button>
                        </div>
                        `

            // contenedorCarrito.appendChild(div)
    })
    
    compras.forEach((zapatillaCarrito, indice)=>{
        document.getElementById(`btnEliminar${zapatillaCarrito.id}`).addEventListener('click',  () =>{
            Toastify({
                text: `${zapatillaCarrito.marca} ${zapatillaCarrito.modelo} ha sido eliminado`,
                duration: 2500,
                gravity: "bottom",
                position: "left",
                style:{
                    background: "linear-gradient(to right, #00b09b, #96c92d)",
                    color: "white", 
                }
                
                }).showToast();
            
            
            let prodCarrito = document.getElementById('zapatillaCarrito${zapatillaCarrito.id}')
            prodCarrito.remove()
    
            
            Carrito.splice(indice, 1)
            console.log(Carrito)
            localStorage.setItem("carrito", JSON.stringify(Carrito))
            
            comprasCarrito(Carrito)
        })
    })
    totalCompra(...compras)

}

function compraTotal(...prodTotal) {
    acumulador = 0;

    acumulador = prodTotal.reduce((acumulador, productoCarrito)=>{
        return acumulador + productoCarrito.precio
    },0)
    
    console.log(acumulador)
    
    //Reemplazar con ternario
    acumulador > 0 ? parrafoCompra.innerHTML = `Importe de su compra es ${acumulador}`: parrafoCompra.innerHTML = `<p>No hay productos en el carrito</p>`
   
   
} 


// function totalCompra(...sumaProd){
//     acumulador = 0;
//     acumulador = sumaProd.reduce((acumulador, zapatillaCarrito)=>{
//         return acumulador + zapatillaCarrito.precio
//     },0)
    
//     console.log(acumulador)

//     acumulador > 0 ? compraTotal.innerHTML = `Importe de su compra es ${acumulador}`: compraTotal.innerHTML = `<p>No hay productos en el carrito</p>`
    
// }


finalizarCompra.addEventListener('click', ()=>{

    Swal.fire({
        icon: 'success',
        title: 'Muchas gracias por su compra',
        showConfirmButton: false,
        timer: 2500,
        footer: '<p>En el plazo de las 48hs hábiles nos comunicaremos con usted para concretar la compra.</p>',
    })
})

vaciarCarrito.addEventListener('click', ()=>{
    Carrito.length = 0
    Swal.fire({
        icon: 'warning',
        title: 'El carrito ha sido vaciado',
        showConfirmButton: false,
        timer: 2000
    })
    comprasCarrito()
})


const buscarZapatilla = () => {
    const query = searchBar.value.toLowerCase()
    const arrayResultados = stockTienda.filter((zapatilla) => zapatilla.marca.toLowerCase().includes(query))
    comprasCarrito(arrayResultados)
}

searchButton.addEventListener('click', buscarZapatilla)
searchBar.addEventListener('input', buscarZapatilla)



////// FILTROS

// const contenedorFiltros = document.getElementById('filtrar')

// function mostrarFiltros(){
//     contenedorFiltros.innerHTML=""
// }
// function ocultarFiltros(){
//     contenedorFiltros.innerHTML=""
// }

//     let mostrarFiltrosBtn = document.getElementById('verFiltros')
//     mostrarFiltrosBtn.onclick = mostrarFiltros

//     let ocultarCatalogoBtn= document.getElementById('ocultarFiltros')
//     ocultarCatalogoBtn.onclick = ocultarFiltros


























//     prompt(`                                Bienvenido a Shoes point!!

//     Suscríbete para recibir nuestras ofertas y descuentos especiales:
//     `)

//     let seleccion = prompt(`
//         Seleccione el modelo de Zapatilla que desea comprar:
//             1. ${zapatilla1.marca} ${zapatilla1.modelo}    PRECIO: ${zapatilla1.precio}
//             2. ${zapatilla2.marca} ${zapatilla2.modelo}    PRECIO: ${zapatilla2.precio}
//             3. ${zapatilla3.marca} ${zapatilla3.modelo}    PRECIO: ${zapatilla3.precio}
//             4. ${zapatilla4.marca} ${zapatilla4.modelo}    PRECIO: ${zapatilla4.precio}
//             5. ${zapatilla5.marca} ${zapatilla5.modelo}    PRECIO: ${zapatilla5.precio}
//         `)

//         if (seleccion == 1){
//             alert(`FELICITACIONES POR SU ELECCION ! Zapatillas ${zapatilla1.marca} ${zapatilla1.modelo}`)
//         } else if (seleccion == 2){
//             alert(`FELICITACIONES POR SU ELECCION ! Zapatillas ${zapatilla2.marca} ${zapatilla2.modelo}`)
//         } else if (seleccion == 3){
//             alert(`FELICITACIONES POR SU ELECCION ! Zapatillas ${zapatilla3.marca} ${zapatilla3.modelo}`)
//         } else if (seleccion == 4){
//             alert(`FELICITACIONES POR SU ELECCION ! Zapatillas ${zapatilla4.marca} ${zapatilla4.modelo}`)
//         } else if (seleccion == 5){
//             alert(`FELICITACIONES POR SU ELECCION ! Zapatillas ${zapatilla5.marca} ${zapatilla5.modelo}`)
//         } else {
//             alert('NO TENEMOS STOCK !');
//             comprarZapatilla()
//         }

//     talleElegido(seleccion);
// }


// comprarZapatilla();

// function talleElegido(seleccion){

//     switch (seleccion){
//         case '1':
//             elegirTalle('1');
//             break;
//         case '2':
//             elegirTalle('2');
//             break;
//         case '3':
//             elegirTalle('3');
//             break;
//         case '4':
//             elegirTalle('4');
//             break;
//         case '5':
//             elegirTalle('5');
//             break;
//     }
// }

// function elegirTalle(opciones){

//     let talles = "";

//     switch (opciones){
//         case '1':
//             talles = prompt(`
//             Por favor seleccione el tipo de talle según corresponda:
//                 1. Talle para ${stockTienda[0].talle1}
//                 2. Talle para ${stockTienda[0].talle2}
//                 3. Talle para ${stockTienda[0].talle3}
//             `);
//             Carrito.push(stockTienda[0])
//             console.log(Carrito)
//             compraTotal ('1')
//             break;
//         case '2':
//             talles = prompt(`
//             Por favor seleccione el tipo de talle según corresponda:
//                 1. Talle para ${stockTienda[1].talle1}
//                 2. Talle para ${stockTienda[1].talle2}
//                 3. Talle para ${stockTienda[1].talle3}
//             `);
//             Carrito.push(stockTienda[1])
//             console.log(Carrito)
//             compraTotal ('2')
//             break;
//         case '3':
//             talles = prompt(`
//             Por favor seleccione el tipo de talle según corresponda:
//                 1. Talle para ${stockTienda[2].talle1}
//                 2. Talle para ${stockTienda[2].talle2}
//                 3. Talle para ${stockTienda[2].talle3}
//             `);
//             Carrito.push(stockTienda[2])
//             console.log(Carrito)
//             compraTotal ('3')
//             break;
//         case '4':
//             talles = prompt(`
//             Por favor seleccione el tipo de talle según corresponda:
//                 1. Talle para ${stockTienda[3].talle1}
//                 2. Talle para ${stockTienda[3].talle2}
//                 3. Talle para ${stockTienda[3].talle3}
//             `);
//             Carrito.push(stockTienda[3])
//             console.log(Carrito)
//             compraTotal ('4')
//             break;
//         case '5':
//             talles = prompt(`
//             Por favor seleccione el tipo de talle según corresponda:
//                 1. Talle para ${stockTienda[4].talle1}
//                 2. Talle para ${stockTienda[4].talle2}
//                 3. Talle para ${stockTienda[4].talle3}
//             `);
//             Carrito.push(stockTienda[4])
//             console.log(Carrito)
//             compraTotal ('5')
//             break;
//             default: alert('Lo sentimos! No poseemos esa talla, elija una de las opciones recomendadas.');
//             elegirTalle(opciones);
//             break;
//     }
// }

// //// DUDA !
// /// Intente de esta manera, obviamente debe ser mucho menos codigo y mas sencillo pero no se como interactuar. No se si esta bien el "if" asi suelto o deberia meterlo en una function. Digo para despues ir sumando lo que ya eligieron antes de llegar al "if" y seguir sumando si desean realizar una nueva compra.


// // if ((talles = '1') || (talles = '2') || (talles = '3')){
// //     continuarCompra = prompt ('¿Desea realizar una nueva compra? Si/No').toLowerCase();
// //     if (continuarCompra === 'si'){
// //         comprarZapatilla()
// //     } else{
// //         alert('Muchas gracias por su compra! Vuelva pronto.');
// //     }
// // }


// function compraTotal(seleccion){

//     let nuevaCompra = '';

//     switch (seleccion){
//         case '1':
//             nuevaCompra = prompt ('¿Desea realizar una nueva compra? Si/No').toLowerCase();

//             if (nuevaCompra === 'si'){
//                 comprarZapatilla();
//             } else{
//             alert('Muchas gracias por su compra! Vuelva pronto.');
//             }
//             break;
//         case '2':
//             nuevaCompra = prompt ('¿Desea realizar una nueva compra? Si/No').toLowerCase();

//             if (nuevaCompra === 'si'){
//                 comprarZapatilla();
//             } else{
//                 alert('Muchas gracias por su compra! Vuelva pronto.');
//             }
//             break;
//         case '3':
//             nuevaCompra = prompt ('¿Desea realizar una nueva compra? Si/No').toLowerCase();

//             if (nuevaCompra === 'si'){
//                 comprarZapatilla();
//             } else{
//                 alert('Muchas gracias por su compra! Vuelva pronto.');
//             }
//             break;
//         case '4':
//             nuevaCompra = prompt ('¿Desea realizar una nueva compra? Si/No').toLowerCase();

//             if (nuevaCompra === 'si'){
//                 comprarZapatilla();
//             } else{
//                 alert('Muchas gracias por su compra! Vuelva pronto.');
//             }
//             break;
//         case '5':
//             nuevaCompra = prompt ('¿Desea realizar una nueva compra? Si/No').toLowerCase();

//             if (nuevaCompra === 'si'){
//                 comprarZapatilla();
//             } else{
//                 alert('Muchas gracias por su compra! Vuelva pronto.');
//             }
//             break;
//     }
    
//     Carrito.forEach((producto)=>{
//         alert(`${Zapatilla.marca} ${Zapatilla.modelo} - $${Zapatilla.precio}`)
//     })        
//     alert(`Su compra tiene un total de : $${totalCompra()}`)
// }


// function totalCompra(){

//     let subTotal = Carrito.reduce((subTotal, Zapatilla)=> subTotal + Zapatilla.precio, 0);
//     return subTotal;
// }