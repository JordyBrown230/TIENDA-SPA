export class Usuario{
    constructor(
        public idUsuario:number,
        public nombreUsuario:string,
        public password:string,
        public cliente:number,
        public empleado:number
    ){}
}