import { DatePipe } from '@angular/common';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { PressaoArterialService } from '../../services/pressao-arterial.service';
import { PressaoArterial } from '../../models/pressao-arterial.dto';
import { PressaoArterialFilterComponent } from "../../shared/pressao-arterial-filter/pressao-arterial-filter.component";
import { SharedFilterService } from '../../services/shared-filter.service';
import { PressaoFilter } from '../../models/pressao-filter.dto';

@Component({
    selector: 'app-pressao-arterial-list',
    standalone: true,
    templateUrl: './pressao-arterial-list.component.html',
    styleUrl: './pressao-arterial-list.component.scss',
    imports: [MatListModule, MatIconModule, MatButtonModule, RouterModule, MatTableModule, DatePipe, MatPaginatorModule, MatSidenavModule, PressaoArterialFilterComponent,]
})
export class PressaoArterialListComponent implements OnInit, AfterViewInit{

  listaPressao: PressaoArterial[] = [];
  colunasDaTabela = ["pressao-sistolica", "pressao-diastolica", "data-medicao", "risco"];

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  totalElements: number = 0;

  dataSource !: MatTableDataSource<PressaoArterial>;

  filter !: PressaoFilter;

  constructor(
    private pressaoService: PressaoArterialService,
    private filterService: SharedFilterService
  ) { }

  ngOnInit(): void {
    this.filterService.pressaoFiltered$.subscribe(filter => {
      this.filter = filter;
      this.madeRequest(0, 5, filter);
    });
  }

  madeRequest(page: number = 0, linesPerPage = 5, filter: PressaoFilter){
    this.pressaoService.getPagePressao(
      {
        page: page,
        linesPerPage: linesPerPage,
        orderBy: "dataMedicao",
        direction: "DESC",
      },
      filter
    ).subscribe(response => {
      this.dataSource = new MatTableDataSource<PressaoArterial>(response.content);
      this.totalElements = response.totalElements;
    })
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  changePage($event: PageEvent) {
    this.madeRequest($event.pageIndex, $event.pageSize, this.filter);
  }
}
