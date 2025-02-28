import { Component, OnInit } from '@angular/core';
import { CategoriaService, Categoria } from 'src/app/core/services/categoria.service';
import { MatDialog } from '@angular/material/dialog';
import { FormularioComponent } from '../formulario/formulario.component';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nome', 'descricao', 'acoes'];
  dataSource: Categoria[] = [];

  constructor(
    private categoriaService: CategoriaService,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.carregarCategorias();
  }

  carregarCategorias(): void {
    this.categoriaService.listar().subscribe(data => this.dataSource = data);
  }

  excluir(id: number): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.categoriaService.deletar(id).subscribe(() => {
          this.carregarCategorias();
        });
      }
    });
  }

  abrirDialogo(categoria?: Categoria): void {
    const dialogRef = this.dialog.open(FormularioComponent, {
      width: '400px',
      data: categoria || {}
    });

    dialogRef.afterClosed().subscribe(() => this.carregarCategorias());
  }
}
