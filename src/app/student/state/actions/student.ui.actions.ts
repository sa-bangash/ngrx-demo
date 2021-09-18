import { createAction } from '@ngrx/store';

enum StudentUiAcctionsTypes {
  loadStudents = '[Student] load list',
}

export const LoadStudents = createAction(StudentUiAcctionsTypes.loadStudents);
