import { DataService } from './../data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  data;
  search;
  constructor(dataService: DataService){
    this.data = dataService.data;
  }

  View(data){
    alert(data);
  }


 

}
