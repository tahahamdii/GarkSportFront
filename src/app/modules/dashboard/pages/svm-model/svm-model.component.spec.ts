import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvmModelComponent } from './svm-model.component';

describe('SvmModelComponent', () => {
  let component: SvmModelComponent;
  let fixture: ComponentFixture<SvmModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvmModelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvmModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
