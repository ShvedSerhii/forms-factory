import { FormControllerService } from './../../../services/form-controller/form-controller.service';
import { Component, Input } from '@angular/core';
import { EditFormComponent } from '../edit-form/edit-form.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  @Input() form;
  @Input() index: number;

  constructor(private formController: FormControllerService, public dialog: MatDialog) {
  }

  deleteForm(index) {
    this.formController.deleteForm(index);
  }

  public openDialog(): void {
    const dialogRef = this.dialog.open(EditFormComponent, {
      width: '600px',
      data: JSON.parse(JSON.stringify(this.formController.getCurrentForm(this.index)))
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }
      if (result) {
        this.formController.updateCurrentForm(result, this.index);
      }
    });
  }

}
