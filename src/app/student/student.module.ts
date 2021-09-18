import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StoreModule } from '@ngrx/store';
import { studentReducer } from './state/reducer/student.reducer';
import { StudentReducerKey } from './state/reducer';
import { EffectsModule } from '@ngrx/effects';
import { StudentEffects } from './state/effects';

@NgModule({
  declarations: [StudentComponent, StudentListComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(StudentReducerKey, studentReducer),
    EffectsModule.forFeature([StudentEffects]),
  ],
  providers: [StudentEffects],
  exports: [StudentComponent],
})
export class StudentModule {}
