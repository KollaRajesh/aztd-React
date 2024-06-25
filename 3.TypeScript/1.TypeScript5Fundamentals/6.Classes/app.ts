//tsc -init // create default configuration

// Example: 1 

 class Video{
  title:string ='';
  private year:number=2024;
 //constructor
   constructor (newTitle:string,newYear:number){
    console.log('Creating a new video');
     this.title=newTitle;
     this.year=newYear;
  }
  printItem(){
     console.log(`${this.title} was released in ${this.year}`)
  }

}
//Usage
    let video = new Video('The Wish', 2024);
    video.printItem();


// example:2 
   class Album{
      private _producer: string = '';
      static medium: string = 'Audio/Video';
      //Properties 
      get Producer(): string { 
         return this._producer.toUpperCase();
      }
      set Producer(newProducer:string) { 
         this._producer=newProducer;
      }
      //constructor with parameter properties 
      constructor (public title:string,protected year:number){
      console.log('Creating a new Album');
   }
   printItem(){
      console.log(`${this.title} was released in ${this.year}`)
         console.log(`Medium: ${Album.medium}`)
   }
   }
   //Usage
      let album = new Album('Spider man returns', 2025);
   album.printItem();
   album.Producer = 'Scott';

//example: 3
   // extending class,using Inheritance
   class DocumentaryVideo extends Video {
         
         subject: string = '';
         //constructor
   }
   //usage
   let docVideo = new DocumentaryVideo('Aqua man- The figther Vidoe',2023);
   docVideo.printItem();   

//example: 4

   // extending class,using Inheritance
   class DocumentaryAlbum extends Album { 

       constructor(newTitle: string, newYear: number, private subject: string='') {
         super(newTitle, newYear);
      }
      printItem(): void {
      super.printItem();
      console.log(`subject:${this.subject} ${this.year}`)
      }

}
   
//usage
   let docAlbum = new DocumentaryAlbum('Aqua man- The figther -Album',2023);
   docAlbum.printItem();
   
//Abstract Class
// Example: 5
abstract class Person { 
   constructor(public name: string, public email: string) { }

   abstract ToString(): string;
}

class Employee extends Person { //inheritance

   constructor(public name: string, public email: string, public role:string) { 
      super(name, email);
   }
   override ToString(): string {
      return `${this.name} is employee and role is ${this.role}`;
   }
}

class Manager extends Employee { //hierarchical  inheritance

   reportees: Array<Employee>;

   constructor(public name: string, public email: string) {
      super(name, email, 'Manager');
      this.reportees = new Array<Employee>();

   }

    override ToString(): string {
       let result: string = super.ToString();
       result = `${result} \n \t Reportees:`;
       this.reportees.forEach((employee, index, employees) => { result = `${result} \n ${employee.ToString()}`;})
       return result;
   }
}

let employee1 = new Employee('scott', 'scott@noOrg.com', 'Lead');
let employee2 = new Employee('rob', 'rob@noOrg.com', 'devloper');
let employee3 = new Employee('mark', 'mark@noOrg.com', 'tester');
let manager = new Manager('Michele', 'michele@noOrg.com');
manager.reportees.push(employee1);
manager.reportees.push(employee2);
manager.reportees.push(employee3);
console.log(manager.ToString());

//class expression
//Example:6

 let exEmployee= class extends Person{

    constructor(public name: string, public email: string, public role:string) { 
      super(name, email);
   }
     override ToString(): string {
      return `${this.name} is employee and role is ${this.role}`;
   }
}
let exemployee = new exEmployee('Daniel', 'Daniel@noOrg.com', 'DevLead');
console.log(exemployee.ToString());



//Another expression for extending class with expression 

   class Course extends class {title:string ='';}
   {
      subject:string='';
   }
   let myCourse=new Course();
   myCourse.subject = "TypeScript";
   myCourse.title = "Quick training";
console.log(myCourse.subject);
console.log(myCourse.title);