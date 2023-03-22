import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dynamique',
  templateUrl: './dynamique.component.html',
  styleUrls: ['./dynamique.component.css']
})
export class DynamiqueComponent implements OnInit {

  id!:any;

  constructor(private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log("l'ID est :",this.id);
  }

}




