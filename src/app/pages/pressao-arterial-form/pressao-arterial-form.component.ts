import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-pressao-arterial-form',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule],
  templateUrl: './pressao-arterial-form.component.html',
  styleUrl: './pressao-arterial-form.component.scss'
})
export class PressaoArterialFormComponent {

}
