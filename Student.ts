namespace StudentNS{
    export interface StudentInt{
        fullname:string,
        passport:number,
        dispDetail():void
    }
    export class Student{
        constructor(public fullname:string,public passport:number){
            this.fullname=fullname;
        }
        dispDetail():void{
            console.log(`Name : ${this.fullname} | Passport : ${this.passport}`);
        }
    }
    
}

