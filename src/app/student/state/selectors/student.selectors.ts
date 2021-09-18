import { createSelector } from '@ngrx/store';
import { StudentFeatureSelector } from '../reducer';
export const StudentList = createSelector(
  StudentFeatureSelector,
  (state) => state.list
);
