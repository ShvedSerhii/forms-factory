import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import { FormModel } from "./form.model";
/*
      ReactiveForm structure class
    */
export default class EditForm {
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
        validators: [Validators.required],
        updateOn: "change"
      }),
      title: new FormControl(this.model.title, {
        validators: [Validators.required],
        updateOn: "change"
      }),
      placeholder: new FormControl(this.model.placeholder, {
        validators: [],
        updateOn: "change"
      }),
      value: new FormControl(this.model.value, {
        validators: [],
        updateOn: "change"
      }),
      dataName1: new FormControl(this.model.data[0].name, {
        validators: [],
        updateOn: "change"
      }),
      dataValue1: new FormControl(this.model.data[0].value, {
        validators: [],
        updateOn: "change"
      }),
      dataName2: new FormControl(this.model.data[1].name, {
        validators: [],
        updateOn: "change"
      }),
      dataValue2: new FormControl(this.model.data[1].value, {
        validators: [],
        updateOn: "change"
      }),
    });

    // form update
    this.formGroup.valueChanges.subscribe((data: any) => {
      this.model.type = data.type;
      this.model.title = data.title;
      this.model.placeholder = data.placeholder ? data.placeholder : 'Enter value';
      this.model.value = data.value ? data.value : 'value';
      this.model.data[0].name = data.data[0].name ? data.data[0].name : 'field1';
      this.model.data[0].value = data.data[0].value ? data.data[0].value : 'value1'; 
      this.model.data[1].name = data.data[1].name ? data.data[1].name : 'field2';
      this.model.data[1].value = data.data[1].value ? data.data[1].value : 'value2'; 
    });
  }
}
