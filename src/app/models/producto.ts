import { Categoria } from "./categoria";
import { Proveedor } from "./proveedor";

export class Producto{
    constructor(
        public idProducto:| null = null,
        public nombre:string | null = null,
        public stock:number| null = null,
        public image:string | null = null,
        public proveedor:Proveedor | null = null,
        public categoria:Categoria | null = null,
        public precioUnitario:number | null = null
    ){}
}