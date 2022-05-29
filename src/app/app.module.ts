import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { FooterComponent } from './components/template/footer/footer.component';
import {MatButtonModule} from '@angular/material/button';
import { NavComponent } from './components/template/nav/nav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { HomeComponent } from './components/views/home/home.component';
import {MatCardModule} from '@angular/material/card';
import { UserLoginComponent } from './components/views/user/user-login/user-login.component';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { UserCreateComponent } from './components/views/user/user-create/user-create.component';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ArticleReadComponent } from './components/views/article/article-read/article-read.component';
import {MatTableModule} from '@angular/material/table';
import { UserFavoriteComponent } from './components/views/user/user-favorite/user-favorite.component';
import { ArticleFindByUsernameComponent } from './components/views/article/article-find-by-username/article-find-by-username.component';
import { ArticleGetComponent } from './components/views/article/article-get/article-get.component';
import { ArticleFavoriteComponent } from './components/views/article/article-favorite/article-favorite.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    UserLoginComponent,
    UserCreateComponent,
    ArticleReadComponent,
    UserFavoriteComponent,
    ArticleFindByUsernameComponent,
    ArticleGetComponent,
    ArticleFavoriteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    HttpClientModule,
    MatSnackBarModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
