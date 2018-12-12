import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable()
export class ApiService{

  private selectedExercise = new Subject<any>();
  exerciseSelected = this.selectedExercise.asObservable();

  private selectedWorkout = new Subject<any>();
  workoutSelected = this.selectedWorkout.asObservable();

  constructor(private http: HttpClient){}

  getExercises(workoutID){
    return this.http.get(`https://localhost:44352/api/exercises/${workoutID}`);
  }

  getWorkouts(){
    return this.http.get('https://localhost:44352/api/workouts');
  }
  postExercise(exercise){
    this.http.post('https://localhost:44352/api/exercises', exercise).subscribe(res => {
      console.log(res)
    })
  }
  putExercise(exercise){
    this.http.put(`https://localhost:44352/api/exercises/${exercise.id}`, exercise).subscribe(res => {
      console.log(res)
    })
  }
  putWorkout(workout){
    this.http.put(`https://localhost:44352/api/workouts/${workout.id}`, workout).subscribe(res => {
      console.log(res)
    })
  }
  postWorkout(workout){
    this.http.post('https://localhost:44352/api/workouts', workout).subscribe(res => {
      console.log(res)
    })
  }

  selectExercise(exercise){
    this.selectedExercise.next(exercise);
  }
  selectWorkout(workout){
    this.selectedWorkout.next(workout);
  }
}
