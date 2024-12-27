//imports
import lista from './claselista.js';
import {productosvendemos} from './datos.js';
//cuando se carga la página
window.addEventListener('DOMContentLoaded',(event)=>{
    //función para mostrar las galerías de productos según la sección
    function mostrargaleria(galeriamostrada){
        const galerias =[document.getElementById("galeriafyv"),document.getElementById("galeriapyp"),document.getElementById("galerialyq"),document.getElementById("galeriacyp"),document.getElementById("galeriaceyp")];
        galerias.forEach(galeria=>{galeria.style.display='none';});
        galeriamostrada.style.display='flex';
    }
    //funciones para mostrar y ocultar el prompt (de cantidad de alimentos de cada tipo)
    function mostrarprompt(prompt){
        prompt.style.display='flex';
    }
    function ocultarprompt(prompt){
        prompt.style.display='none';
    }
    //definiciones que vamos a usar
    //quién está logueado
    const usuariologueado=JSON.parse(localStorage.getItem("usuariologueado"));
    // para ir añadiendo los productos 
    let productosseleccionados=[];
    //para saber el nombre del producto que estamos mirando. en null default
    let imagenseleccionada=null;
    //para hacer el historial de listas
    let ListasGuardadas=JSON.parse(localStorage.getItem("listas"))||[];
    //función para guardar productos en la lista
    function guardarproductos(nomproducto, cantidad){
        const productosel=productosvendemos.find(p=>p.nombre===nomproducto);
        productosseleccionados.push({...productosel,cantidad: cantidad});
    }
    //función para guardar la lista ( y añadirla al historial)
    function guardarlista(){
        let list=new lista(
            usuariologueado,
            new Date().toLocaleDateString(),
            productosseleccionados
        );
        ListasGuardadas.push(list);
        localStorage.setItem("listas",JSON.stringify(ListasGuardadas));
    }
    //al hacer click en los botones de arriba se muestra cada galería de alimentos
    const tiposdeproductos=Array.from(new Set(productosvendemos.map(producto=>producto.tipo)));
    tiposdeproductos.forEach(tipo=>{
        document.getElementById(tipo).addEventListener("click", ()=>mostrargaleria(document.getElementById(`galeria${tipo}`)));
    });
    //para quedarnos con el nombre de lo que estamos seleccionando y también hacer aparecer el prompt de cantidad
    const imagenes=document.querySelectorAll('img');
    imagenes.forEach(imagen=>{
        imagen.addEventListener("click", ()=>{
            imagenseleccionada= imagen.getAttribute("src").split('/').pop().split('.')[0];
            mostrarprompt(document.getElementById("promptcantidad"));}
        )
    });
    //si decidimos confirmar lo seleccionado, para que se añada a la lista de alimentos 
    document.getElementById("confirmar").addEventListener("click",()=>{
        if(imagenseleccionada){
            guardarproductos(imagenseleccionada,document.getElementById("cantidad").value);
            ocultarprompt(document.getElementById("promptcantidad"));
            document.getElementById("cantidad").value=1;
        }else{
            alert("por favor, seleccione un producto")
        }
    });
    //botones del fondo
    //para guardar la lista
    document.getElementById("guardar").addEventListener("click", guardarlista);
    //para mostrar la lista
    document.getElementById("mostrar").addEventListener("click",function(){
        localStorage.setItem("ListaActual",JSON.stringify(productosseleccionados));
        window.location.href= "../html/lista.html";
    });
    //para mostrar el historial 
    document.getElementById("listas").addEventListener("click",function(){
        localStorage.setItem("Listas",JSON.stringify(ListasGuardadas));
        window.location.href= "../html/listas_antiguas.html";
    });

});


