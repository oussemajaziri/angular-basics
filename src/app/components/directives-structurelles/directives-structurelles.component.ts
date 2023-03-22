import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-structurelles',
  templateUrl: './directives-structurelles.component.html',
  styleUrls: ['./directives-structurelles.component.css']
})
export class DirectivesStructurellesComponent implements OnInit {

  booleanVariable:boolean=true;
  items: any = ['one','two', 'three'];
  color:string='green';
  constructor() { }

  ngOnInit(): void {
  }

}

