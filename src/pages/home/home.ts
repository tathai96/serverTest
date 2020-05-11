import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { rwpsDetails } from '../../rwpsDetails';
import { jsonPlaceholder, jsonArray } from '../../jsonPlaceholder';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  toggleButton: boolean = false;
  rwpsButton: boolean = false;
  details: jsonArray;
  rwpsDetails: rwpsDetails;

  constructor(public navCtrl: NavController, public http: HttpClient) {
    this.http.get('https://jsonplaceholder.typicode.com/albums').subscribe((res: any) => {
      console.log(res);
      this.details = res;
    });
  }

  showDetails() {
    console.log('button pressed');
    this.toggleButton = !this.toggleButton;
    if (this.rwpsButton) {
      this.rwpsButton = false;
    }
    console.log(this.details);
  }

  showRwpsDetails() {
    console.log('rwps button pressed');
    this.rwpsButton = !this.rwpsButton;
    if (this.toggleButton) {
      this.toggleButton = false;
    }
  }

}
