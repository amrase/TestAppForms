import { Employee } from "./employee";

export class EmployeeService {
    public isUpdate: boolean= false;

    public employeeList: Employee[] =[];
  
    constructor() {
  
       let hobbies:string[] =["cricket","football"];
  
       let emp:Employee = new Employee(100,"Emp1",60,"M",hobbies, "Mysore");
  
       console.log(emp);
  
       this.employeeList.push(emp);
  
       hobbies =["chess","reading"];
  
        emp = new Employee(101,"Emp2",25,"F",hobbies, "Bangalore");
  
        this.employeeList.push(emp);
  
        hobbies =["cricket","reading"];
  
        emp = new Employee(101,"Emp3",45,"M",hobbies, "Chennai");
  
        this.employeeList.push(emp);
  
        //console.log(JSON.stringify( this.employeeList));
  
     }
  
     getEmployee(empId: number): Employee {
  
        return this.employeeList.filter(e=> e.empId == empId)[0];
  
     } 
  
     
  
  
  
     updateEmployee(emp: Employee)
  
     {
  
       const len = this.employeeList.length;
  
       for (let i=0; i < len; i++)
  
       {
  
            if (this.employeeList[i].empId == emp.empId)
  
            {
  
              this.employeeList[i] = emp;
  
              break;
  
            }
  
       } 
  
     }
}