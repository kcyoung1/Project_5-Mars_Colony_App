import { Component } from '@angular/core';
import { OccupationService, ColonistService, AlienService, EncounterService } from './shared/services';
import { IOccupation, Colonist, IAlien, Encounter } from './shared/models';


@Component({
  moduleId: module.id,
  selector: 'project-5-app',
  templateUrl: 'project-5.component.html',
  styleUrls: ['project-5.component.css'],
  providers: [OccupationService, ColonistService, AlienService, EncounterService]
})
export class Project5AppComponent {
  title = 'project-5 works!';
  public job: IOccupation
  public colonist: Colonist
  public alien: IAlien
  public encounter: Encounter

  constructor(
    private occupationService: OccupationService,
    private colonistService:
    ColonistService,
    private alienService:
    AlienService,
    private encounterService: EncounterService
  ){
      this.colonist = new Colonist('Kurtis', 22, '4');
      this.encounter = new Encounter('Octospider', '2016-09-12', 'Web Developer.', '3')
      
      occupationService.getJobs().then(( jobs )=>{
        console.log(jobs);
        // this.job = jobs[0];
      });
      alienService.getAliens().then(( aliens )=>{
        console.log(aliens);
        // this.alien = alien[0];
      });
      encounterService.getEncounters().then(( encounters )=>{
        console.log(encounters);
        // this.alien = alien[0];
      });
      encounterService.createEncounters(this.encounter).then((encounter )=>{
        console.log(encounter);
        // this.colonist = colonist[0];
      });
      colonistService.createColonist(this.colonist).then((colonist )=>{
        console.log(colonist);
        // this.colonist = colonist[0];
      });

 }
}
