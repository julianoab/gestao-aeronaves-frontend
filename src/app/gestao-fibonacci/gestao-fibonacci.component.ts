import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FibonacciService } from '../services/fibonacci.service';

@Component({
  selector: 'app-gestao-fibonacci',
  templateUrl: './gestao-fibonacci.component.html',
  styleUrls: ['./gestao-fibonacci.component.css']
})
export class GestaoFibonacciComponent implements OnInit {

  fibonacciForm!: FormGroup;

  dataSource = new MatTableDataSource<number>;
  columnsToDisplay = ['sequencia'];

  ngOnInit() {
    this.carregaFormInicial();
  }

  constructor(private fibonacciService: FibonacciService,
    private fb: FormBuilder) { }

  carregaFormInicial(): void {
    this.fibonacciForm = this.fb.group({
      numero: ['', [Validators.required]],
    }) ;
  }

  gerar() {
    this.fibonacciService.gerar(this.fibonacciForm.get('numero')?.value).subscribe( resultado => {
      this.dataSource.data = resultado.sequencia;
    });
  }

}
