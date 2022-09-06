


// las imagenes debe   traerlas directamente de fire base
//Despues de cada llave debe separar por una coma
export function llenarTienda() {


    let productos = [
        { nombre: "Fabián Henao y Willam Vargas", 
        foto:"https://firebasestorage.googleapis.com/v0/b/fotosantojos.appspot.com/o/FabianWillan.jpg?alt=media&token=c6dfee0c-c7ee-47bd-8274-e9c39baed74c", 
        descripcion: "Los patichicos" },


        { nombre: "Batimovil a escala", 
        precio: 400000, 
        foto:"https://firebasestorage.googleapis.com/v0/b/fotosantojos.appspot.com/o/batimovil.webp?alt=media&token=d48def66-78fe-4b1b-a9b6-67aebd4bf970", 
        descripcion: "Batimovil a escala de la ultima pelicula" },

        { nombre: "Camiseta Batman",
         precio: 80000, 
         foto:"https://firebasestorage.googleapis.com/v0/b/fotosantojos.appspot.com/o/camiseta%20dc%20bat.jpg?alt=media&token=245851f5-e824-40fb-be57-380c79ef32f4", 
         descripcion: "Camiseta original DC" },

        { nombre: "Gorra Batman",
         precio: 50000, 
         foto:"https://firebasestorage.googleapis.com/v0/b/fotosantojos.appspot.com/o/gorra%20dc.webp?alt=media&token=b0812157-c5e9-4089-b8d7-33d3e54cbd79", 
         descripcion: "Gorra original DC" },

        { nombre: "Bati termo DC", 
        precio: 35000, 
        foto:"https://firebasestorage.googleapis.com/v0/b/fotosantojos.appspot.com/o/vaso-termo-batman-dc-comics-1-663.jpeg?alt=media&token=5fe3d931-e5c1-4e9b-97b5-1bd47d25d5e7",  
        descripcion: "Termo para bati chocolate" },

        { nombre: "Batmav v Superman", 
        precio: 300000, 
        foto:"https://firebasestorage.googleapis.com/v0/b/fotosantojos.appspot.com/o/batman%20%20vs%20superman.png?alt=media&token=9bf97352-c52b-4c24-b5ae-a43c64a1ca24", 
        descripcion: "Imagen a escala de la pelicula Batman v Superman" },

        { nombre: "Bati morral Totto", 
        precio: 80000, 
        foto:"https://firebasestorage.googleapis.com/v0/b/fotosantojos.appspot.com/o/bandolera-bolso-batman-dc-comics.jpg?alt=media&token=16b8d7a1-ba64-4d10-838b-c64ab598b6c8", 
        descripcion: "Bolso original DC" },

        { nombre: "Silla Gaming Batman", 
        precio: 2000000, 
        foto:"https://firebasestorage.googleapis.com/v0/b/fotosantojos.appspot.com/o/bandolera-bolso-batman-dc-comics.jpg?alt=media&token=16b8d7a1-ba64-4d10-838b-c64ab598b6c8", 
        descripcion: "Silla comoda y original DC" },

        { nombre: "caja de comics Batman", 
        precio: 300000, 
        foto:"https://firebasestorage.googleapis.com/v0/b/fotosantojos.appspot.com/o/comics%20batman.jpg?alt=media&token=43f45e7a-e30b-40c5-8bc5-df58610b12d5", 
        descripcion: "comics Batman originales" },

        { nombre: "Bati caja sorpresa",
         precio: 250000, 
         foto:"https://firebasestorage.googleapis.com/v0/b/fotosantojos.appspot.com/o/caja%20batman.jpg?alt=media&token=1b781e75-5161-4c2d-916c-14e8be690246", 
         descripcion: "Caja sorpresa con productos de batman" },

        { nombre: "Bati lonchera totto", 
        precio: 80000, 
        foto:"https://firebasestorage.googleapis.com/v0/b/fotosantojos.appspot.com/o/batilonchera.jpg?alt=media&token=d6d002eb-4296-4976-9e8e-13084ca0085c", 
        descripcion: "Lonchera para llevar tus bati alimentos" }

    ]

   
    let fila = document.getElementById("fila")

    //la palabra correcta es forEach y no foreach
    //debe ir producto dentro de la funcion
    productos.forEach(function (producto) {

        
        let columna = document.createElement("div") //se reemplaza col-4 por div
        columna.classList.add("col")// se quita el md-12

        let tarjeta = document.createElement("div")
        tarjeta.classList.add("card","h-100","text-center","shadow") //se une el h-100 en la misma linea y se agrega text-center,shadow
        

        let imagen = document.createElement("img")
        imagen.classList.add("p-3","w-100","img-fluid") //se une en una sola linea y agrega img-fluid
        imagen.src = producto.foto

        let separador = document.createElement("hr")//
        separador.classList.add("w-50","mx-auto","d-block")// se elimina dos lineas y se agrega en una misma
       

        let nombre = document.createElement("h5")
        nombre.classList.add("fw-bold","text-center","mx-3")// se elimina dos lineas y se agrega en una misma
        nombre.textContent = producto.nombre

        let precio = document.createElement("h6")
        precio.classList.add("text-center","text-muted")// se elimina una linea y se agrega en una misma
        precio.textContent = producto.precio

        let botonAmpliarInfo = document.createElement("button")
        botonAmpliarInfo.setAttribute("btn","type", "button","btn-outline-dark","mx-3","mb-3")//se elimina tres lineas y se agrega en una misma
        botonAmpliarInfo.textContent = "Ver producto"


        tarjeta.appendChild(imagen)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
        
        //VAMOS A ANCLAR (PONER)(DISPONER) LAS ETIQUETAS
        //QUE ACABAMOS DE CREAR EN NUESTRA BASE
        tarjeta.appendChild(imagen)
        tarjeta.appendChild(separador)
        tarjeta.appendChild(nombre)
        tarjeta.appendChild(precio)
        tarjeta.appendChild(botonAmpliarInfo)

        columna.appendChild(tarjeta)
        fila.appendChild(columna)



    })



}
llenarTienda()
