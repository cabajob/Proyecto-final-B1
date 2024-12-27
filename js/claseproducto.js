export default class producto{
    constructor(nombre, tipo, enlace){
    this.nombre= nombre;
    this.tipo= tipo;
    this.enlace= enlace;
    }
    get productonombreg(){
        return this.nombre;
    }
    set productonombres(valor){
        this.nombre= valor;
    }
    get productotipog(){
        return this.tipo;
    }
    set productotipos(valor){
        this.tipo= valor;
    }
    get productoenlaceg(){
        return this.enlace;
    }
    set productoenlaces(valor){
        this.enlace= valor;
    }
}