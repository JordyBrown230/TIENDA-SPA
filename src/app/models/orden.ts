export class Orden{
    constructor(
        public idOrden:number,
        public tipoRetiro:string,
        public fechaOrden:Date,
        public total:number,
        public ivaTotal:number,
        public envio:number,
        public cliente:number,
        public empleado:number
    ){}
}