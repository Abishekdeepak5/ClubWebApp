import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterLeagueTeamComponent } from './register-league-team.component';

describe('RegisterLeagueTeamComponent', () => {
  let component: RegisterLeagueTeamComponent;
  let fixture: ComponentFixture<RegisterLeagueTeamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterLeagueTeamComponent]
    });
    fixture = TestBed.createComponent(RegisterLeagueTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
