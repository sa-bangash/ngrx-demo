import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { StudentUiActions } from '../state/actions';
import * as studentSelectors from '../state/selectors';

@Injectable({
  providedIn: 'root',
})
export class StudentFacadeService {
  student$ = this.store.select(studentSelectors.StudentList);
  constructor(private store: Store) {}
  loadStudent() {
    this.store.dispatch(StudentUiActions.LoadStudents());
  }
}
