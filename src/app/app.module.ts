import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { MenuLateralComponent } from './components/menu-lateral/menu-lateral.component';
import { OpcaoMenuComponent } from './components/opcao-menu/opcao-menu.component';
import { BoasVindasComponent } from './components/boas-vindas/boas-vindas.component';
import { BlockUIModule } from 'ng-block-ui';

@NgModule({
  declarations: [
    AppComponent,
    MenuLateralComponent,
    OpcaoMenuComponent,
    BoasVindasComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BlockUIModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
