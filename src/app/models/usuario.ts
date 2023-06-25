export class Usuario{
    constructor(
        public idUsuario:number | null = null,
        public nombreUsuario:string | null = null,
        public password:string | null = null,
        public cliente:string | null = null,
        public empleado:number | null = null,
        public tipoUsuario: string | null = null

    ){}
}