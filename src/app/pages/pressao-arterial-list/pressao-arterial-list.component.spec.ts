import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PressaoArterialListComponent } from './pressao-arterial-list.component';

describe('PressaoArterialListComponent', () => {
  let component: PressaoArterialListComponent;
  let fixture: ComponentFixture<PressaoArterialListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PressaoArterialListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PressaoArterialListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
