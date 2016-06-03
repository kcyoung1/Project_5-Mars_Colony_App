export interface IAlien {
  type: string,
  submitted_by: string,
  id: number,
  description: string
}

export interface IOccupation {
  name: string,
  id: number,
  description: string
}

export class Encounter {
  constructor(
    public atype: string,
    public date = new Date(),
    public action: string,
    public colonist_id: string
  ){
    
  }
}

export class Colonist {
  constructor(
    public name: string,
    public age: number,
    public job_id: string
  ){

  }
}
