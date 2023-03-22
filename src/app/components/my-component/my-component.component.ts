import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  constructor() { }

  message:string="Hello";
  enteredValue:string="";
  newPost!:string;
  disabled:boolean=true;

  ngOnInit(): void {
  }

  showMsg(){
    alert("Hello");
  }

  addText(){
    this.newPost=this.enteredValue;
  }

}
