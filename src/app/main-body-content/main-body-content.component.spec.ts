import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBodyContentComponent } from './main-body-content.component';

describe('MainBodyContentComponent', () => {
  let component: MainBodyContentComponent;
  let fixture: ComponentFixture<MainBodyContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainBodyContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainBodyContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
