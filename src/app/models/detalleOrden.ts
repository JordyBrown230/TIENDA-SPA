export class DetalleOrden{
    constructor(
        public idDetalleOrden:number,
        public cantidad:number,
        public precioUnitario:number,
        public ivaUnitario:number,
        public orden:number,
        public producto:number
    ){}
}