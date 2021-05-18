import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  isUpdate:boolean=false;

  employeeList: Employee[] =[];

  selectedEmployee: Employee =null;

  constructor(private employeeService: EmployeeService) { 

   

  }



  ngOnInit(): void {

    this.employeeList = this.employeeService.employeeList;

    this.employeeService.isUpdate =false;

  }

  getEmployee(empId:number) 

   {

     

     this.selectedEmployee = this.employeeService.getEmployee(empId);

     

     this.isUpdate =true;

   

   }



   onSubmit()

   {

     // console.log(JSON.stringify(this.selectedEmployee));

     this.employeeService.updateEmployee(this.selectedEmployee);

    this.isUpdate =false;

   }



}
