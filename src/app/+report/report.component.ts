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
  public savedColonist: string;
  public status: string;

  constructor(
    private router: Router,
    private alienService: AlienService,
    private encounterService: EncounterService
  ) {
    this.NO_ALIEN_SELECTED = '(none)';
    this.savedColonist = sessionStorage.getItem('colonistid');
    this.status = 'loading';
  }

  ngOnInit() : void {
    this.alienService.getAliens().then( alientype => { this.aliens = alientype;
    this.status = 'done';
    });
    this.encounters = new Encounter(this.NO_ALIEN_SELECTED, '', this.savedColonist, '');
  }
  onSubmit(event) : void {
    this.encounterService.createEncounters(this.encounters)
                         .then( encounters => this.router.navigate(['/encounters']))
  }
  get noAlien() : boolean {
    return this.encounters.atype === this.NO_ALIEN_SELECTED;
  }

}
