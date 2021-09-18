import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Student } from '../models/student.model';
import { first } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor() {}
  getStudentList(): Observable<Student[]> {
    return of([
      {
        id: 1,
        name: 'shahid',
        level: 10,
      },
      {
        id: 2,
        name: 'waheed',
        level: 12,
      },
    ]).pipe(first());
  }
}
