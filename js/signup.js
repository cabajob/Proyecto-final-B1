//import
import usuario from "./usuarios.js";
//cuando se inicie la página
window.addEventListener("DOMContentLoaded",(event)=>{
    //constante para todo el código
    const poblaciones = [
        { nombre: "Madrid", cp: "28001" },
        { nombre: "Barcelona", cp: "08001" },
        { nombre: "Valencia", cp: "46001" },
        { nombre: "Sevilla", cp: "41001" },
        { nombre: "Zaragoza", cp: "50001" }
    ];
    //desplegable
    const selecciondepoblacion= document.getElementById("poblacion");
    const inputcp=document.getElementById("cp");
    poblaciones.forEach(function(poblacion){
        const opcion= document.createElement("option");
        opcion.value=poblacion.cp;
        opcion.textContent=poblacion.nombre;
        selecciondepoblacion.appendChild(opcion);
    })
    selecciondepoblacion.addEventListener("change",function(){
        const codigopostal=this.value;
        if(codigopostal){
            inputcp.value=codigopostal;
        }
    })
    
//todos los alerts para guardar
document.getElementById("guardar").addEventListener("click", function(){
    //campo vacío
    if(document.getElementById("nombre").value.trim()==="" || 
    document.getElementById("apellidos").value.trim()==="" || 
    document.getElementById("direccion").value.trim()==="" || 
    document.getElementById("user").value.trim()===""){
        alert("HAY UN CAMPO QUE NO DEBERÍA ESTAR VACÍO");
        return;
    }
    //código postal no de las poblaciones
    const codigo=document.getElementById("cp").value.trim();
    const codigovalido=poblaciones.find(pob=> pob.cp==codigo);
    if(!codigovalido){
        alert("código postal inválido");
        return;
    }
    //teléfono de número raro de dígitos o con letras
    const telefono=document.getElementById("telefono").value.trim();
    if(telefono.length!==9 || !/^\d+$/.test(telefono)){
        alert("teléfono inválido, no son 9 dígitos o contiene letras");
        return;
    }
    //correo electrónico válido
    const correo=document.getElementById("correo").value.trim();
    const correoRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;  // Expresión regular para validar el correo
    if (!correoRegex.test(correo)) {
        alert("correo inválido");
        return;
    }
    //contraseñas
    //longitud
    const contras=document.getElementById("contra").value.trim();
    const caracteresespecialesencontrados=contras.match(/[!@#$%^&*(),.?":{}|<>]/g);
    if(contras.length<8){
        alert("la contraseña debe tener 8 o más caracteres");
        return;
    }
    //letras
    if(!/[a-zA-Z]/.test(contras)){
        alert("la contraseña debe tener alguna letra");
        return;
    }
    //números
    if(!/\d/.test(contras)){
        alert("la contraseña debe tener algún número");
        return;
    }
    //caracteres especiales
    if(!caracteresespecialesencontrados || caracteresespecialesencontrados.length<2){
        alert("la contraseña debe incluir al menos 2 caracteres especiales");
        return;
    }
    //usuarios ya guardados
    const usuariosguardados= JSON.parse(localStorage.getItem("usuarios")) || [];
    const usuarioexistente=usuariosguardados.find(u=>u.user===document.getElementById("user").value.trim());
    if(usuarioexistente){
        alert("este nombre de usuario ya existe");
        return;
    }
    //guardar el usuario
    const persona= new usuario(
        document.getElementById("nombre").value.trim(),
        document.getElementById("apellidos").value.trim(),
        document.getElementById("direccion").value.trim(),
        document.getElementById("poblacion").value.trim(),
        document.getElementById("cp").value.trim(),
        document.getElementById("telefono").value.trim(),
        document.getElementById("correo").value.trim(),
        document.getElementById("user").value.trim(),
        document.getElementById("contra").value.trim()
    );
    usuariosguardados.push(persona);
    localStorage.setItem("usuarios",JSON.stringify(usuariosguardados));
    window.location.href= "../html/login.html"
})

})


