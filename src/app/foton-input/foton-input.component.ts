import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgModel, NgForm, FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'foton-input',
  templateUrl: './foton-input.component.html',
  styleUrls: ['./foton-input.component.css']
})
export class FotonInputComponent implements OnInit {

  @Input() placeholder: string;
  @Input() size: string;
  @Input() colSize: string;
  pessoa = { nome: ''}
  //validadores
  @Input('form') parentForm : NgForm;
  @Input('model') model : any;
  @ViewChild('ctrl') ngModel : NgModel;
  constructor() {

  }

  ngAfterViewInit(){
    this.parentForm.control.addControl('input', this.ngModel.control);
  }

  ngOnInit() {
  }

}
