import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  user:any={};
  constructor() { }

  ngOnInit(): void {
  
  }

  login(){
    console.log("Youa are connected",this.user.pseudo,this.user.pwd);
  }
}


