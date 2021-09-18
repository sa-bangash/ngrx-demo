import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';
import { StudentService } from '../../services/student.service';
import { StudentApiActions, StudentUiActions } from '../actions';

@Injectable()
export class StudentEffects {
  constructor(private actions$: Actions, private service: StudentService) {}

  loadStudents$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(StudentUiActions.LoadStudents),
      concatMap(() => {
        return this.service.getStudentList().pipe(
          map((payload) => {
            return StudentApiActions.loadStudentsSuccess({ payload });
          }),
          catchError((err) => {
            return of(StudentApiActions.loadStudentsError({ errorMsg: err }));
          })
        );
      })
    );
  });
}
