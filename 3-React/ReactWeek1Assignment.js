class Student   {
        constructor(name, email, community) {
                this.name = name;
                this.email = email;
                this.community = community;
        }
}
class Bootcamp  {
        constructor(name, level, students=[]) {
                this.name = name;
                this.level = level;
                this.students =students;
        }
        registerStudent(studentToRegister){
               if( this.students.filter(student => student.email === studentToRegister.email).length) {
                       console.log(`The ${studentToRegister.email} is already registered`);
                } 
                else    {
                        this.students.push(studentToRegister);
                        console.log(`Registering ${studentToRegister.email}`)
                }
                //console.log(this.students);        
        }  
}
       
 /* 
const webDevFundamentals = new Bootcamp("Web Dev Fundamentals", "Beginners");
const Neo =  new Student("Neo","neo@matrix.org", "Petersburg");
const Trinity = new Student("Trinity","trininty@matrix.org","Seattle");
const Morphous = new Student("Morphous","morphous@matrix.org", "Paris");
const Dev= new Student("Dev","dev@matrix.org", "Dallas");
webDevFundamentals.registerStudent(Trinity);
webDevFundamentals.registerStudent(Neo);
webDevFundamentals.registerStudent(Morphous);
webDevFundamentals.registerStudent(Dev);
console.log(webDevFundamentals);
 */

