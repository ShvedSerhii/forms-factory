import { Component, OnInit } from '@angular/core';
import { FormsConfig } from '../../../environments/forms.config'

@Component({
  selector: 'app-forms-list',
  templateUrl: './forms-list.component.html',
  styleUrls: ['./forms-list.component.scss']
})
export class FormsListComponent implements OnInit {
  public forms = FormsConfig;

  constructor() { }

  ngOnInit() {
  }

}
