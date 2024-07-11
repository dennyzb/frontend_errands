import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenderIndexComponent } from './sender-index.component';

describe('SenderIndexComponent', () => {
  let component: SenderIndexComponent;
  let fixture: ComponentFixture<SenderIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SenderIndexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SenderIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
