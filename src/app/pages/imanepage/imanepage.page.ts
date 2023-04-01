import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imanepage',
  templateUrl: './imanepage.page.html',
  styleUrls: ['./imanepage.page.scss'],
})
export class ImanepagePage implements OnInit {

 
  selectedCity!: string;
  isDateTimePickerVisible = false;
  selectedDate!: string;
  departureDate!: string;
  arrivalDate!: string;
  constructor() { }

  ngOnInit() {

    
  }
  showDateTimePicker() {
    if (this.isDateTimePickerVisible == false){
      this.isDateTimePickerVisible = true;
    }
    else {
      this.isDateTimePickerVisible = false;
    }
    
  
}


}
