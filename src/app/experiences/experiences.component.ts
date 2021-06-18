import { Component, OnInit } from '@angular/core';
import { Experience } from '../experience';
import { ExperiencesService } from '../experiences.service';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {

  constructor(private experienceService: ExperiencesService) { 
  
  }

  experiences?: Experience[];

  ngOnInit() {
    this.experienceService.getExperiences()
    .subscribe
    (
      data =>
      {
        this.experiences = data;
      }

    );
  }


}
