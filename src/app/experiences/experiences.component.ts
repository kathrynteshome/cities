import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Experience } from '../experience';
import { ExperiencesService } from '../experiences.service';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit, OnDestroy {

  experiences: Experience[] = [];
  // {
  //   activity: '',
  //   type: '',
  //   participants: 0,
  //   price: 0,
  //   link: '',
  //   key: 0,
  //   accessibility: 0,

  // };


  
  constructor(private experienceService: ExperiencesService) { 
    for (var index = 0; index < 10; index++){
    
    this.experienceService.getExperiences()
    .subscribe
    (
      data =>
      {
        this.experiences.push(data);
      }

    );
    }
  }

  ngOnInit() {

  }

  ngOnDestroy() {
  
  }


}
