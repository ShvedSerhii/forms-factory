import { Component } from "@angular/core";
import { FormControllerService } from "src/app/services/form-controller/form-controller.service";
import { MatDialog } from "@angular/material/dialog";
import { EditFormComponent } from "./edit-form/edit-form.component";
import { FormModel } from "./form/form.model";

@Component({
  selector: "app-forms-list",
  templateUrl: "./forms-list.component.html",
  styleUrls: ["./forms-list.component.scss"]
})
export class FormsListComponent {
  public forms;

  constructor(
    public formController: FormControllerService,
    public dialog: MatDialog
  ) {
    this.forms = formController.getForms();
  }

  public openDialog(): void {
    const dialogRef = this.dialog.open(EditFormComponent, {
      width: "600px",
      data: {
        type: "text", 
        title: "New form", 
        placeholder: "Enter value",
        value: "value",
        data: [
          { name: "field1", value: "value1" },
          { name: "field2", value: "value2" }
        ]
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }
      if (result) {
        this.formController.addForm(result);
      }
    });
  }
}
