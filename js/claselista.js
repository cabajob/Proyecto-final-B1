export default class lista {
    constructor(usuario, fecha, productos) {
    this.usuario = usuario;
    this.fecha = fecha;
    this.productos = productos; //bidimensional con nombre y cantidad// 
    }
    get listausuariog(){
        return this.usuario;
    }
    set listausuarios(valor){
        this.usuario= valor;
    }
    get listafechag(){
        return this.fecha;
    }
    set listafechas(valor){
        this.fecha= valor;
    }
    get listaproductosg(){
        return this.productos;
    }
    set listaproductoss(valor){
        this.productos=valor;
    }
}