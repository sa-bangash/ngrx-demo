import { createAction, props } from '@ngrx/store';
import { StudentApiActions } from '.';
import { Student } from '../../models';

enum StudentApiActionsType {
  loadStudentsSuccess = '[student] load student-success',
  loadStudentError = '[student] load student - error',
}

export const loadStudentsSuccess = createAction(
  StudentApiActionsType.loadStudentsSuccess,
  props<{ payload: Student[] }>()
);

export const loadStudentsError = createAction(
  StudentApiActionsType.loadStudentError,
  props<{ errorMsg: string }>()
);
