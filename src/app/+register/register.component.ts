import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { NgForm } from '@angular/common';
import { OccupationService, ColonistService } from '../shared/services';
import { IOccupation, Colonist } from '../shared/models';


@Component({
  moduleId: module.id,
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.css'],
  providers: [OccupationService, ColonistService],
  directives: [ROUTER_DIRECTIVES]
})
export class RegisterComponent implements OnInit {


  NO_OCCUPATION_SELECTED = '(none)';
  public occupations: IOccupation[];
  public colonist: Colonist;

  constructor(
    private router: Router,
    private colonistService: ColonistService,
    private occupationService: OccupationService
  ) {

  }

  ngOnInit() {
    this.colonist = new Colonist(null, null, null);
    this.occupationService.getJobs().then( jobs => this.occupations = jobs);
  }
  onSubmit(event, form){

  }
}
