import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'categorias', loadChildren: () => import('./modules/categoria/categoria.module').then(m => m.CategoriaModule) },
  { path: 'produtos', loadChildren: () => import('./modules/produto/produto.module').then(m => m.ProdutoModule) },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
