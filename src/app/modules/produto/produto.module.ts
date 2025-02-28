import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

import { ReactiveFormsModule } from '@angular/forms';

import { ProdutoRoutingModule } from './produto-routing.module';
import { ListarComponent } from './pages/listar/listar.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { ConfirmDialogComponent } from './pages/confirm-dialog/confirm-dialog.component';


@NgModule({
  declarations: [
    ListarComponent,
    FormularioComponent,
    ConfirmDialogComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatIconModule,
    MatTableModule,
    ProdutoRoutingModule
  ]
})
export class ProdutoModule { }
