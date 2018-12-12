import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ExerciseComponent } from './exercise.component'
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ApiService} from './api.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ExercisesComponent} from './exercises.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {NavComponent} from './nav.component';
import {WorkoutComponent} from './workout.component';
import {WorkoutsComponent} from './workouts.component';
import {RegisterComponent} from './register.component';
import {LoginComponent} from './login.component';
import {AuthService} from './auth.service';
import {AuthInterceptor} from './auth.interceptor';

const routes = [
  {path: '', component: HomeComponent},
  {path: 'exercise', component: ExerciseComponent},
  {path: 'exercise/:workoutID', component: ExerciseComponent},
  {path: 'exercises', component: ExercisesComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'workout', component: WorkoutComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    ExerciseComponent,
    ExercisesComponent,
    HomeComponent,
    NavComponent,
    WorkoutComponent,
    WorkoutsComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    MatInputModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    ReactiveFormsModule
  ],
  providers: [ApiService, AuthService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
