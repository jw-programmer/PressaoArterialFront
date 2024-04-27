import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { Risco } from '../../models/risco-enun';
import { FormBuilder, FormGroup, ReactiveFormsModule, } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { SharedFilterService } from '../../services/shared-filter.service';


@Component({
  selector: 'app-pressao-arterial-filter',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, ReactiveFormsModule, MatInputModule, MatButtonModule],
  templateUrl: './pressao-arterial-filter.component.html',
  styleUrl: './pressao-arterial-filter.component.scss'
})
export class PressaoArterialFilterComponent {

  riscos = Object.values(Risco);
  filterForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private pressaoFilter: SharedFilterService) {
    this.filterForm = this.formBuilder.group({
      sistolicaInicial: [null],
      sistolicaFinal: [null],
      diastolicaInicial: [null],
      diastolicaFinal: [null],
      dataHoraMedicaoInicial: [null],
      dataHoraMedicaoFinal: [null],
      risco: [null]
    });
  }

  filtrarPressoes() { 
    this.pressaoFilter.setPressaoFilter(this.filterForm.getRawValue());
  }

}
