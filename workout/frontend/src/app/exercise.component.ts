import { Component } from '@angular/core';
import {ApiService} from './api.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'exercise',
  templateUrl: 'exercise.component.html'
})

export class ExerciseComponent {

  exercise = {}
  workoutID

  constructor(private api: ApiService, private route: ActivatedRoute){}

  ngOnInit(){
    this.workoutID = this.route.snapshot.paramMap.get('workoutID')
    this.api.exerciseSelected.subscribe(exercise => this.exercise = exercise)
  }

  post(exercise){
    exercise.workoutID = this.workoutID
    this.api.postExercise(exercise)
  }

}

