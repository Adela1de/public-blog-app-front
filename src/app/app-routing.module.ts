import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleCreateComponent } from './components/views/article/article-create/article-create.component';
import { ArticleFavoriteComponent } from './components/views/article/article-favorite/article-favorite.component';
import { ArticleFindByUsernameComponent } from './components/views/article/article-find-by-username/article-find-by-username.component';
import { ArticleGetComponent } from './components/views/article/article-get/article-get.component';
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
  },
  {
    path: 'articles/:username',
    component: ArticleFindByUsernameComponent
  },
  {
    path: 'articles/article/:id',
    component: ArticleGetComponent
  },
  {
    path: ':username/:id',
    component: ArticleGetComponent
  },
  {
    path: 'articles/article/favorite/:id',
    component: ArticleFavoriteComponent
  },
  {
    path: 'articles/create/new',
    component: ArticleCreateComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
