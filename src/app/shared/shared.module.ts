import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';

const components = [
    HeaderComponent,
    FooterComponent,

  ];
@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RouterModule
  ],
  declarations: components,
  exports: components
})
export class SharedModule {
}
