import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-parent',
  templateUrl: './input-parent.component.html',
  styleUrls: ['./input-parent.component.css']
})
export class InputParentComponent implements OnInit {

  objs = [
    {'id':1,'name':"obj_1"},
    {'id':2,'name':"obj_2"},
    {'id':3,'name':"obj_3"},
    {'id':4,'name':"obj_4"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}



