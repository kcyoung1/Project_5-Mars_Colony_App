import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Project5AppComponent } from '../app/project-5.component';

beforeEachProviders(() => [Project5AppComponent]);

describe('App: Project5', () => {
  it('should create the app',
      inject([Project5AppComponent], (app: Project5AppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'project-5 works!\'',
      inject([Project5AppComponent], (app: Project5AppComponent) => {
    expect(app.title).toEqual('project-5 works!');
  }));
});
