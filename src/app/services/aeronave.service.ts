import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AeronaveDTO } from '../models/aeronave-dto';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AeronaveService {

  readonly url = 'http://localhost:8080/aeronaves';

  constructor(private httpClient: HttpClient) { }

  listaAerovaves(): Observable<AeronaveDTO[]> {
    return this.httpClient.get<AeronaveDTO[]>('/api/aeronaves');
  }

  excluir(id: number): Observable<any> {
    return this.httpClient.delete<any>('/api/aeronaves/' + id);
  }


}
