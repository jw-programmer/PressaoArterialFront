import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_CONFIG } from '../config/api-url.config';
import { NewPressaoArterial } from '../models/new-pressao.dto';
import { Observable } from 'rxjs';
import { PressaoArterial } from '../models/pressao-arterial.dto';
import { PressaoPageDto } from '../models/new-pressao-page.dot';
import { PressaoPageQuery } from '../models/pressa-query.dto';

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

  public getPagePressao(queryPage: PressaoPageQuery): Observable<PressaoPageDto>{
    return this.http.get<PressaoPageDto>(`${API_CONFIG.baseUrl}/pressao`,{
      params: {...queryPage}
    });
  }
}
