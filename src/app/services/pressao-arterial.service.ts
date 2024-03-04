import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_CONFIG } from '../config/api-url.config';
import { NewPressaoArterial } from '../models/new-pressao.dto';
import { Observable } from 'rxjs';
import { PressaoArterial } from '../models/pressao-arterial.dto';
import { PressaoPageDto } from '../models/new-pressao-page.dot';
import { PressaoPageQuery } from '../models/pressa-query.dto';
import { PressaoFilter } from '../models/pressao-filter.dto';

@Injectable({
  providedIn: 'root'
})
export class PressaoArterialService {

  constructor(private http: HttpClient) { }

  public insertPressao(newPressao: NewPressaoArterial){
    return this.http.post(`${API_CONFIG.baseUrl}/pressao`, newPressao, {
      observe: 'response',
      responseType: 'text'
    })
  }

  public getListaPressao(): Observable<PressaoArterial[]> {
    return this.http.get<PressaoArterial[]>(`${API_CONFIG.baseUrl}/pressao`);
  }

  /**
   * Método recusivo para remover nulos dos filtros. Pode existir forma melhor. Se sim, irei realizar um update.
  */
  private createHttpParams(queryObject: any): any {
    return Object.fromEntries(
      Object.entries(queryObject)
        .filter(([_, v]) => v != null)
        .map(([k, v]) => [k, v === Object(v) ? this.createHttpParams(v) : v])
    )
  }

  public getPagePressao(queryPage: PressaoPageQuery, filter: PressaoFilter): Observable<PressaoPageDto>{
    return this.http.get<PressaoPageDto>(`${API_CONFIG.baseUrl}/pressao`,{
      params: this.createHttpParams({...queryPage, ...filter})
    });
  }
}
