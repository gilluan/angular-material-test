import { Component, OnInit } from '@angular/core';


export class Hero {
  constructor(
    public id: number,
    public name: string,
    public power: string,
    public alterEgo?: string
  ) {  }
}



@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    powers = ['Really Smart', 'Super Flexible', 'Weather Changer'];
  hero = new Hero(18, 'Dr. WhatIsHisWayTooLongName', this.powers[0], 'Dr. What');
  submitted = false;
  onSubmit() {
    this.submitted = true;
  }
  addHero() {
    this.hero = new Hero(42, '', '');
  }

}
