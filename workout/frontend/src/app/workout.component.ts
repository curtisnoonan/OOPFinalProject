import { Component } from '@angular/core';
import {ApiService} from './api.service';

@Component({
  selector: 'workout',
  templateUrl: 'workout.component.html'
})

export class WorkoutComponent {

  workout = {}

  constructor(private api: ApiService ){}

  ngOnInit(){
    this.api.workoutSelected.subscribe(workout => this.workout = workout)

  }

}

