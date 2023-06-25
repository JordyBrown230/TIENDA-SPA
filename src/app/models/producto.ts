export class Producto{
    constructor(
        public idProducto:number=0,
        public nombre:string='',
        public stock:number=0,
        public image:string="",
        public proveedor:number=0,
        public categoria:number=0,
        public precioUnitario:number=0
    ){}
}