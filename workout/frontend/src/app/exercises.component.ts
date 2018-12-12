import { Component } from '@angular/core';
import {ApiService} from './api.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'exercises',
  templateUrl: './exercises.component.html'
})

export class ExercisesComponent {

  exercise = {}

  exercises

  constructor(private api: ApiService, private route: ActivatedRoute ){}

  ngOnInit(){
   var workoutID = this.route.snapshot.paramMap.get('workoutID')

    this.api.getExercises(workoutID).subscribe(res => {
      this.exercises = res;
    })
  }


}
