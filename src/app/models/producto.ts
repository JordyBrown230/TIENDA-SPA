export class Producto{
    constructor(
        public idProducto:number,
        public nombre:string,
        public stock:string,
        public foto:string,
        public proveedor:number,
        public categoria:number
    ){}
}