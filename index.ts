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

namespace TeacherNS{
    export interface TeacherInt{
        fullname:string,
        subjects:string[],
    
    }
    
    export class Teacher implements TeacherInt{
        fullname: string;
        subjects:string[];
        constructor(public fn:string,public sub:string[]){
            this.fullname=fn;
            this.subjects=sub;
    
        }
    }
    
}



///<reference path="Student.ts" />
///<reference path="Teacher.ts" />


let stu1:StudentNS.StudentInt=new StudentNS.Student("Vani Jain",123456);
stu1.dispDetail();


let teach1=new TeacherNS.Teacher("HARSH",["HTML","CSS","Javascript"]);
console.log(`Teacher Name : ${teach1.fullname} | Subjects : ${teach1.subjects}`);