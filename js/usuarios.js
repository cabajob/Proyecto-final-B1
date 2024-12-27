export default class usuario{
    constructor(nombre,apellidos,direccion,poblacion,cp,telefono,correo, user, contraseña){
    this.nombre= nombre
    this.apellidos= apellidos;
    this.direccion= direccion;
    this.poblacion= poblacion;
    this.cp= cp;
    this.telefono= telefono;
    this.correo= correo;
    this.user= user;
    this.contraseña= contraseña
    }
    get usuarionombreg(){
        return this.nombre;
    }
    set usuarionombres(valor){
        this.nombre=valor;
    }
    get usuarioapellidosg(){
        return this.apellidos;
    }
    set usuarioapellidoss(valor){
        this.apellidos=valor;
    }
    get usuariodirecciong(){
        return this.direccion;
    }
    set usuariodireccions(valor){
        this.direccion=valor;
    }
    get usuariopoblaciong(){
        return this.poblacion;
    }
    set usuariopoblacions(valor){
        this.poblacion=valor;
    }
    get usuariocpg(){
        return this.cp;
    }
    set usuariocps(valor){
        this.cp=valor;
    }
    get usuariotelefonog(){
        return this.telefono;
    }
    set usuariotelefonos(valor){
        this.telefono=valor;
    }
    get usuariocorreog(){
        return this.correo;
    }
    set usuariocorreos(valor){
        this.correo=valor;
    }
    get usuariouserg(){
        return this.user;
    }
    set usuariousers(valor){
        this.user=valor;
    }
    get usuariocontraseñag(){
        return this.contraseña;
    }
    set usuariocontraseñas(valor){
        this.contraseña=valor;
    }
}