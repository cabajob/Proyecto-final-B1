window.addEventListener("DOMContentLoaded",(event)=>{
    function mostrarprompt(prompt){
        prompt.style.display='flex';
    }
    function ocultarprompt(prompt){
        prompt.style.display='none';
    }
    document.getElementById("login").addEventListener("click", function(){
        const usuario= document.getElementById("usuario").value.trim();
        const contraseña=document.getElementById("contras").value.trim();
        const usuarios= JSON.parse(localStorage.getItem("usuarios")) || [];
        const usuariovalido=usuarios.find(u=> u.user===usuario && u.contraseña===contraseña);
        if(usuariovalido){
            localStorage.setItem("usuariologueado",JSON.stringify(usuario));
            window.location.href= "../html/productos.html";
        } else{
            alert("usuario o contraseña incorrectos! pruebe de nuevo");
        }
    })
    document.getElementById("nuevo_usuario").addEventListener("click", function(){
        window.location.href= "../html/signup.html";
    })
    document.getElementById("datosolvidados").addEventListener("click",function(){
        mostrarprompt(document.getElementById("promptdatos"));
        document.getElementById("confirmar").addEventListener("click",function(){
            const datodado=document.getElementById("olvidado").value.trim();
            const usuarios= JSON.parse(localStorage.getItem("usuarios")) || [];
            console.log(datodado);
            console.log(usuarios);
            const usuarioreal=usuarios.find(u=>u.user===datodado || u.correo===datodado);
            if(usuarioreal){
                alert(`se ha mandado un correo de recuperación a ${usuarioreal.correo}`);
            }else{
                alert("usuario con ese username o correo no encontrado");
            }
        });
    })
}
)
