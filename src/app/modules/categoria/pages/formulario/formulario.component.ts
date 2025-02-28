import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriaService, Categoria } from 'src/app/core/services/categoria.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private categoriaService: CategoriaService,
    private snackBar: MatSnackBar,
    protected dialogRef: MatDialogRef<FormularioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Categoria
  ) {
    this.form = this.fb.group({
      nome: [data?.nome || '', Validators.required],
      descricao: [data?.descricao || '']
    });
  }

  salvar(): void {
    if (this.form.valid) {
      const categoria = { ...this.data, ...this.form.value };
      const operacao = categoria.id
        ? this.categoriaService.atualizar(categoria.id, categoria)
        : this.categoriaService.salvar(categoria);

      operacao.subscribe(() => {
        this.snackBar.open('Categoria salva!', 'Fechar', { duration: 3000 });
        this.dialogRef.close();
      });
    }
  }
}
