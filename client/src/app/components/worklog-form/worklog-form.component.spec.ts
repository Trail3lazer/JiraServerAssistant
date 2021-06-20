import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorklogFormComponent } from './worklog-form.component';

describe('WorklogFormComponent', () => {
  let component: WorklogFormComponent;
  let fixture: ComponentFixture<WorklogFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorklogFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorklogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
