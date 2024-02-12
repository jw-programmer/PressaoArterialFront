import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { PressaoArterialService } from '../../services/pressao-arterial.service';
import { NewPressaoArterial } from '../../models/new-pressao.dto';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-pressao-arterial-form',
  standalone: true,
  imports: [MatFormFieldModule, MatButtonModule,MatInputModule, FormsModule, RouterModule],
  templateUrl: './pressao-arterial-form.component.html',
  styleUrl: './pressao-arterial-form.component.scss'
})
export class PressaoArterialFormComponent {

  newPressaoDto: NewPressaoArterial = new NewPressaoArterial("","");

  constructor(private pressaoService: PressaoArterialService,
    private router: Router){}

  submmitPressao(): void {
    this.pressaoService.insertPressao(this.newPressaoDto).subscribe( () => {
      console.log("Cadastrado no banco com sucesso.")
      this.router.navigate(['pressao'])
    });
  }

}
