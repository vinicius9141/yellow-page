import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';
// components
import { HeaderComponent } from './components/header/header.component';
import { ChooseComponent } from './components/choose/choose.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoaderComponent } from './components/loader/loader.component';
import { PopUpComponent } from './components/pop-up/pop-up.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ChooseComponent,
    FooterComponent,
    LoaderComponent,
    PopUpComponent,
  ],
  exports: [
    HeaderComponent,
    ChooseComponent,
    FooterComponent,
    LoaderComponent,
    PopUpComponent,
  ],
  imports: [CommonModule, HttpClientModule, RouterModule, ReactiveFormsModule],
})
export class SharedModule {}
