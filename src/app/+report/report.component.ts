import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { AlienService, EncounterService } from '../shared/services';
import { IAlien, Encounter } from '../shared/models';

@Component({
  moduleId: module.id,
  selector: 'app-report',
  templateUrl: 'report.component.html',
  styleUrls: ['report.component.css'],
  providers: [AlienService, EncounterService],
  directives: [ROUTER_DIRECTIVES]
})
export class ReportComponent implements OnInit {

  public NO_ALIEN_SELECTED: string;
  public aliens: IAlien[];
  public encounters: Encounter;
  private savedColonist = sessionStorage.getItem('colonist.job_id');

  constructor(
    private router: Router,
    private alienService: AlienService,
    private encounterService: EncounterService
  ) {
    this.NO_ALIEN_SELECTED = '(none)';

  }

  ngOnInit() : void {
    this.alienService.getAliens().then( alientype => this.aliens = alientype );
    this.encounters = new Encounter(this.NO_ALIEN_SELECTED, '', '43', '');
  }
  onSubmit(event) : void {
    this.encounterService.createEncounters(this.encounters)
                         .then( encounters => this.router.navigate(['/encounters']))
  }
  get noAlien() : boolean {
    return this.encounters.atype === this.NO_ALIEN_SELECTED;
  }

}
