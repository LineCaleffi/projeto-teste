import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  meuForm : FormGroup = new FormGroup({});

  constructor() { }

  ngOnInit(): void {
  }

}
