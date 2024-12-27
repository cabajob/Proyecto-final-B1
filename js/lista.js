window.addEventListener('DOMContentLoaded',function(){
    let ListaActual=JSON.parse(localStorage.getItem("ListaActual"))||[];
    console.log(ListaActual);
    let ul=document.getElementById("lista");
    ListaActual.forEach(producto => {
        let li=document.createElement("li");
        li.textContent=`Producto: ${producto.nombre}, Cantidad: ${producto.cantidad}`;
        ul.appendChild(li);
    });

})