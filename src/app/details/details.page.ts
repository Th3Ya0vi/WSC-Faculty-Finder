import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private dataService: DataService) { }

  name;
  schedule;

  ngOnInit() {
    this.name = this.activatedRoute.snapshot.paramMap.get('name');

    this.schedule = this.dataService.findTeacherByName(this.name);
    console.log(this.schedule);

  }

}
