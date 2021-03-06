import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { FormModel } from '../form/form.model';
/*
      ReactiveForm structure class
    */
export default class DialogForm {
  private formBuilder: FormBuilder;
  public formGroup: FormGroup;
  public model: FormModel;

  constructor(model: FormModel) {
    this.formBuilder = new FormBuilder();
    this.model = model;
    this.createForm();
  }

  // Create form fields with validation rules
  public createForm() {
    this.formGroup = this.formBuilder.group({
      type: new FormControl(this.model.type, {
        validators: [],
        updateOn: 'change'
      }),
      title: new FormControl(this.model.title, {
        validators: [Validators.required],
        updateOn: 'change'
      }),
      placeholder: new FormControl(this.model.placeholder, {
        validators: [],
        updateOn: 'change'
      }),
      value: new FormControl(this.model.value, {
        validators: [],
        updateOn: 'change'
      }),
      dataName1: new FormControl(this.model.data[0].name, {
        validators: [],
        updateOn: 'change'
      }),
      dataValue1: new FormControl(this.model.data[0].value, {
        validators: [],
        updateOn: 'change'
      }),
      dataName2: new FormControl(this.model.data[1].name, {
        validators: [],
        updateOn: 'change'
      }),
      dataValue2: new FormControl(this.model.data[1].value, {
        validators: [],
        updateOn: 'change'
      }),
      required: new FormControl(this.model.required, {
        validators: [],
        updateOn: 'change'
      }),
      pattern: new FormControl(this.model.pattern, {
        validators: [],
        updateOn: 'change'
      })
    });

    // form update
    this.formGroup.valueChanges.subscribe((data: any) => {
      this.model.type = data.type;
      this.model.title = data.title;
      this.model.placeholder = data.placeholder;
      this.model.value = data.value;
      this.model.data[0].name = data.dataName1;
      this.model.data[0].value = data.dataValue1;
      this.model.data[1].name = data.dataName2;
      this.model.data[1].value = data.dataValue2;
      this.model.required = data.required;
      this.model.pattern = data.pattern;
    });
  }
}
