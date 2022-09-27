
///// Declaración de la clase

class zapatillas{
    constructor(id, marca, modelo, color, precio, imagen){
        this.id=id;
        this.marca= marca;
        this.modelo=modelo;
        this.color=color;
        this.precio=precio;
        this.imagen=imagen;
    }

}


// let stockTienda = []

// const cargarStock = async () =>{
//     const response = await fetch("zapatillas.json")
//     const data = await response.json()
//     for(let zapatilla of data){
//                 let nuevaZapa = new zapatillas(zapatillas.id, zapatillas.marca, zapatillas.modelo, zapatillas.color, zapatillas.precio,zapatillas.imagen)
//                 stockTienda.push(nuevaZapa)
//             }
// }
// cargarStock()


////// Instanciacion de los objetos

const zapatilla1= new zapatillas (1, "Adidas", "Forum", "Blanco", 19499, "./img/adidas1.jpg");

const zapatilla2= new zapatillas (2, "Adidas", "Superstar", "Negro", 15999, "./img/adidas2.jpg");

const zapatilla3= new zapatillas (3, "Adidas", "Forum", "Blanco", 13499, "./img/adidas3.jpg");

const zapatilla4= new zapatillas (4, "Adidas", "Ozelia", "Blanco", 21499, "./img/adidas4.jpg");

const zapatilla5= new zapatillas (5, "New Balance", "MS237", "Otros", 21999, "./img/nb1.jpg");

const zapatilla6= new zapatillas (6, "New Balance", "MS237", "Blanco", 21999, "./img/nb2.jpg");

const zapatilla7= new zapatillas (7, "New Balance", "MS237", "Negro", 21999, "./img/nb3.jpg");

const zapatilla8= new zapatillas (8, "New Balance", "MS237", "Otros", 21999, "./img/nb4.jpg");

const zapatilla9= new zapatillas (9, "Nike", "React", "Negro", 25199, "./img/nike1.jpg");

const zapatilla10= new zapatillas (10, "Nike", "Crater", "Blanco", 21499, "./img/nike2.jpg");

const zapatilla11= new zapatillas (11, "Nike", "Air force", "Blanco", 19999, "./img/nike3.jpg");

const zapatilla12= new zapatillas (12, "Nike", "Blazer", "Negro", 14999, "./img/nike4.jpg");

const zapatilla13= new zapatillas (13, "Puma", "RS-FAST", "Otros", 24999, "./img/puma1.jpg");

const zapatilla14= new zapatillas (14, "Puma", "RS-FAST", "Otros", 24999, "./img/puma2.jpg");

const zapatilla15= new zapatillas (15, "Puma", "Cruise", "Otros", 21499, "./img/puma3.jpg");

const zapatilla16= new zapatillas (16, "Puma", "Cruise", "Otros", 21499, "./img/puma4.jpg");

const zapatilla17= new zapatillas (17, "Vans", "Old Skool", "Negro", 17499, "./img/vans1.jpg");

const zapatilla18= new zapatillas (18, "Vans", "Authentic", "Negro", 12499, "./img/vans2.jpg");

const zapatilla19= new zapatillas (19, "Vans", "Old Skool", "Negro", 17499, "./img/vans3.jpg");

const zapatilla20= new zapatillas (20, "Vans", "Botas SK8", "Negro", 20999, "./img/vans4.jpg");

////// Declaración del array

const stockTienda = [zapatilla1,zapatilla2,zapatilla3,zapatilla4,zapatilla5,zapatilla6,zapatilla7,zapatilla8,zapatilla9,zapatilla10,zapatilla11,zapatilla12,zapatilla13,zapatilla14,zapatilla15,zapatilla16,zapatilla17,zapatilla18,zapatilla19,zapatilla20];


