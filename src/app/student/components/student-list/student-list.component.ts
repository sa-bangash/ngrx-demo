import { Component, OnInit } from '@angular/core';
import { StudentFacadeService } from '../../facades/student.facade';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
})
export class StudentListComponent implements OnInit {
  list$ = this.facade.student$;
  constructor(private facade: StudentFacadeService) {
    this.facade.loadStudent();
  }

  ngOnInit(): void {}
}
