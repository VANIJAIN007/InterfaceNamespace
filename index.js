var StudentNS;
(function (StudentNS) {
    class Student {
        constructor(fullname, passport) {
            this.fullname = fullname;
            this.passport = passport;
            this.fullname = fullname;
        }
        dispDetail() {
            console.log(`Name : ${this.fullname} | Passport : ${this.passport}`);
        }
    }
    StudentNS.Student = Student;
})(StudentNS || (StudentNS = {}));
var TeacherNS;
(function (TeacherNS) {
    class Teacher {
        constructor(fn, sub) {
            this.fn = fn;
            this.sub = sub;
            this.fullname = fn;
            this.subjects = sub;
        }
    }
    TeacherNS.Teacher = Teacher;
})(TeacherNS || (TeacherNS = {}));
///<reference path="Student.ts" />
///<reference path="Teacher.ts" />
let stu1 = new StudentNS.Student("Vani Jain", 123456);
stu1.dispDetail();
let teach1 = new TeacherNS.Teacher("HARSH", ["HTML", "CSS", "Javascript"]);
console.log(`Teacher Name : ${teach1.fullname} | Subjects : ${teach1.subjects}`);
