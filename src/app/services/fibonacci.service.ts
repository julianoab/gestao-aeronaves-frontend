import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FibonacciDTO } from '../models/fibonacci-dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FibonacciService {

  readonly url = '/api/alticci/';

  constructor(private httpClient: HttpClient) { }

  gerar(n: number): Observable<FibonacciDTO> {
    return this.httpClient.get<FibonacciDTO>(this.url + n);
  }

}
