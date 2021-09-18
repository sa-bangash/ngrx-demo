import { createFeatureSelector } from '@ngrx/store';
import { StudentState } from './student.reducer';

export const StudentReducerKey = 'studen';

export const StudentFeatureSelector =
  createFeatureSelector<StudentState>(StudentReducerKey);
