import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { FormModel } from "../form/form.model";
import DialogForm from './dialog.form';

@Component({
  selector: "app-edit-form",
  templateUrl: "./edit-form.component.html",
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent {
  public form: DialogForm;

  constructor(
    public dialogRef: MatDialogRef<EditFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: FormModel
  ) {
    this.form = new DialogForm(data);
  }

  onNoClick(): void { 
    this.dialogRef.close();
  }
}
