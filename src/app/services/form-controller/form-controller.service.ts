import { Injectable } from '@angular/core';
import { FormModel } from 'src/app/components/forms-list/form/form.model';
import { FormsConfig } from '../../../environments/forms.config';

const STORAGE_KEY = 'local_forms';

@Injectable({
  providedIn: 'root'
})
export class FormControllerService {
  public model: FormModel[];

  constructor() {
    if (localStorage.getItem(STORAGE_KEY)) {
      this.model = JSON.parse(localStorage.getItem(STORAGE_KEY));
    } else {
      this.model = FormsConfig;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.model));
    }
  }

  public getForms(): FormModel[] {
    return this.model;
  }

  public getCurrentForm(index: number): FormModel {
    return this.model[index];
  }

  public updateCurrentForm(article: FormModel, index: number): void {
    this.model[index] = article;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.model));
  }

  public addForm(article: FormModel): void {
    this.model.unshift(article);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.model));
  }
  public deleteForm(index: number): void {
    this.model.splice(index, 1);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.model));
  }
}
