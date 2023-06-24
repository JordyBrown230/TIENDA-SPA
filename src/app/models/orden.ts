export class Orden{
    constructor(
        public idOrden:number | null = null,
        public tipoRetiro:string | null = null,
        public fechaOrden:Date | null = null,
        public total:number | null = null,
        public ivaTotal:number | null = null,
        public envio:number | null = null,
        public cliente:number | null = null,
        public empleado:number | null = null
    ){}
}