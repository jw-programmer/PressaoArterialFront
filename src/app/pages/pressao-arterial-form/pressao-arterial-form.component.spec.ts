import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PressaoArterialFormComponent } from './pressao-arterial-form.component';

describe('PressaoArterialFormComponent', () => {
  let component: PressaoArterialFormComponent;
  let fixture: ComponentFixture<PressaoArterialFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PressaoArterialFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PressaoArterialFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
