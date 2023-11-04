import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobslistComponent } from './jobslist.component';

describe('JobslistComponent', () => {
  let component: JobslistComponent;
  let fixture: ComponentFixture<JobslistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobslistComponent]
    });
    fixture = TestBed.createComponent(JobslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
