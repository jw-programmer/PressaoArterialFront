import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PressaoArterialService } from '../../services/pressao-arterial.service';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { PressaoArterial } from '../../models/pressao-arterial.dto';

@Component({
  selector: 'app-pressao-arterial-list',
  standalone: true,
  imports: [MatListModule, MatIconModule, MatButtonModule, RouterModule],
  templateUrl: './pressao-arterial-list.component.html',
  styleUrl: './pressao-arterial-list.component.scss'
})
export class PressaoArterialListComponent implements OnInit {

  listaPressao: PressaoArterial[] = [];

  constructor(
    private pressaoService: PressaoArterialService
  ){}

  ngOnInit(): void {
    this.pressaoService.getListaPressao().subscribe( (listaPressao) => {
      this.listaPressao = listaPressao;
    });
  }
}
