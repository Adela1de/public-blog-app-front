import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleReadComponent } from './components/views/article/article-read/article-read.component';
import { HomeComponent } from './components/views/home/home.component';
import { UserCreateComponent } from './components/views/user/user-create/user-create.component';
import { UserFavoriteComponent } from './components/views/user/user-favorite/user-favorite.component';
import { UserLoginComponent } from './components/views/user/user-login/user-login.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: UserLoginComponent
  },
  {
    path: 'register',
    component: UserCreateComponent
  },
  {
    path: 'articles',
    component: ArticleReadComponent
  },
  {
    path: 'favorites',
    component: UserFavoriteComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
