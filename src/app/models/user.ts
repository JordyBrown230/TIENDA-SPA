export class User{
    constructor(
        public id:number,
        public name:string,
        public last_name:string,
        public email:string,
        public role:string,
        public password:string,
        public description:string,
        public image:string
    ){}
}