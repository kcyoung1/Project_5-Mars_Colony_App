import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { OccupationService, ColonistService } from '../shared/services';
import { IOccupation, Colonist } from '../shared/models';
import { NgForm } from '@angular/common';

@Component({
  moduleId: module.id,
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.css'],
  providers: [OccupationService, ColonistService],
  directives: [ROUTER_DIRECTIVES]
})
export class RegisterComponent implements OnInit {

  public occupations: IOccupation[];

  constructor(
    private router: Router,
    private colonistService: ColonistService,
    private occupationService: OccupationService
  ) {

  }

  ngOnInit() {
    this.occupationService.getJobs().then( jobs => this.occupations = jobs);
  }

}
