import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AeronaveDTO } from '../models/aeronave-dto';
import { Observable, throwError } from 'rxjs';
import { AeronaveQtdeCadastraPorFabricante } from '../models/aeronave-qtde-cadastrada-por-fabricante-dto';

@Injectable({
  providedIn: 'root'
})
export class AeronaveService {

  readonly url = '/api/aeronaves/';

  constructor(private httpClient: HttpClient) { }

  listaAerovaves(): Observable<AeronaveDTO[]> {
    return this.httpClient.get<AeronaveDTO[]>(this.url);
  }

  excluir(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + id);
  }

  salvar(aeronaveDTO: AeronaveDTO): Observable<AeronaveDTO> {
    return this.httpClient.post<any>(this.url, aeronaveDTO);
  }

  atualizar(aeronaveDTO: AeronaveDTO): Observable<AeronaveDTO> {
    return this.httpClient.put<AeronaveDTO>(this.url + aeronaveDTO.id, aeronaveDTO);
  }

  retornaQuatidadeNaoVendida(): Observable<number> {
    return this.httpClient.get<number>(this.url + 'nao-vendida');
  }

  retornaQuatidadeCadastradaPorFabricante(): Observable<any> {
    return this.httpClient.get<any>(this.url + 'quantidade-cadastrada-fabricante');
  }

}
