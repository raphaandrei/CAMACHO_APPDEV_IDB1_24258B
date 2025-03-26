import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding-demo',
  templateUrl: './data-binding-demo.component.html',
})
export class DataBindingDemoComponent {
  // Interpolation
  pageTitle = 'Angular 19 Data Binding';
  currentTime = new Date();

  imageUrl = 'assets/angular-logo.png';
  isDisabled = true;


  clickCount = 0;
  incrementCount() {
    this.clickCount++;
  }


  name = '';
}