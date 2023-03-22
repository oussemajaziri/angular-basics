import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-dattribut',
  templateUrl: './directives-dattribut.component.html',
  styleUrls: ['./directives-dattribut.component.css']
})
export class DirectivesDAttributComponent implements OnInit {

  nom!: string;
  bgColor = 'yellow';
  isActive = true;
  constructor() { }

  ngOnInit(): void {
    this.nom = "Jaziri";
  }

  changeColor() {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    this.bgColor = randomColor;
  }

  changeClass(){
    this.isActive=!this.isActive;
  }
}


