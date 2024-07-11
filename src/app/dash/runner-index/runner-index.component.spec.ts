import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunnerIndexComponent } from './runner-index.component';

describe('RunnerIndexComponent', () => {
  let component: RunnerIndexComponent;
  let fixture: ComponentFixture<RunnerIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RunnerIndexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RunnerIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
