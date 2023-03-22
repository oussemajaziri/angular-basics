import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  contactForm! : FormGroup;

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    this.contactForm=this.fb.group({
      email:['',Validators.required],
      name:['',Validators.required],
      mesaage:['',[Validators.required,Validators.minLength(10)]]
    })
  }
  sendMessage(x:any){
    console.log("Le message est : ",x);
  }
}




