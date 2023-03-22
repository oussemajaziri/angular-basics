import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output-parent',
  templateUrl: './output-parent.component.html',
  styleUrls: ['./output-parent.component.css']
})
export class OutputParentComponent implements OnInit {

  objs = ['obj_1','obj_2','obj_3'];

  constructor() { }

  ngOnInit(): void {
  }

  addObj(newObj: string) {
    this.objs.push(newObj);
  }
}


