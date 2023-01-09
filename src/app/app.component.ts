import { Component } from '@angular/core';
import { IFormEntity } from './shared/models/form.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tinyone';
  formData: IFormEntity[] = [];
  onSubmit = (formData: IFormEntity[]) => {
    this.formData = formData;
    console.log(this.formData);
  }
}
