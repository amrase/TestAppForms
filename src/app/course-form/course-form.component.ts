import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {

  course = new Course(1,'Angular','5 Days')
  submitted=false;

  onSubmit(){
    console.log(this.submitted);
    
    this.submitted = true;
  
  }

  constructor() { }

  ngOnInit(): void {
  }

}
