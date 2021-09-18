import { Action, createReducer, on } from '@ngrx/store';
import { Student } from '../../models';
import { StudentApiActions } from '../actions';

export interface StudentState {
  list: Student[];
}

const initalState: StudentState = {
  list: [],
};

const reducer = createReducer(
  initalState,
  on(StudentApiActions.loadStudentsSuccess, (state, { payload }) => {
    return {
      ...state,
      list: payload,
    };
  })
);

export function studentReducer(
  state: StudentState | undefined,
  action: Action
) {
  return reducer(state, action);
}
