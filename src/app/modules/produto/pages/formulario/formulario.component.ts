import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProdutoService, Produto } from 'src/app/core/services/produto.service';
import { CategoriaService, Categoria } from 'src/app/core/services/categoria.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  form: FormGroup;
  categorias: Categoria[] = [];

  constructor(
    private fb: FormBuilder,
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private snackBar: MatSnackBar,
    protected dialogRef: MatDialogRef<FormularioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Produto
  ) {
    this.form = this.fb.group({
      nome: [data?.nome || '', Validators.required],
      descricao: [data?.descricao || ''],
      preco: [data?.preco || 0, [Validators.required, Validators.min(0)]],
      categoriaId: [data?.categoriaId || null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.categoriaService.listar().subscribe(categorias => this.categorias = categorias);
  }

  salvar(): void {
    if (this.form.valid) {
      const produto = { ...this.data, ...this.form.value };
      const operacao = produto.id
        ? this.produtoService.atualizar(produto.id, produto)
        : this.produtoService.salvar(produto);

      operacao.subscribe(() => {
        this.snackBar.open('Produto salvo!', 'Fechar', { duration: 3000 });
        this.dialogRef.close();
      });
    }
  }
}
