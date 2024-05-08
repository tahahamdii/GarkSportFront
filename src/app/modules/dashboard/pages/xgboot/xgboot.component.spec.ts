import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XgbootComponent } from './xgboot.component';

describe('XgbootComponent', () => {
  let component: XgbootComponent;
  let fixture: ComponentFixture<XgbootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XgbootComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(XgbootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
