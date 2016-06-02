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

  constructor() {}

  ngOnInit() {
  }

}
