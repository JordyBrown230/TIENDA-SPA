export class Empleado{
    constructor(
        public cedula:string='',
        public nombre:string='',
        public fechaNac:Date=new Date(),
        public fechaIngreso:Date=new Date(),
        public email:string='',
        public tipoEmpleado:string='',
        public idEmpleado: number = 0,
    ){}
}