import { DatePipe } from '@angular/common';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { PressaoArterialService } from '../../services/pressao-arterial.service';
import { PressaoArterial } from '../../models/pressao-arterial.dto';

@Component({
  selector: 'app-pressao-arterial-list',
  standalone: true,
  imports: [MatListModule, MatIconModule, MatButtonModule, RouterModule, MatTableModule, DatePipe, MatPaginatorModule],
  templateUrl: './pressao-arterial-list.component.html',
  styleUrl: './pressao-arterial-list.component.scss'
})
export class PressaoArterialListComponent implements OnInit, AfterViewInit{

  listaPressao: PressaoArterial[] = [];
  colunasDaTabela = ["pressao-sistolica", "pressao-diastolica", "data-medicao", "risco"];

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  totalElements: number = 0;

  dataSource !: MatTableDataSource<PressaoArterial>;

  constructor(
    private pressaoService: PressaoArterialService
  ) { }

  ngOnInit(): void {
    this.madeRequest();
  }

  madeRequest(page: number = 0, linesPerPage = 5){
    this.pressaoService.getPagePressao(
      {
        page: page,
        linesPerPage: linesPerPage,
        orderBy: "dataMedicao",
        direction: "DESC"
      }
    ).subscribe(response => {
      this.dataSource = new MatTableDataSource<PressaoArterial>(response.content);
      this.totalElements = response.totalElements;
    })
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  changePage($event: PageEvent) {
    this.madeRequest($event.pageIndex, $event.pageSize);
  }
}
