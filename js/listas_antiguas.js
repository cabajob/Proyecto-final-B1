window.addEventListener('DOMContentLoaded',function(){
    let Listas=JSON.parse(localStorage.getItem("Listas"))||[];
    console.log(Listas);
    let ul=document.getElementById("lista");
    Listas.forEach(lista => {
        let contenedor=document.createElement("div");
        let encabezado=document.createElement('h3');
        encabezado.textContent=`Usuario: ${lista.usuario}, Fecha: ${lista.fecha}`;
        contenedor.appendChild(encabezado);
        let productosul=document.createElement("ul");
        lista.productos.forEach(producto => {
            let productoli=document.createElement("li");
            productoli.textContent=`Producto: ${producto.nombre}, Cantidad: ${producto.cantidad}`;
            productosul.appendChild(productoli);
        });
        contenedor.appendChild(productosul);
        ul.appendChild(contenedor);
    });

})