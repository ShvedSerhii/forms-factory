import { FormControllerService } from './../../../services/form-controller/form-controller.service';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() form;
  @Input() index;

  constructor(private formController: FormControllerService) { }

  ngOnInit() {
  }

  deleteForm(index) {
    this.formController.deleteForm(index); 
  }

}
