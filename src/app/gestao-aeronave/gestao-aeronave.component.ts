import { Component, OnInit } from '@angular/core';
import { AeronaveService } from '../services/aeronave.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { AeronaveDTO } from '../models/aeronave-dto';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-gestao-aeronave',
  templateUrl: './gestao-aeronave.component.html',
  styleUrls: ['./gestao-aeronave.component.css']
})
export class GestaoAeronaveComponent implements OnInit {


  dataSource = new MatTableDataSource<AeronaveDTO>;
  columnsToDisplay = ['id', 'nome', 'fabricante', 'ano', 'descricao', 'vendido', 'acoes'];

  nome: string = 'Juliano de Aguiar';


  ngOnInit() {
    this.carregarTabela();
  }

  constructor(private aeronaveService: AeronaveService) { }

  carregarTabela() {
    this.aeronaveService.listaAerovaves().subscribe(aerovaves => {
      this.dataSource.data = aerovaves;
      // aerovaves.filter( aerovaves => {

      // })
      // console.log('valores do data source', this.dataSource.data);
    })

  }

  excluir(aeronave: AeronaveDTO): void {
    this.aeronaveService.excluir(aeronave.id).subscribe(_ => {
      
    });
    this.carregarTabela();
    this.dataSource._updateChangeSubscription;
  }

  inserir() {

  }

}

