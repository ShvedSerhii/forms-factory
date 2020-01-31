import { Component, OnInit } from '@angular/core';
import { FormsConfig } from '../../../../environments/forms.config'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public form = FormsConfig[0];

  constructor() { }

  ngOnInit() {
  }

}
