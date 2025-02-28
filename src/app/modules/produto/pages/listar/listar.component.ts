import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Produto, ProdutoService } from 'src/app/core/services/produto.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { FormularioComponent } from '../formulario/formulario.component';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nome', 'descricao', 'preco', 'acoes'];
  dataSource: Produto[] = [];

  constructor(
    private produtoService: ProdutoService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.produtoService.listar().subscribe(data => this.dataSource = data);
  }

  excluir(id: number): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: { message: 'Tem certeza que deseja excluir este produto?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.produtoService.deletar(id).subscribe(() => {
          this.carregarProdutos();
        });
      }
    });
  }

  abrirDialogo(produto?: Produto): void {
    const dialogRef = this.dialog.open(FormularioComponent, {
      width: '400px',
      data: produto || {}
    });

    dialogRef.afterClosed().subscribe(() => this.carregarProdutos());
  }
}
