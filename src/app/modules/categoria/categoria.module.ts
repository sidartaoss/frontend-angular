import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { CategoriaRoutingModule } from './categoria-routing.module';
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
    CategoriaRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule
  ]
})
export class CategoriaModule { }
