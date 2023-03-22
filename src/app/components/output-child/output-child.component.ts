import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output-child',
  templateUrl: './output-child.component.html',
  styleUrls: ['./output-child.component.css']
})
export class OutputChildComponent implements OnInit {

  @Output() newObjEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  emitObj(value:string){
    this.newObjEvent.emit(value);
  }
}


