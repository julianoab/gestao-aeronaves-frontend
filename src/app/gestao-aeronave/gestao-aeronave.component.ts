import { Component, OnInit } from '@angular/core';
import { AeronaveService } from '../services/aeronave.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { AeronaveDTO } from '../models/aeronave-dto';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AeronaveQtdeCadastraPorFabricante } from '../models/aeronave-qtde-cadastrada-por-fabricante-dto';

@Component({
  selector: 'app-gestao-aeronave',
  templateUrl: './gestao-aeronave.component.html',
  styleUrls: ['./gestao-aeronave.component.css']
})
export class GestaoAeronaveComponent implements OnInit {

  aeronaveForm!: FormGroup;
  quantideNaoVendida: number = 0;
  quantidadeCadastradaPorFabricante: AeronaveQtdeCadastraPorFabricante[] = [];

  dataSource = new MatTableDataSource<AeronaveDTO>;
  columnsToDisplay = ['id', 'nome', 'fabricante', 'ano', 'descricao', 'vendido', 'acoes'];

  dataSourceFabricante = new MatTableDataSource<AeronaveQtdeCadastraPorFabricante>;
  columnsFabricanteToDisplay = ['fabricante', 'quantidadeCadastrada'];

  ngOnInit() {
    this.carregaFormInicial();
    this.carregarInformacoesTela();
  }

  constructor(private aeronaveService: AeronaveService,
    private fb: FormBuilder) { }

  carregaFormInicial(): void {
    this.aeronaveForm = this.fb.group({
      id:[''],
      nome: [''],
      fabricante: [''],
      ano: [''],
      descricao: [''],
      vendido: [''],
    }) ;
  }

  carregarInformacoesTela() {
    this.aeronaveService.listaAerovaves().subscribe(aerovaves => {
      this.dataSource.data = aerovaves;
    })
    this.carregaQuantidadeNaoVendida();
    this.retornaQuantidadeCadastradaPorFabricante();
  }

  excluir(aeronave: AeronaveDTO): void {
    this.aeronaveService.excluir(aeronave.id).subscribe(_ => {
      this.atualizarTabela();
    });
  }

  salvar() {
     const aeronave: AeronaveDTO = {...this.aeronaveForm.value};
     if(aeronave.id) {
        this.salvarEdicao(aeronave);
     } else {
      this.salvarNova(aeronave);
     }
  }

  editar(aeronaveDTO: AeronaveDTO) {
    this.carregaForm(aeronaveDTO);
  }
  
  salvarNova(aeronave: AeronaveDTO) {
    this.aeronaveService.salvar(this.aeronaveForm.value).subscribe(() => {
      this.atualizarTabela();
      this.aeronaveForm.reset();
    });
  }

  salvarEdicao(aeronave: AeronaveDTO) {
    this.aeronaveService.atualizar(aeronave).subscribe(() => {
      this.atualizarTabela();
      this.aeronaveForm.reset();
    });
  }

  carregaForm(aeronaveDTO: AeronaveDTO) {
    this.aeronaveForm.get('id')?.setValue(aeronaveDTO.id);
    this.aeronaveForm.get('nome')?.setValue(aeronaveDTO.nome);
    this.aeronaveForm.get('fabricante')?.setValue(aeronaveDTO.fabricante);
    this.aeronaveForm.get('ano')?.setValue(aeronaveDTO.ano);
    this.aeronaveForm.get('descricao')?.setValue(aeronaveDTO.descricao);
    this.aeronaveForm.get('vendido')?.setValue(aeronaveDTO.vendido);
  }

  atualizarTabela() {
    this.carregarInformacoesTela();
    this.dataSource._updateChangeSubscription;
  }

  formataSituacao(situacao: Boolean): string {
    return situacao === true ? 'vendido' : 'disponível';
  }
  
  carregaQuantidadeNaoVendida() {
    this.aeronaveService.retornaQuatidadeNaoVendida().subscribe(quantidade => {
      this.quantideNaoVendida = quantidade;
    });
  }

  retornaQuantidadeCadastradaPorFabricante() {
    this.aeronaveService.retornaQuatidadeCadastradaPorFabricante().subscribe(resultado => {
      this.dataSourceFabricante.data = resultado;
    });
  }
  
}

