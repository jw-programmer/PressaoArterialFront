import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PressaoArterialFilterComponent } from './pressao-arterial-filter.component';

describe('PressaoArterialFilterComponent', () => {
  let component: PressaoArterialFilterComponent;
  let fixture: ComponentFixture<PressaoArterialFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PressaoArterialFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PressaoArterialFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
