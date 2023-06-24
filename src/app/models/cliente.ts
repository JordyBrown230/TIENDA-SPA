export class Cliente{
    constructor(
        public cedula:string | null = null,
        public nombre:string | null = null,
        public fechaNac:Date = new Date(),
        public email:string | null = null
    ){}
}