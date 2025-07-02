import { Component } from '@angular/core';
import { RESUME } from '../../core/constants/resume.constant';

@Component({
  selector: 'app-resume',
  imports: [],
  templateUrl: './resume.html',
  styleUrl: './resume.scss'
})
export class Resume {
  resumeData = RESUME;
}
