import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Credito } from '../models/credito.model';

@Injectable({ providedIn: 'root' })
export class CreditoService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  listarPorNfse(nfse: string): Observable<Credito[]> {
    return this.http.get<Credito[]>(`${this.baseUrl}/${nfse}`);
  }

  buscarPorNumero(numero: string): Observable<Credito> {
    return this.http.get<Credito>(`${this.baseUrl}/credito/${numero}`);
  }
}
