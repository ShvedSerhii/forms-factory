import { Component, OnInit } from '@angular/core';
import { FormControllerService } from 'src/app/services/form-controller/form-controller.service';

@Component({
  selector: 'app-forms-list',
  templateUrl: './forms-list.component.html',
  styleUrls: ['./forms-list.component.scss']
})
export class FormsListComponent implements OnInit {
  public forms;

  constructor(public formController: FormControllerService) {
    this.forms = formController.getForms();
  }

  ngOnInit() {
  }

}
