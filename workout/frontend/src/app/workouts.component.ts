import { Component } from '@angular/core';
import {ApiService} from './api.service';

@Component({
  selector: 'workouts',
  templateUrl: './workouts.component.html'
})

export class WorkoutsComponent {

  workout = {}

  workouts

  constructor(private api: ApiService ){}

  ngOnInit(){
    this.api.getWorkouts().subscribe(res => {
      this.workouts = res;
    })
  }


}
