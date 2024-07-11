import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtisanIndexComponent } from './artisan-index.component';

describe('ArtisanIndexComponent', () => {
  let component: ArtisanIndexComponent;
  let fixture: ComponentFixture<ArtisanIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtisanIndexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtisanIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
