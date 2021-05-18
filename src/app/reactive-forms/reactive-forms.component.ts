import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  registerForm:FormGroup;
  submitted:boolean;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      address: this.formBuilder.group({
        street:[],
        zip:[],
        city:[]
      })
    })
  }

}
